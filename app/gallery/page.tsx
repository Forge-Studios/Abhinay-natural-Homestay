"use client";
import BaseCard from "@/components/base/BaseCard";
import { SITE_IMAGES } from "@/lib/images";
import Image from "next/image";

const resortImages = [
  { id: 1, src: SITE_IMAGES.image1, alt: "Abhinay Main Entrance", height: "h-64" },
  { id: 2, src: SITE_IMAGES.outside, alt: "Lush Forest Surroundings", height: "h-96" },
  { id: 3, src: SITE_IMAGES.roomDeluxe, alt: "Deluxe Suite Interior", height: "h-80" },
  { id: 4, src: SITE_IMAGES.outside2, alt: "Mountain Heritage View", height: "h-72" },
  { id: 5, src: SITE_IMAGES.image2, alt: "Natural Textures", height: "h-[28rem]" },
  { id: 6, src: SITE_IMAGES.roomSingle, alt: "Cozy Single Room", height: "h-60" },
  { id: 7, src: SITE_IMAGES.outside3, alt: "Morning Mist Walkway", height: "h-96" },
  { id: 8, src: SITE_IMAGES.image1, alt: "Morning Yoga Session", height: "h-80" },
];

// Randomly generated placements for a dense forest look
const denseFerns = [
  { top: "2%", left: "-5%", rot: "15deg", s: "1.4", op: "0.04" },
  { top: "12%", left: "80%", rot: "-20deg", s: "1.2", op: "0.03" },
  { top: "25%", left: "35%", rot: "110deg", s: "0.8", op: "0.02" },
  { top: "30%", left: "-10%", rot: "160deg", s: "1.5", op: "0.04" },
  { top: "45%", left: "85%", rot: "45deg", s: "1.1", op: "0.03" },
  { top: "50%", left: "15%", rot: "-35deg", s: "0.9", op: "0.02" },
  { top: "65%", left: "70%", rot: "190deg", s: "1.3", op: "0.04" },
  { top: "70%", left: "-5%", rot: "10deg", s: "1.6", op: "0.03" },
  { top: "85%", left: "40%", rot: "280deg", s: "1.0", op: "0.02" },
  { top: "90%", left: "80%", rot: "-15deg", s: "1.2", op: "0.04" },
  { top: "15%", left: "10%", rot: "45deg", s: "0.7", op: "0.02" },
  { top: "40%", left: "45%", rot: "210deg", s: "0.8", op: "0.03" },
  { top: "55%", left: "95%", rot: "75deg", s: "1.1", op: "0.02" },
  { top: "80%", left: "15%", rot: "130deg", s: "1.4", op: "0.04" },
  { top: "5%", left: "45%", rot: "-100deg", s: "0.9", op: "0.02" },
];

export default function GalleryPage() {
  return (
    <main className="relative bg-app-bg min-h-screen pt-36 pb-24 text-brand-primary overflow-hidden">
      {/* DENSE SCATTERED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {denseFerns.map((f, i) => (
          <div
            key={i}
            className="absolute transition-transform duration-1000"
            style={{
              top: f.top,
              left: f.left,
              width: `${350 * parseFloat(f.s)}px`,
              height: `${350 * parseFloat(f.s)}px`,
              transform: `rotate(${f.rot})`,
              opacity: f.op,
            }}
          >
            <DetailedFernSilhouette />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-[95vw] 2xl:max-w-400 mx-auto px-6">
        <header className="mb-24 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-brand-accent font-bold mb-4 block">Archive</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">A Glimpse into Paradise</h1>
          <div className="h-px w-24 bg-brand-accent/30 mx-auto mb-8"></div>
          <p className="text-brand-primary/60 font-body text-lg leading-relaxed italic">"Nature never hurries, yet everything is accomplished."</p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {resortImages.map((image) => (
            <div key={image.id} className="break-inside-avoid">
              <BaseCard
                intensity="none"
                rounded="3xl"
                hover={true}
                className="overflow-hidden group cursor-pointer bg-white/40 backdrop-blur-[2px] shadow-sm hover:shadow-2xl transition-all duration-700 border border-brand-primary/5"
              >
                <div className={`relative w-full ${image.height} overflow-hidden`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </BaseCard>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function DetailedFernSilhouette() {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#3F4C1B]">
      {/* This path creates a more realistic, detailed botanical frond */}
      <path d="M20 180c40-10 100-50 150-160-5 25-15 50-40 70 30-20 45-45 50-70-15 10-45 25-75 35 25-10 50-25 75-35-25 20-55 45-85 60 35-20 65-45 85-60-35 30-70 65-100 95 35-30 70-65 100-95-45 45-90 90-135 130 45-40 90-85 135-130-70 65-115 115-145 140z" />
    </svg>
  );
}
