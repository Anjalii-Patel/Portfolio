"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/work",        label: "Work & Research" },
  { href: "/publications",label: "Publications" },
  { href: "/about",       label: "About" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-identity">
        <div className="sidebar-name">Anjali Patel</div>
        <div className="sidebar-role">AI · Research</div>
      </div>

      <div className="sidebar-divider" />

      <nav>
        {navLinks.map(({ href, label }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={isActive ? "active" : ""}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        PDEU · ISRO Project<br />
        Feb. 2026 — present
      </div>
    </aside>
  );
}
