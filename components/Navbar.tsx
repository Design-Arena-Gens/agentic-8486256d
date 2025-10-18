"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#vision", label: "Vision" },
  { href: "#concepts", label: "Concepts" },
  { href: "#process", label: "Process" },
  { href: "#cta", label: "Launch" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-slate-950">
            AS
          </span>
          Agentic Studio
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-primary hover:text-primary"
          >
            GitHub
          </Link>
        </nav>
        <button
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 transition hover:border-primary hover:text-primary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-slate-800/60 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-primary" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="https://github.com"
              className="rounded-full border border-slate-700 px-4 py-2 text-center text-sm transition hover:border-primary hover:text-primary"
              onClick={() => setOpen(false)}
            >
              GitHub
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
