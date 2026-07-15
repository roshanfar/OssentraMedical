import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Register = "plate" | "field";

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
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * A page section. `register` picks the ground: `plate` is the drawing sheet,
 * `field` is the operative field. Vertical rhythm is owned here and nowhere
 * else, so section padding can never be fought over by two competing classes.
 */
export function Section({
  children,
  register = "plate",
  className = "",
  id,
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
  id?: string;
}) {
  // Light sections are transparent so the textured ground shows through;
  // the field register keeps its bold blue block.
  const ground =
    register === "field" ? "bg-ink text-bone-field" : "text-ink";

  return (
    <section id={id} className={`${ground} py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   Type
--------------------------------------------------------------------------- */

/**
 * The mono label that heads a section. On a drawing sheet this is the sheet
 * annotation — it says what you are looking at, not how to feel about it.
 */
export function Eyebrow({
  children,
  register = "plate",
  className = "",
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
}) {
  const tone = register === "field" ? "text-steel-field" : "text-steel";
  return (
    <p
      className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] ${tone} ${className}`}
    >
      {children}
    </p>
  );
}

export function Heading({
  children,
  level = 2,
  register = "plate",
  className = "",
}: {
  children: ReactNode;
  level?: 1 | 2 | 3;
  register?: Register;
  className?: string;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const size =
    level === 1
      ? "text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.04] tracking-[-0.025em]"
      : level === 2
        ? "text-3xl sm:text-4xl leading-[1.08] tracking-[-0.02em]"
        : "text-xl sm:text-2xl leading-[1.15] tracking-[-0.015em]";
  const tone = register === "field" ? "text-bone-field" : "text-ink";

  return (
    <Tag
      className={`font-display font-semibold text-balance ${size} ${tone} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Body copy. Serif, because this audience reads journals, not landing pages. */
export function Lead({
  children,
  register = "plate",
  className = "",
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
}) {
  const tone = register === "field" ? "text-steel-field" : "text-steel";
  return (
    <p className={`font-serif text-lg leading-[1.65] text-pretty ${tone} ${className}`}>
      {children}
    </p>
  );
}

export function Body({
  children,
  register = "plate",
  className = "",
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
}) {
  const tone = register === "field" ? "text-steel-field" : "text-steel";
  return (
    <p className={`font-serif text-base leading-[1.7] text-pretty ${tone} ${className}`}>
      {children}
    </p>
  );
}

/* ---------------------------------------------------------------------------
   Controls
--------------------------------------------------------------------------- */

/**
 * Square corners throughout. Surgical instruments are machined, not rounded,
 * and a pill button would be the one thing on this page that came from a
 * different world.
 */
type ButtonVariant = "solid" | "outline";

const buttonBase =
  "inline-flex items-center justify-center gap-2 px-5 h-11 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors";

function buttonClasses(variant: ButtonVariant, register: Register) {
  if (variant === "solid") {
    return register === "field"
      ? `${buttonBase} bg-bone-field text-ink hover:bg-dura-field`
      : `${buttonBase} bg-ink text-bone hover:bg-dura`;
  }
  return register === "field"
    ? `${buttonBase} border border-hairline-field text-bone-field hover:border-bone-field`
    : `${buttonBase} border border-ink/25 text-ink hover:border-ink`;
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  register = "plate",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  register?: Register;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link
      href={href}
      className={`${buttonClasses(variant, register)} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  register = "plate",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  register?: Register;
} & ComponentProps<"button">) {
  return (
    <button
      className={`${buttonClasses(variant, register)} disabled:opacity-40 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ---------------------------------------------------------------------------
   Drafting-sheet devices
--------------------------------------------------------------------------- */

/**
 * Corner registration marks, as found on a drawing sheet. Purely structural —
 * they say "this is a figure, measured, and it ends here".
 */
function RegistrationMarks({ register }: { register: Register }) {
  const stroke = register === "field" ? "text-steel-field" : "text-steel";
  const mark = "absolute h-3 w-3 border-current";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${stroke}`}>
      <span className={`${mark} left-0 top-0 border-l border-t`} />
      <span className={`${mark} right-0 top-0 border-r border-t`} />
      <span className={`${mark} bottom-0 left-0 border-b border-l`} />
      <span className={`${mark} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

/**
 * A numbered figure with a caption, the way an atlas plate is set. Figure
 * numbers are used *only* here, where the number is a real cross-reference —
 * never as decoration on a list of features.
 */
export function FigurePlate({
  number,
  title,
  caption,
  children,
  register = "plate",
  className = "",
}: {
  number: string;
  title: string;
  caption?: ReactNode;
  children: ReactNode;
  register?: Register;
  className?: string;
}) {
  const rule = register === "field" ? "border-hairline-field" : "border-hairline";
  const surface = register === "field" ? "bg-ink" : "bg-plate";
  const label = register === "field" ? "text-steel-field" : "text-steel";

  return (
    <figure className={`relative border ${rule} ${surface} p-4 sm:p-6 ${className}`}>
      <RegistrationMarks register={register} />
      <figcaption
        className={`mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] ${label}`}
      >
        <span className="tnum font-semibold">Fig. {number}</span>
        <span aria-hidden className={`h-px flex-1 border-t ${rule}`} />
        <span>{title}</span>
      </figcaption>

      {children}

      {caption ? (
        <div
          className={`mt-4 border-t ${rule} pt-3 font-mono text-[0.6875rem] leading-[1.6] ${label}`}
        >
          {caption}
        </div>
      ) : null}
    </figure>
  );
}

/** A hairline rule with an optional mono label sitting on it. */
export function LabelledRule({
  children,
  register = "plate",
  className = "",
}: {
  children?: ReactNode;
  register?: Register;
  className?: string;
}) {
  const rule = register === "field" ? "border-hairline-field" : "border-hairline";
  const label = register === "field" ? "text-steel-field" : "text-steel";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {children ? (
        <span
          className={`font-mono text-[0.6875rem] font-medium uppercase tracking-[0.18em] ${label}`}
        >
          {children}
        </span>
      ) : null}
      <span aria-hidden className={`h-px flex-1 border-t ${rule}`} />
    </div>
  );
}

/**
 * The regulatory status line. It appears on every page that makes a claim
 * about the device. It is not fine print to be hidden — for this audience,
 * stating the stage plainly is what makes the rest of the page credible.
 */
export function StatusNote({
  children,
  register = "plate",
  className = "",
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
}) {
  const tone = register === "field" ? "text-steel-field" : "text-steel";
  const rule = register === "field" ? "border-dura-field" : "border-dura";
  return (
    <p
      className={`border-l-2 ${rule} pl-3 font-mono text-[0.6875rem] leading-[1.6] uppercase tracking-[0.1em] ${tone} ${className}`}
    >
      {children}
    </p>
  );
}
