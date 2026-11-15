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
    <div className={`mx-auto w-full max-w-[1140px] px-6 ${className}`}>
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
  // Sections alternate between the two dark grounds.
  const ground = register === "field" ? "bg-field" : "bg-bone";

  return (
    <section id={id} className={`${ground} text-ink py-20 sm:py-24 ${className}`}>
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
  void register;
  return (
    <p
      className={`text-[0.76rem] font-bold uppercase tracking-[0.14em] text-dura ${className}`}
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
      ? "text-[2.3rem] sm:text-[2.9rem] lg:text-[3.25rem] leading-[1.12] tracking-[-0.02em]"
      : level === 2
        ? "text-[1.8rem] sm:text-[2.35rem] leading-[1.18] tracking-[-0.015em]"
        : "text-xl sm:text-2xl leading-[1.2] tracking-[-0.015em]";
  void register;

  return (
    <Tag
      className={`font-display font-bold text-balance text-ink ${size} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Body copy, in the muted tone. */
export function Lead({
  children,
  register = "plate",
  className = "",
}: {
  children: ReactNode;
  register?: Register;
  className?: string;
}) {
  void register;
  return (
    <p className={`text-lg leading-[1.65] text-pretty text-steel ${className}`}>
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
  void register;
  return (
    <p className={`text-base leading-[1.7] text-pretty text-steel ${className}`}>
      {children}
    </p>
  );
}

/* ---------------------------------------------------------------------------
   Controls
--------------------------------------------------------------------------- */

/** Pill buttons: gradient for the main action, glass for the second. */
type ButtonVariant = "solid" | "outline";

const buttonBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200";

function buttonClasses(variant: ButtonVariant, register: Register) {
  void register;
  if (variant === "solid") {
    return `${buttonBase} bg-grad border-transparent text-white`;
  }
  return `${buttonBase} border-hairline-strong bg-white text-ink hover:border-dura hover:text-dura`;
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
  const surface = "bg-plate";
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
  void register;
  const rule = "border-hairline";
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {children ? (
        <span
          className={`text-[0.76rem] font-bold uppercase tracking-[0.14em] text-dura`}
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
  void register;
  return (
    <p
      className={`border-l-2 border-dura pl-3 text-[0.78rem] leading-[1.6] text-steel ${className}`}
    >
      {children}
    </p>
  );
}

/** A raised card on the dark ground. */
export function Card({
  children,
  className = "",
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
}) {
  return (
    <Tag
      className={`card-shadow rounded-xl border border-hairline bg-plate p-6 sm:p-7 ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Accent-coloured text, for the phrase a heading turns on. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-grad">{children}</span>;
}
