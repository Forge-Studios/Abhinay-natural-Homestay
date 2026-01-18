import Image from "next/image";
import { ArrowRight, Bed, Users, Square, Waves, Mountain, Wind } from "lucide-react";

const rooms = [
  {
    id: 1,
    title: "Forest Edge Cottage",
    description: "A secluded sanctuary featuring panoramic views of the ancient woods and a private sit-out area.",
    price: "18,000",
    size: "450 sq.ft",
    guests: "2 Adults",
    bed: "King Size",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562",
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "Mountain Vista Suite",
    description: "Located at the highest point of the estate, offering breath-taking views of the mist-covered peaks.",
    price: "22,000",
    size: "600 sq.ft",
    guests: "2 Adults, 1 Child",
    bed: "Super King",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562",
    tag: "Luxury"
  },
  {
    id: 3,
    title: "Riverside Bamboo Cabin",
    description: "Built with sustainable local bamboo, this cabin lets you sleep to the rhythmic sound of the nearby stream.",
    price: "15,500",
    size: "400 sq.ft",
    guests: "2 Adults",
    bed: "Queen Size",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    tag: "Eco-Friendly"
  }
];

export default function RoomsPage() {
  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24">
      <div className="max-w-[95vw] 2xl:max-w-[1600px] mx-auto px-6">
        
        {/* 1. HEADER SECTION */}
        <section className="mb-16">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Accommodations</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary mt-6 leading-tight">
            Our Signature <br /> Sanctuaries.
          </h1>
          <p className="mt-8 text-brand-primary/70 leading-loose text-xl font-light max-w-2xl">
            Each room is a masterpiece of eco-luxury, designed to bring the outside in while providing the ultimate comfort.
          </p>
        </section>

        {/* 2. CATEGORY FILTER (Desktop only for minimalist look) */}
        <div className="hidden md:flex gap-10 border-b border-brand-primary/10 pb-6 mb-12">
          {['ALL ROOMS', 'COTTAGES', 'SUITES', 'CABINS'].map((cat, i) => (
            <button key={i} className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${i === 0 ? 'text-brand-primary' : 'text-brand-primary/40 hover:text-brand-primary'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* 3. ROOMS LISTING GRID */}
        <section className="space-y-32">
          {rooms.map((room, index) => (
            <div key={room.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
              
              {/* Image Container with Glassfrost Label */}
              <div className="w-full lg:w-3/5 relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl group">
                <Image 
                  src={room.image} 
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                  <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase">{room.tag}</span>
                </div>
              </div>

              {/* Details Content */}
              <div className="w-full lg:w-2/5 space-y-8">
                <h2 className="text-4xl font-display font-bold text-brand-primary leading-tight">{room.title}</h2>
                <p className="text-brand-primary/60 leading-relaxed font-light text-lg">
                  {room.description}
                </p>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-y-6 pt-4 border-t border-brand-primary/10">
                  <div className="flex items-center gap-3 text-brand-primary/80">
                    <Users size={18} className="text-brand-accent" />
                    <span className="text-sm font-medium">{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-primary/80">
                    <Square size={18} className="text-brand-accent" />
                    <span className="text-sm font-medium">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-primary/80">
                    <Bed size={18} className="text-brand-accent" />
                    <span className="text-sm font-medium">{room.bed}</span>
                  </div>
                  <div className="flex items-center gap-3 text-brand-primary/80">
                    <Wind size={18} className="text-brand-accent" />
                    <span className="text-sm font-medium">Climate Control</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-8 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest">Starting From</p>
                    <p className="text-3xl font-display font-bold text-brand-primary">₹{room.price}<span className="text-sm font-sans font-normal text-brand-primary/40"> / night</span></p>
                  </div>
                  <button className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold tracking-widest hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/20">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}