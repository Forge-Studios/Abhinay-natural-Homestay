"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ResortHero() {
  return (
    <div className="relative w-full max-w-[95vw] 2xl:max-w-400 mx-auto rounded-3xl overflow-hidden shadow-2xl  bg-app-bg">
      <div className="relative w-full h-150 md:h-[70vh] 2xl:h-[80vh]">
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach Resort View" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-brand-primary/80 via-brand-primary/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">Your Escape Awaits</h2>

            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto">Book Your Experience Right Now</p>

            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you wish to relax by the pool, embark on a Hills adventure, or explore the rich cultural heritage of North Bengal, our resort
              offers a range of activities to suit your every mood.
            </p>

            <button
              className="px-10 py-4 rounded-full font-bold tracking-wider text-sm uppercase flex items-center gap-2 mx-auto group transition-all duration-300
              bg-white/10 backdrop-blur-md border-2 border-white/20 text-white
              hover:bg-white/20 hover:border-white/30 hover:shadow-lg hover:shadow-white/10
              focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-brand-primary/30"
            >
              Book Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
