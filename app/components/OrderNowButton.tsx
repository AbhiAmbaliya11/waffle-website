"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";

export default function OrderNowButton() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <Link href="/castle-locator" className="global-order-fab cta-btn">
      <ShoppingBag size={20} />
      Order Now
    </Link>
  );
}
