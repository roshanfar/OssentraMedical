"use client";

import { useEffect, useRef } from "react";

/**
 * Looping render of the instrument articulating and cutting.
 * Plays muted and inline; holds on the poster frame when the visitor
 * has asked the system for reduced motion.
 */
export function DeviceAnimation({
  caption,
  className = "",
}: {
  caption?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (query.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return (
    <figure
      className={`card-shadow overflow-hidden rounded-2xl border border-hairline bg-[#1b1b1b] ${className}`}
    >
      <video
        ref={ref}
        className="block aspect-video h-auto w-full"
        width={1280}
        height={720}
        poster="/media/ossentra-cutting-loop-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Animation of the Ossentra instrument bending its shaft and closing the bone punch jaws"
      >
        <source src="/media/ossentra-cutting-loop.mp4" type="video/mp4" />
      </video>
      {caption ? (
        <figcaption className="border-t border-hairline bg-plate px-5 py-4 text-sm leading-[1.6] text-steel">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
