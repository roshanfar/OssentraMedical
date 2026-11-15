"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "../content/site";
import { Container } from "./primitives";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[66px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/ossentra-logo.svg"
              alt="Ossentra"
              width={634}
              height={124}
              className="h-7 w-auto"
            />
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
                      className={`text-[0.9rem] font-medium transition-colors ${
                        active ? "text-ink" : "text-steel hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/#status"
              className="rounded-md border border-hairline-strong bg-white px-4 py-2 text-[0.88rem] font-semibold text-ink transition-colors hover:border-dura hover:text-dura"
            >
              Roadmap
            </Link>
            <Link
              href="/contact"
              className="bg-grad rounded-md px-4 py-2 text-[0.88rem] font-semibold text-white transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md border border-hairline-strong px-4 py-1.5 text-[0.85rem] font-semibold text-ink md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-hairline bg-white md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {[...nav, { href: "/#status", label: "Roadmap" }].map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`block border-b border-hairline py-3 text-[0.95rem] font-medium last:border-b-0 ${
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
