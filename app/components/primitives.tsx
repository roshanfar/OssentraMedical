import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ---------------------------------------------------------------------------
   Layout
--------------------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1160px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * A page section. `tone` alternates the ground between white and the cool
 * grey, so consecutive sections read as separate sheets.
 */
export function Section({
  children,
  tone = "white",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "white" | "grey";
  className?: string;
  id?: string;
}) {
  const ground = tone === "grey" ? "bg-field" : "bg-bone";
  return (
    <section id={id} className={`${ground} py-20 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Section header in the manner of a drawing sheet: a numbered mono label
 * running into a hairline rule, then the heading and an optional intro.
 */
export function SectionHead({
  index,
  label,
  title,
  intro,
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <header className={className}>
      <div className="flex items-center gap-4 font-mono font-semibold text-[0.8rem] uppercase tracking-[0.1em] text-dura">
        <span className="tnum">{index}</span>
        <span>{label}</span>
        <span aria-hidden className="h-px flex-1 bg-hairline" />
      </div>
      <h2 className="mt-7 max-w-3xl font-display text-[2rem] font-bold leading-[1.15] tracking-[-0.015em] text-ink text-balance sm:text-[2.45rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-[1.06rem] leading-[1.7] text-steel text-pretty">
          {intro}
        </p>
      ) : null}
    </header>
  );
}

/* ---------------------------------------------------------------------------
   Type
--------------------------------------------------------------------------- */

/** Small mono label for sub-parts within a section. */
export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-mono font-semibold text-[0.8rem] uppercase tracking-[0.09em] text-steel-dim ${className}`}
    >
      {children}
    </p>
  );
}

export function Body({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[1.04rem] leading-[1.7] text-steel text-pretty ${className}`}>
      {children}
    </p>
  );
}

/** The phrase a heading turns on, in the accent blue. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-dura">{children}</span>;
}

/* ---------------------------------------------------------------------------
   Controls: square-cornered, like the instrument itself.
--------------------------------------------------------------------------- */

type ButtonVariant = "solid" | "outline";

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border px-6 py-3 text-[1rem] font-medium transition-colors duration-150";

function buttonClasses(variant: ButtonVariant) {
  return variant === "solid"
    ? `${buttonBase} border-navy bg-navy text-white hover:border-dura hover:bg-dura`
    : `${buttonBase} border-ink/30 bg-transparent text-ink hover:border-ink`;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={`${buttonClasses(variant)} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/**
 * The regulatory status line, stated plainly wherever the device is
 * described.
 */
export function StatusNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`border-l-2 border-dura pl-3 text-[0.9rem] leading-[1.6] text-steel ${className}`}
    >
      {children}
    </p>
  );
}
