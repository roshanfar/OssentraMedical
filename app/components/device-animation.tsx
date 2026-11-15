/**
 * Looping render of the instrument articulating and cutting, on a
 * transparent background (animated WebP). Visitors who ask the system for
 * reduced motion get a still frame instead.
 */
export function DeviceAnimation({
  caption,
  className = "",
}: {
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <picture>
        <source
          media="(prefers-reduced-motion: reduce)"
          srcSet="/media/ossentra-cutting-still.webp"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="/media/ossentra-cutting-loop-1800.webp"
        />
        <img
          src="/media/ossentra-cutting-loop.webp"
          alt="Animation of the Ossentra instrument bending its shaft and closing the bone punch jaws"
          width={1200}
          height={462}
          className="block h-auto w-full"
        />
      </picture>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm leading-[1.6] text-steel-dim">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
