# Ossentra website

Live at https://www.ossentramedical.com. Every push to `main` deploys to production on Vercel automatically.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

The site is a single scrolling page. Old URLs (`/technology`, `/clinical-need`, `/team`, `/contact`) redirect to their sections (see `next.config.ts`).

| What | File |
| --- | --- |
| Page layout and section order | `app/page.tsx` |
| Instrument, workflow, competition table, roadmap, regulatory, market | `app/content/device.ts` |
| Clinical comparison and the reference list | `app/content/need.ts` |
| Team, advisors, supporter logos | `app/content/team.ts` |
| Site name, regulatory status line, email, address, LinkedIn, menu, news items | `app/content/site.ts` |
| Header and footer | `app/components/site-header.tsx`, `app/components/site-footer.tsx` |
| Animated roadmap staircase | `app/components/roadmap-ladder.tsx` |
| Hero device animation | `app/components/device-animation.tsx` |
| Colours, font and base styles | `app/globals.css` (font is Public Sans, loaded in `app/layout.tsx`) |

## Assets

- `public/brand/` logos (navy for the header, white for the footer)
- `public/media/` hero animation (`ossentra-cutting-loop.webp` for phones, `-1800.webp` for large screens) and the endoscope cutting loop (`endoscope-cutting.mp4`)
- `public/figures/` figures with transparent backgrounds, and team photos
- `public/logos/` accelerator and institution logos

## Content rules

- Clinical claims must come from a published paper or be supported by the surgeon interviews.
- References list only published papers and the patent, numbered in order of first appearance on the page.
- No financial projections, pricing or fundraising terms.
- No competitor company names; describe competitors by category.
- The current device is the articulating bone punch only.

## Adding a news item

Add an entry at the top of the `news` array in `app/content/site.ts` (date, source, logo, title, short summary in your own words, link).
