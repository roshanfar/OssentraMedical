/**
 * A figure slot for an image exported from the pitch deck or grant PDF.
 * Drop the PNG into `public/figures/` under the given `src` name and it
 * appears. Until then the framed caption holds the space.
 */
export function PdfFigure({
  src,
  alt,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={`card-shadow overflow-hidden rounded-xl border border-hairline bg-plate ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full" />
      {caption ? (
        <figcaption className="border-t border-hairline px-5 py-4 font-mono text-[0.6875rem] uppercase leading-[1.6] tracking-[0.12em] text-steel">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
