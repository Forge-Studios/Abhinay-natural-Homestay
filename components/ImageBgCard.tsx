"use client";

import Image from "next/image";
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
    >
      {/* 1. FLICKER FIX - Layers instead of backgroundImage swap */}
      {images.map((img, i) => (
        <div key={img} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-0" : "opacity-0"}`}>
          <Image
            src={img}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            style={{ objectPosition: position }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Overlay - Keeps your original class */}
      {overlay && <div className={`absolute inset-0 z-10 pointer-events-none ${overlayClassName}`} />}

      {/* Content - Keeps your original z-10 logic */}
      <div className="relative z-20 h-full w-full pointer-events-none">
        <div className="pointer-events-auto h-full w-full">{children}</div>
      </div>

      {/* Arrows - Exactly as they were in your code */}
      {showArrows && total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30
                       h-10 w-10 rounded-full bg-white/20 backdrop-blur
                       text-white hover:bg-white/30 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30
                       h-10 w-10 rounded-full bg-white/20 backdrop-blur
                       text-white hover:bg-white/30 transition"
          >
            →
          </button>
        </>
      )}

      {/* Dots - Exactly as they were in your code */}
      {showDots && total > 1 && (
        <div className="absolute top-6 right-6 z-30 flex gap-2">
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
