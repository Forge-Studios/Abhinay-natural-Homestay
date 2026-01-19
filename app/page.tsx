import BaseCard from "@/components/base/BaseCard";
import { ArrowRight, Calendar, Users } from "lucide-react";
import Image from "next/image";

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
            <BaseCard
              intensity="2xl"
              rounded="3xl"
              className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-20 md:right-auto md:w-125 p-8 flex items-center gap-8"
            >
              <div className="relative w-28 h-28 rounded-3xl overflow-hidden shrink-0 shadow-lg border border-white/10">
                <Image src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e" alt="Mini Preview" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-brand-primary text-xl font-bold tracking-wide">Escape Awaits</h3>
                <p className="text-brand-primary/60 text-sm mt-2 font-medium">Find peace in grand style amid nature&apos;s embrace.</p>
                <button className="mt-5 flex items-center gap-3 text-brand-primary font-bold group/btn">
                  <span className="text-xs tracking-[0.2em] uppercase">EXPLORE</span>
                  <div className="w-10 h-10 rounded-full border-2 border-brand-accent/20 flex items-center justify-center group-hover/btn:bg-brand-accent group-hover/btn:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </button>
              </div>
            </BaseCard>
          </div>
        </div>
      </section>

      {/* 2. BOOKING BAR: Functional Glass */}
      <section className="px-6 md:px-12 -mt-20 relative z-20">
        <BaseCard
          intensity="md"
          hover={false}
          borderOpacity={10}
          className="max-w-300 mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
        >
          <div className="flex flex-col gap-2 md:border-r border-brand-primary/10 pr-4">
            <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
              <Calendar size={14} /> Arrival
            </label>
            <input type="date" className="bg-transparent text-sm font-bold outline-none text-brand-primary cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2 md:border-r border-brand-primary/10 pr-4">
            <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
              <Calendar size={14} /> Departure
            </label>
            <input type="date" className="bg-transparent text-sm font-bold outline-none text-brand-primary cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
              <Users size={14} /> Guests
            </label>
            <select className="bg-transparent text-sm font-bold outline-none text-brand-primary cursor-pointer">
              <option>2 Adults, 1 Room</option>
              <option>4 Adults, 2 Rooms</option>
            </select>
          </div>
          {/* Accent Button using Lime Green */}
          <button className="w-full bg-brand-accent text-white py-5 rounded-[1.5rem] font-bold tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-brand-accent/20">
            CHECK AVAILABILITY
          </button>
        </BaseCard>
      </section>

      {/* 3. THE EXPERIENCE (About Section) */}
      <section className="py-32 px-6 max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image src="https://images.unsplash.com/photo-1510798831971-661eb04b3739" alt="Our Forest Story" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-brand-primary rounded-full p-10 flex items-center justify-center text-center shadow-2xl rotate-12">
            <p className="text-white text-sm font-bold tracking-widest leading-relaxed uppercase">Awarded Best Eco-Stay 2026</p>
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
      {/* 4. RESORT HERO SECTION */}
      {/* <section className="w-full px-6 py-20">
        <ResortHero />
      </section> */}
    </main>
  );
}
