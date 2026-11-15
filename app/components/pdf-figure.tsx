/**
 * A figure with a transparent background, set straight on the page with an
 * optional caption underneath. No frame, card or fill behind the image.
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
    <figure className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="mx-auto block h-auto w-full" />
      {caption ? (
        <figcaption className="mt-4 text-center text-sm leading-[1.6] text-steel-dim">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
