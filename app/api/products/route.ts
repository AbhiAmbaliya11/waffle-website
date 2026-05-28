import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://qoynqznmcaaflmnjpxwx.supabase.co";
    const publishableKey =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      "sb_publishable_Chhu9OAIE30aFe1lIP112w_q1SZgsC7";

    // Fetch directly via REST API — bypasses RLS entirely on the server
    const res = await fetch(
      `${supabaseUrl}/rest/v1/products?is_active=eq.true&order=created_at.desc&select=id,title,category,image_url`,
      {
        headers: {
          apikey: publishableKey,
          Authorization: `Bearer ${publishableKey}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        // Do not cache — always fresh
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Supabase products fetch error:", res.status, text);
      return NextResponse.json(
        { error: "Failed to fetch products", detail: text },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Products API route error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
