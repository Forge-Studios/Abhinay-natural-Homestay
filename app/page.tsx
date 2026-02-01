import Image from "next/image";
import BookingBar from "../components/BookingBar";
import IconTextCard from "@/components/IconTextCard";

export default function HomePage() {
  return (
    <main className="bg-app-bg min-h-screen font-body selection:bg-brand-accent/30">
      {/* HERO */}
      <section className="pt-28 sm:pt-32 min-h-[90svh] flex items-end">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="relative min-h-[80svh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Natural Homestay Forest Edge"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1600px"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 via-brand-primary/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-12 pt-12 sm:pt-20 max-w-4xl text-white">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05]">Natural Retreat on the Forest Edge</h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-2xl text-white/90 font-light">
                Experience luxury where the forest meets the sky. Your escape into the wilderness begins here.
              </p>
            </div>

            {/* Booking Bar */}
            <div className="absolute left-0 right-0 bottom-18 sm:bottom-6 px-4 sm:px-12">
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

      {/* EXPERIENCE */}
      <section className="py-24 md:py-32 bg-brand-secondary/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739"
                alt="Forest Sanctuary"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
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
    </main>
  );
}
