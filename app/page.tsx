import CTA from "@/components/base/CTA";
import Image from "next/image";
import BookingBar from "./_components/BookingBar";

export default function HomePage() {
  return (
    <main className="bg-app-bg min-h-screen font-body selection:bg-brand-accent/30">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-12 w-full">
        <div className="w-full max-w-[95vw] 2xl:max-w-[1600px] mx-auto">
          <div className="relative w-full h-[600px] md:h-[85vh] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl">
            {/* Using Next.js Image for automatic resizing and lazy loading */}
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Natural Homestay Forest Edge"
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent" />

            <div className="absolute top-12 left-6 md:top-24 md:left-20 right-6 text-white">
              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.05] max-w-4xl drop-shadow-md">
                Natural Retreat on the Forest Edge
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
                Experience luxury where the forest meets the sky. Your escape into the wilderness begins here.
              </p>
            </div>

            {/* HERO OVERLAY: High Intensity Glass */}
            <CTA className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-20 md:right-auto md:w-125" />
          </div>
        </div>
      </section>

      {/* 2. BOOKING BAR: Functional Glass */}
      <BookingBar />

      {/* 3. THE EXPERIENCE (About Section) */}
      <section className="py-32 px-6 max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image src="https://images.unsplash.com/photo-1510798831971-661eb04b3739" alt="Our Forest Story" fill className="object-cover" />
          </div>
        </div>
        <div>
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Since 2020</span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-primary mt-6 leading-tight">A Sanctuary for the Soul</h2>
          <p className="mt-8 text-brand-secondary leading-loose text-xl font-light">
            Every stone and tree at Abhinay Natural Homestay tells a story of harmony. We provide a space where you can unplug from the digital world
            and tune into the rhythmic silence of nature.
          </p>
          <div className="mt-12 flex gap-12">
            <div>
              <p className="text-4xl font-display font-bold text-brand-primary">12+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary mt-2">Private Cottages</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-brand-primary">100%</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary mt-2">Organic Estate</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
