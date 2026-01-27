"use client";

import { ReactNode, useState } from "react";

interface ImageBgCardProps {
  /** Single image OR carousel */
  images: string[]; // array of image URLs

  children: ReactNode;
  className?: string;

  /** Background control */
  position?: string;
  size?: string;
  repeat?: string;

  /** Overlay */
  overlay?: boolean;
  overlayClassName?: string;

  /** Carousel */
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageBgCard({
  images,
  children,
  className = "",

  position = "center",
  size = "cover",
  repeat = "no-repeat",

  overlay = true,
  overlayClassName = "bg-black/30",

  showArrows = true,
  showDots = true,
  autoPlay = false,
  interval = 5000,
}: ImageBgCardProps) {
  const [index, setIndex] = useState(0);

  const total = images.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        ${className}
      `}
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundPosition: position,
        backgroundSize: size,
        backgroundRepeat: repeat,
        transition: "background-image 0.6s ease-in-out",
      }}
    >
      {/* Overlay */}
      {overlay && <div className={`absolute inset-0 ${overlayClassName}`} />}

      {/* Content */}
      <div className="relative z-10 h-full w-full">{children}</div>

      {/* Arrows */}
      {showArrows && total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                       h-10 w-10 rounded-full bg-white/20 backdrop-blur
                       text-white hover:bg-white/30 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                       h-10 w-10 rounded-full bg-white/20 backdrop-blur
                       text-white hover:bg-white/30 transition"
          >
            →
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div className="absolute top-6 right-6 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-6 rounded-full transition
                ${i === index ? "bg-white" : "bg-white/40"}
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}
