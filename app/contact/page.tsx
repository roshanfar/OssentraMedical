import type { Metadata } from "next";
import { Eyebrow, Heading, Section } from "../components/primitives";
import { site } from "../content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Ossentra.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow>Contact</Eyebrow>
        <Heading level={1} className="mt-6">
          Get in touch.
        </Heading>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block font-mono text-lg font-medium tracking-[0.02em] text-dura underline underline-offset-4 hover:text-ink"
        >
          {site.email}
        </a>

        <address className="mt-8 font-serif text-base not-italic leading-[1.65] text-steel">
          {site.origin}
          <br />
          Toronto, Ontario, Canada
        </address>
      </div>
    </Section>
  );
}
