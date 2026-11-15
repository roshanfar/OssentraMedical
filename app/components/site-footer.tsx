import { nav, site } from "../content/site";

const heading =
  "font-mono font-bold text-[0.8rem] uppercase tracking-[0.1em] text-[#9fb6ff]";
const link = "text-[1rem] text-[#eef2fc] transition-colors hover:text-white";

export function LinkedInIcon({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm7 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.16-.02-2.65-1.61-2.65-1.62 0-1.86 1.26-1.86 2.56v4.93h-4v-11Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy pt-16 pb-10 text-white">
      <div className="mx-auto w-full max-w-[1160px] px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/ossentra-logo-white.svg"
              alt={site.name}
              width={634}
              height={124}
              className="h-7 w-auto"
            />
            <p className="mt-5 text-[1rem] leading-[1.65] text-[#eef2fc]">
              {site.tagline}. Spun out of {site.origin}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className={heading}>On this page</p>
            <ul className="mt-5 flex flex-col gap-3">
              {[...nav, { href: "#references", label: "References" }].map(
                (item) => (
                  <li key={item.href}>
                    <a href={item.href} className={link}>
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <p className={heading}>Location</p>
            <address className="mt-5 text-[1rem] not-italic leading-[1.65] text-[#eef2fc]">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line.startsWith("PCIGITI") ? (
                    <>
                      <a
                        href={site.pcigiti}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-white"
                      >
                        PCIGITI
                      </a>
                      {line.slice("PCIGITI".length)}
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </address>
            <a
              href={`mailto:${site.email}`}
              className={`mt-4 inline-block underline underline-offset-4 ${link}`}
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 flex items-center gap-2 ${link}`}
            >
              <LinkedInIcon />
              Ossentra on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 font-mono font-bold text-[0.8rem] text-[#cbd5f5]">
          <p className="lg:whitespace-nowrap">{site.regulatoryStatus}</p>
          <p>
            © {new Date().getFullYear()} {site.name}, Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
