import Link from "next/link";
import { ecosystem, site } from "../content/site";
import { Container } from "./primitives";

const explore = [
  { href: "/technology", label: "Technology" },
  { href: "/clinical-need", label: "Clinical need" },
  { href: "/#status", label: "Development status" },
  { href: "/team", label: "Team" },
] as const;

const heading =
  "text-[0.76rem] font-bold uppercase tracking-[0.14em] text-white";
const link = "text-[0.92rem] text-[#c3cdf0] transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-navy pt-16 pb-10 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/ossentra-logo-white.svg"
              alt={site.name}
              width={634}
              height={124}
              className="h-7 w-auto"
            />
            <p className="mt-5 text-[0.92rem] leading-[1.65] text-[#c3cdf0]">
              {site.tagline}. Spun out of {site.origin}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-[0.92rem] font-medium text-white underline underline-offset-4 hover:text-[#c3cdf0]"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Explore">
            <p className={heading}>Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Partnerships">
            <p className={heading}>Partnerships</p>
            <ul className="mt-5 flex flex-col gap-3">
              {ecosystem.map((item) => (
                <li key={item.name} title={item.detail}>
                  <Link href="/team" className={link}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className={link}>
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-[0.82rem] text-[#a9b6e6] sm:flex-row sm:justify-between sm:gap-8">
          <p className="shrink-0">
            © {new Date().getFullYear()} {site.name}, Toronto, Canada.
          </p>
          <p className="sm:text-right">{site.regulatoryStatus}</p>
        </div>
      </Container>
    </footer>
  );
}
