import Link from "next/link";
import { ecosystem, nav, site } from "../content/site";
import { Container } from "./primitives";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline-field bg-ink py-14 text-bone-field">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/ossentra-logo-dark.svg"
              alt={site.name}
              width={637}
              height={127}
              className="h-8 w-auto"
            />
            <p className="mt-4 font-serif text-sm leading-[1.65] text-steel-field">
              {site.tagline}. Spun out of {site.origin}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block font-mono text-xs tracking-[0.06em] text-dura-field underline underline-offset-4 hover:text-bone-field"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 md:items-end">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-steel-field transition-colors hover:text-bone-field"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-hairline-field pt-6">
          {ecosystem.map((item) => (
            <li
              key={item.name}
              title={item.detail}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-steel-field"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-hairline-field pt-6">
          <p className="font-mono text-[0.6875rem] uppercase leading-[1.7] tracking-[0.1em] text-steel-field">
            {site.regulatoryStatus}
          </p>
          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-steel-field">
            © {new Date().getFullYear()} {site.name}, Toronto, Canada
          </p>
        </div>
      </Container>
    </footer>
  );
}
