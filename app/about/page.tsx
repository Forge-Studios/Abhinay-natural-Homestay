import Image from "next/image";
import { ArrowRight, Leaf, Heart, Wind, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24">
      <div className="max-w-[95vw] 2xl:max-w-[1600px] mx-auto">
        
        {/* 1. THE VISION HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6">
          <div className="order-2 lg:order-1">
            <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary mt-6 leading-tight">
              A Sanctuary Born from a Simple Dream.
            </h1>
            <p className="mt-8 text-brand-primary/80 leading-loose text-xl font-light max-w-xl">
              Abhinay Natural Homestay wasn't built; it was grown. We envisioned a place where the modern world's noise fades into the rhythmic silence of the forest, allowing you to rediscover your natural pace.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" 
              alt="Mist rising in the forest" 
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </section>

        {/* 2. THE PHILOSOPHY (Bento Grid Style) */}
        <section className="mt-32 px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-primary">Built on Four Pillars</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Leaf className="text-brand-accent" />, 
                title: "Eco-Conscious", 
                desc: "We prioritize local materials and sustainable practices in every detail." 
              },
              { 
                icon: <Heart className="text-brand-muted" />, 
                title: "Local Love", 
                desc: "100% of our staff are from neighboring villages, keeping the heritage alive." 
              },
              { 
                icon: <Wind className="text-brand-accent" />, 
                title: "Organic Living", 
                desc: "Our kitchens serve farm-to-table meals grown right in our backyard." 
              },
              { 
                icon: <ShieldCheck className="text-brand-muted" />, 
                title: "Soul Safety", 
                desc: "A secure, private sanctuary where you can truly let your guard down." 
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-primary tracking-wide">{pillar.title}</h3>
                <p className="mt-4 text-brand-primary/60 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. THE FOUNDER'S NOTE */}
        <section className="mt-32 mx-6 bg-brand-primary rounded-[3.5rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-display italic leading-snug">
              "We believe that the greatest luxury is not found in things, but in the time we spend in harmony with the world around us."
            </h2>
            <div className="mt-12 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-brand-accent p-1 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                  alt="Abhinay Singh" 
                  width={64} 
                  height={64} 
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold tracking-widest uppercase text-xs">Abhinay Singh</p>
                <p className="text-white/50 text-xs">Founder, Abhinay Natural</p>
              </div>
            </div>
          </div>
          {/* Subtle background decoration */}
          <Leaf className="absolute -bottom-20 -right-20 text-white/5 rotate-45" size={400} />
        </section>

      </div>
    </main>
  );
}