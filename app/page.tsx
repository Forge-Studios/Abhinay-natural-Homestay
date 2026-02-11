"use client";

import IconTextCard from "@/components/IconTextCard";
import BaseCard from "@/components/base/BaseCard";
import { SITE_IMAGES } from "@/lib/images";
import Image from "next/image";
import BookingBar from "../components/BookingBar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Nature Photographer",
    content:
      "The silence here is profound. I've stayed at many forest retreats, but none capture the balance of luxury and raw nature quite like this. The morning mist over the deck is unforgettable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "David Chen",
    role: "Weekend Traveler",
    content: "The farm-to-table breakfast alone is worth the trip. You can tell every ingredient was picked just meters from your table.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Elena Rodriguez",
    role: "Yoga Instructor",
    content:
      "A truly spiritual experience. The private decks are perfectly positioned for sunrise meditation. My soul felt recharged after just two days.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export default function HomePage() {
  return (
    <main className="bg-app-bg min-h-screen font-body selection:bg-brand-accent/30">
      {/* HERO SECTION */}
      <section className="pt-28 sm:pt-32 min-h-[90svh] flex items-end">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="relative min-h-[80svh] flex flex-col justify-between sm:block">
            <div className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl bg-brand-primary">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://v40aqx8muaadwx3x.public.blob.vercel-storage.com/IMG-20230925-WA0019.jpg.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://v40aqx8muaadwx3x.public.blob.vercel-storage.com/4185240-hd_1280_720_25fps.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-brand-primary/80 sm:from-brand-primary/60 sm:via-transparent sm:to-transparent" />
            </div>

            <div className="relative z-10 px-6 sm:px-12 pt-5 sm:pt-20 max-w-4xl text-white">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05]">Natural Retreat on the Forest Edge</h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-2xl text-white/90 font-light max-w-[300px] sm:max-w-none">
                Experience luxury where the forest meets the sky. Your escape into the wilderness begins here.
              </p>
            </div>

            <div className="absolute left-0 right-0 bottom-12 sm:bottom-6 px-4 sm:px-12 z-20">
              <BookingBar />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="text-center mb-16">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-sm">Why Choose Us</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-primary">Unmatched Forest Luxury</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <IconTextCard
              icon="🌿"
              title="Organic Haven"
              description="100% organic estate with farm-to-table cuisine from our forest garden."
              intensity="2xl"
              className="hover:-translate-y-2 transition-transform"
            />
            <IconTextCard
              icon="🛖"
              title="Private Cottages"
              description="Handcrafted cottages with private decks and forest views."
              intensity="2xl"
              className="hover:-translate-y-2 transition-transform"
            />
            <IconTextCard
              icon="🌅"
              title="Nature Escapes"
              description="Guided treks, stargazing, birdwatching, and yoga."
              intensity="2xl"
              className="hover:-translate-y-2 transition-transform"
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - LEAF PATTERN ADDED HERE */}
      {/* EXPERIENCE SECTION - WITH FERN PATTERN */}
      <section className="relative py-24 md:py-32 bg-brand-secondary/10 overflow-hidden">
        {/* SUBTLE FERN PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10C60 10 58 35 35 45M60 10C60 10 62 35 85 45M60 30C60 30 55 50 30 65M60 30C60 30 65 50 90 65M60 55C60 55 58 75 40 90M60 55C60 55 62 75 80 90M60 10V110' stroke='%232D5A27' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
            transform: "rotate(-15deg) scale(1.2)", // Makes the pattern look more natural
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image src={SITE_IMAGES.outside2} alt="Forest Sanctuary" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-sm">Since 2020</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-primary leading-tight">A Sanctuary for the Soul</h2>
              <p className="text-brand-secondary text-lg md:text-xl font-light leading-loose max-w-xl">
                Every stone and tree tells a story of harmony. Unplug from the digital world and reconnect with nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-brand-accent text-white rounded-2xl font-bold tracking-widest shadow-lg hover:brightness-110">
                  Explore Cottages
                </button>
                <button className="px-8 py-4 border-2 border-brand-primary text-brand-primary rounded-2xl font-bold tracking-widest hover:bg-brand-primary hover:text-white">
                  View Experiences
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 md:py-32 bg-brand-primary/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-sm">Guest Stories</span>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-primary">Loved by those who seek the wild.</h2>
            </div>
            <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-sm w-fit">
              <span className="text-3xl font-bold text-brand-primary">4.7</span>
              <div className="flex flex-col leading-tight">
                <div className="flex text-[#FBBC05] text-xs">★★★★★</div>
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">275 Google Reviews</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <BaseCard
                key={idx}
                as="article"
                intensity="2xl"
                className="p-8 md:p-10 flex flex-col justify-between group bg-white/40 backdrop-blur-sm"
              >
                <div>
                  <div className="text-brand-accent text-5xl font-serif leading-none mb-6 group-hover:scale-110 transition-transform duration-500">
                    “
                  </div>
                  <p className="text-brand-secondary text-lg md:text-xl leading-relaxed font-light mb-10 italic">{testimonial.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-accent/30">
                    <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary text-base leading-none">{testimonial.name}</h4>
                    <p className="text-brand-secondary/60 text-sm mt-1.5 font-medium uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
              </BaseCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
