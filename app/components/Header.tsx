"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  ["Selah", "/selah"],
  ["Products", "/products"],
  ["Stories", "/stories"],
  ["Journal", "/blog"],
  ["About", "/about"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand-link" href="/" aria-label="FaithCine home">
          <Image className="brand-logo" src="/faithcine-logo-white.png" alt="FaithCine - Till Jesus be seen, Matthew 5:14-16" width={1402} height={1122} priority />
        </Link>
        <button
          ref={buttonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close menu" : "Open menu"}
        </button>
        <nav id="primary-navigation" className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="utility-link" href="/contact">Contact</Link>
          <Link className="button button-small button-primary" href="/#early-access">Join early access</Link>
        </div>
      </div>
    </header>
  );
}
