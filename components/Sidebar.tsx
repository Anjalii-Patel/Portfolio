"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/experience",   label: "Experience" },
  { href: "/projects",     label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/about",        label: "About" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-top-row">
        <div className="sidebar-identity">
          <Link href="/" className="sidebar-name-link">
            <span className="sidebar-name">Anjali Patel</span>
          </Link>
          <div className="sidebar-role">Research · ISRO</div>
        </div>

        <div className="sidebar-mobile-pill" title="Active Project: PDEU · ISRO">
          <span className="status-dot" aria-hidden="true" />
          <span>PDEU · ISRO</span>
        </div>
      </div>

      <div className="sidebar-divider" />

      <nav aria-label="Main Navigation">
        {navLinks.map(({ href, label }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href) ||
                (href === "/experience" && pathname.startsWith("/work"));
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
        <div className="sidebar-footer-header">
          <span className="status-dot" aria-hidden="true" />
          <span className="sidebar-footer-title">PDEU · ISRO Project</span>
        </div>
        <span className="sidebar-footer-date">March 2026 - Present</span>
      </div>
    </aside>
  );
}
