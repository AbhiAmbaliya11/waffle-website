"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import AdminSidebar from "../AdminSidebar";

export default function AdminLayoutClient({
  userEmail,
  children,
}: {
  userEmail: string | undefined;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const getPageTitle = (path: string) => {
    if (path === "/admin") return "Dashboard";
    if (path.startsWith("/admin/products")) return "Products";
    if (path.startsWith("/admin/blogs")) return "Blog Posts";
    if (path.startsWith("/admin/leads")) return "Leads";
    if (path.startsWith("/admin/events")) return "Event Bookings";
    return "Admin Panel";
  };

  return (
    <div className={`admin-root ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Mobile Topbar */}
      <div className="admin-mobile-topbar">
        <button
          className="sidebar-toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <span className="mobile-brand-title">{getPageTitle(pathname)}</span>
        <div style={{ width: 32 }} /> {/* balance layout */}
      </div>

      {/* Overlay for Mobile */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AdminSidebar userEmail={userEmail} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <main className="admin-main">{children}</main>
    </div>
  );
}
