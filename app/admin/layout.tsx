import "./admin.css";

export const metadata = {
  title: "Admin Panel — Waffle Castle",
  robots: "noindex, nofollow",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

