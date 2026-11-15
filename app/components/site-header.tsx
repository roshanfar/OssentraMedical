"use client";

import { useState } from "react";
import { nav } from "../content/site";
import { Container } from "./primitives";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[68px] items-center justify-between gap-6">
          <a href="#top" className="flex items-center" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/ossentra-logo.svg"
              alt="Ossentra"
              width={634}
              height={124}
              className="h-7 w-auto"
            />
          </a>

          <nav aria-label="Sections" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.98rem] font-semibold text-steel transition-colors hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="hidden border border-navy bg-navy px-5 py-2.5 text-[0.96rem] font-semibold text-white transition-colors hover:border-dura hover:bg-dura lg:inline-block"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="border border-ink/30 px-4 py-1.5 font-mono font-bold text-[0.8rem] uppercase tracking-[0.08em] text-ink lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-hairline bg-white lg:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {[...nav, { href: "#contact", label: "Contact" }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-hairline py-3 text-[0.98rem] font-semibold text-ink last:border-b-0"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
