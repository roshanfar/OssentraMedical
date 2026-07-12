"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "../content/site";
import { Container } from "./primitives";

/**
 * The mark: a ring with a bite taken out of it, echoing the Ossentra wordmark.
 * It is also, literally, what the instrument does — a punch removes bone one
 * bite at a time.
 */
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <path
        d="M12 2.6 A 9.4 9.4 0 1 1 5.4 18.6"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="butt"
      />
      <path
        d="M5.4 18.6 A 9.4 9.4 0 0 1 2.6 12 L 8.3 12 A 3.7 3.7 0 0 0 9.4 14.6 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bone/90 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <Mark className="h-5 w-5 text-navy" />
            <span className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">
              Ossentra
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`border-b-2 pb-1 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors ${
                        active
                          ? "border-dura text-ink"
                          : "border-transparent text-steel hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-steel md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-hairline md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block border-b border-hairline py-3 font-mono text-xs font-medium uppercase tracking-[0.16em] last:border-b-0 ${
                        active ? "text-dura" : "text-steel"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
