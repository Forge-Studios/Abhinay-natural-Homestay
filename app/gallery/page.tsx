"use client";
import React from "react";
import Image from "next/image";
import BaseCard from "@/components/base/BaseCard";

// Mock data for your resort images
const resortImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", alt: "Resort Exterior", height: "h-64" },
  { id: 2, src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d", alt: "Infinity Pool", height: "h-96" },
  { id: 3, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945", alt: "Dining Area", height: "h-80" },
  { id: 4, src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", alt: "Luxury Suite", height: "h-72" },
  { id: 5, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", alt: "Spa Room", height: "h-[28rem]" },
  { id: 6, src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2", alt: "Beach View", height: "h-60" },
  { id: 7, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd", alt: "Garden Walkway", height: "h-96" },
  { id: 8, src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd", alt: "Night View", height: "h-80" },
];

export default function GalleryPage() {
  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24 text-brand-primary">
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16 text-center max-w-2xl mx-auto animate-page-reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-accent font-semibold mb-3 block">Visual Journey</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">A Glimpse into Paradise</h1>
          <p className="text-brand-primary/70 font-body leading-relaxed">
            Immerse yourself in the natural beauty and architectural elegance of our homestay. Every corner tells a story of serenity.
          </p>
        </div>

        {/* Pinterest Style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {resortImages.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <BaseCard intensity="sm" rounded="3xl" hover={true} className="overflow-hidden group cursor-pointer animate-page-reveal">
                <div className={`relative w-full ${image.height} overflow-hidden`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Subtle Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="backdrop-blur-md bg-white/20 border border-white/20 p-4 rounded-2xl w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-display font-medium text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
