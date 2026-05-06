"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Brand from "./Brand";

const NAV = [
  { p: "/", label: "Home" },
  { p: "/story", label: "The Story" },
  { p: "/programmes", label: "Programmes" },
  { p: "/transparency", label: "Where The Money Goes" },
  { p: "/news", label: "News" },
  { p: "/events", label: "Events" },
  { p: "/about", label: "About" },
];

function isActive(currentPath: string, p: string) {
  if (p === "/") return currentPath === "/";
  return currentPath === p || currentPath.startsWith(p + "/");
}

export default function NavBar() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Brand small />
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV.map((n) => (
                <li key={n.p}>
                  <Link href={n.p} className={isActive(pathname, n.p) ? "active" : ""}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <Link className="btn btn-primary" href="/donate">
              Donate
            </Link>
            <button
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="sa-strip" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Menu">
          <button className="close" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            ✕
          </button>
          <ul>
            {NAV.map((n) => (
              <li key={n.p}>
                <Link href={n.p} onClick={() => setMobileOpen(false)}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                style={{ color: "var(--burgundy)" }}
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
