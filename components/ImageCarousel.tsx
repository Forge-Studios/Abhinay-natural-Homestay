"use client";

import { useEffect, useState } from "react";

interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  showOverlay?: boolean;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showNavigation = true,
  showOverlay = true,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, images.length]);

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToPrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center rounded-xl" style={{ backgroundColor: "#F6EDD9" }}>
        <p style={{ color: "#3F4C1B" }}>No images to display</p>
      </div>
    );
  }

  return (
    <div className="w-full group">
      {/* Main carousel container */}
      <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
        {/* Image wrapper */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] w-full">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Overlay gradient */}
          {showOverlay && <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />}

          {/* Text content overlay */}
          {(images[currentIndex].title || images[currentIndex].description) && (
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 lg:p-10">
              <div className="text-center max-w-2xl">
                {images[currentIndex].title && (
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 text-balance">{images[currentIndex].title}</h2>
                )}
                {images[currentIndex].description && (
                  <p className="text-sm md:text-base lg:text-lg text-white/90">{images[currentIndex].description}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons */}
        {showNavigation && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: "#7BA204",
                color: "white",
              }}
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: "#7BA204",
                color: "white",
              }}
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                index === currentIndex ? "w-8 md:w-10" : "w-2 hover:opacity-70"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#7BA204" : "#9999CC",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div className="text-center mt-4">
          <span className="text-sm font-semibold px-4 py-2 rounded-full inline-block" style={{ backgroundColor: "#F6EDD9", color: "#3F4C1B" }}>
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}
