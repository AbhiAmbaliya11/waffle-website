import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided in the request" },
        { status: 400 }
      );
    }

    // Generate a unique, sanitized filename
    const originalName = file.name || "image.png";
    const ext = path.extname(originalName).toLowerCase();
    const baseName = path.basename(originalName, ext);
    const sanitizedBase = baseName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-");
    const uniqueFilename = `${Date.now()}-${sanitizedBase}${ext}`;

    let publicUrl = "";

    // 1. Try Supabase Storage first if service role key is available
    if (process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.NEXT_PUBLIC_SUPABASE_URL) {
      try {
        const { createServiceClient } = require("@/lib/supabase/server");
        const supabase = createServiceClient();
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        const { data, error } = await supabase.storage
          .from("images")
          .upload(uniqueFilename, fileBuffer, {
            contentType: file.type || "image/png",
            cacheControl: "3600",
            upsert: true,
          });

        if (error) {
          console.warn("Supabase Storage upload failed, falling back to local filesystem:", error.message);
        } else if (data) {
          const { data: urlData } = supabase.storage
            .from("images")
            .getPublicUrl(uniqueFilename);
          publicUrl = urlData.publicUrl;
        }
      } catch (supabaseError: any) {
        console.warn(
          "Supabase Storage initialization or upload failed, falling back to local filesystem:",
          supabaseError.message || supabaseError
        );
      }
    }

    // 2. Fallback to local disk storage in /public/images
    if (!publicUrl) {
      try {
        const fileBuffer = Buffer.from(await file.arrayBuffer());
        const publicImagesDir = path.join(process.cwd(), "public", "images");

        // Ensure directory exists
        await fs.mkdir(publicImagesDir, { recursive: true });

        const filePath = path.join(publicImagesDir, uniqueFilename);
        await fs.writeFile(filePath, fileBuffer);

        // Return the public relative URL
        publicUrl = `/images/${uniqueFilename}`;
      } catch (fsError: any) {
        console.error("Local filesystem write failed:", fsError);

        if (fsError.code === "EROFS" || fsError.message?.includes("read-only")) {
          const isServiceKeyMissing = !process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY.includes("your-service-role-key-here");
          const isUrlMissing = !process.env.NEXT_PUBLIC_SUPABASE_URL;

          let missingVars = [];
          if (isUrlMissing) missingVars.push("NEXT_PUBLIC_SUPABASE_URL");
          if (isServiceKeyMissing) missingVars.push("SUPABASE_SERVICE_ROLE_KEY");

          if (missingVars.length > 0) {
            throw new Error(
              `Upload failed on live server (read-only filesystem). ` +
              `Please configure the following environment variables on your hosting platform (e.g. Vercel): ${missingVars.join(", ")}.`
            );
          } else {
            throw new Error(
              `Upload failed on live server (read-only filesystem). ` +
              `Supabase keys are present, but the upload failed (check server logs). ` +
              `Please ensure you have created a public storage bucket named "images" in your Supabase project with public read permission.`
            );
          }
        }
        throw fsError;
      }
    }

    return NextResponse.json({ url: publicUrl });
  } catch (error: any) {
    console.error("Upload handler error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upload file" },
      { status: 500 }
    );
  }
}
