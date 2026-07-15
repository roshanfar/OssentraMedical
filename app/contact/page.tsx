import type { Metadata } from "next";
import { EnquiryForm } from "../components/enquiry-form";
import {
  Body,
  Eyebrow,
  Heading,
  LabelledRule,
  Lead,
  Section,
  StatusNote,
} from "../components/primitives";
import { contactRoutes, site } from "../content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ossentra for surgeon evaluation, hospital procurement, and investor enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="border-b border-hairline">
        <div className="max-w-3xl">
          <Eyebrow>Contact</Eyebrow>
          <Heading level={1} className="mt-6">
            Tell us which conversation this is.
          </Heading>
          <Lead className="mt-7">
            Surgeons, procurement, and investors each need a different thing.
            Say which you are for the fastest useful reply.
          </Lead>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-20">
          {/* Direct routes. These work today; the form does not yet. */}
          <div>
            <LabelledRule className="mb-8">Direct</LabelledRule>

            <ul className="flex flex-col">
              {contactRoutes.map((route) => (
                <li
                  key={route.id}
                  className="border-t border-hairline py-6 last:border-b"
                >
                  <h2 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink">
                    {route.audience}
                  </h2>
                  <Body className="mt-2 text-[0.9375rem]">{route.detail}</Body>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block font-mono text-sm font-medium tracking-[0.04em] text-dura underline underline-offset-4 hover:text-ink"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-steel">
                Located at
              </p>
              <address className="mt-3 font-serif text-base not-italic leading-[1.65] text-steel">
                {site.centre}
                <br />
                {site.origin}
                <br />
                Toronto, Ontario, Canada
              </address>
            </div>

            <StatusNote className="mt-10">{site.regulatoryStatus}</StatusNote>
          </div>

          {/* The routed enquiry form. */}
          <div>
            <LabelledRule className="mb-8">Enquiry</LabelledRule>
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
