"use client";

import CTA from "@/components/base/CTA";
import ImageCarousel from "@/components/ImageCarousel";
import StatCard from "@/components/StatCard";
import TextCard from "@/components/TextCard";
import resort from "@/public/images/resort.jpg";
import Image from "next/image";

export default function AboutPage() {
  const resortImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=1200&q=80",
      alt: "Abu Dhabi Escape",
      title: "Abu Dhabi Escape Awaits",
      description: "Celebrate the festive season in grand style on the serene shores of Abu Dhabi.",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80",
      alt: "Beach Paradise",
      title: "Beach Paradise",
      description: "Experience pristine beaches and crystal clear waters.",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      alt: "Coastal Escape",
      title: "Coastal Escape",
      description: "Discover breathtaking coastal landscapes and luxurious comfort.",
    },
  ];

  const stats = [
    {
      number: "70+",
      title: "Cultures Celebrated Daily",
      description: "Our properties embody the traditions of over 70 unique cultural destinations.",
    },
    {
      number: "1000+",
      title: "Curated Experiences Worldwide",
      description: "From local rituals to bespoke adventures - each one designed to immerse and inspire.",
    },
    {
      number: "20+",
      title: "Years of Inspired Journeys",
      description: "Two decades of crafting luxury stays rooted in authenticity and personal discovery.",
    },
    {
      number: "80+",
      title: "Awards for Design & Sustainability",
      description: "Recognised globally for luxury that not only delights - but also makes a difference.",
    },
    {
      title: "Awards for Design & Sustainability",
      description: "Recognised globally for luxury that not only delights - but also makes a difference.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#F6EDD9" }}>
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#3F4C1B" }}>
              Where Luxury Meets Local Hills
            </h1>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <p style={{ color: "#3F4C1B" }} className="text-base leading-relaxed">
              Anantara invites you to discover the world through a lens of elegance, culture, and timeless hospitality.
            </p>
            <div className="flex gap-4">
              <button
                className="px-6 py-2 rounded-full border-2 transition-all duration-300"
                style={{ borderColor: "#3F4C1B", color: "#3F4C1B" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(63, 76, 27, 0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Contact Us
              </button>
              <CTA />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Where Every Resort is a Destination in Itself</h2>
              <p className="text-base max-w-2xl">
                More than just a place to stay — each Anantara property offers a unique immersion into the culture, beauty, and rhythm of its
                surroundings.
              </p>
            </div>
            <div className="mt-8">
              <ImageCarousel images={resortImages} autoPlay={true} autoPlayInterval={8000} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Heritage Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Stats Grid */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: "#3F4C1B" }}>
                Rooted in Heritage, Crafted for the World
              </h2>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  if (stat.number) {
                    return <StatCard key={index} stat={stat.number} title={stat.title} description={stat.description} />;
                  }
                  return <TextCard key={index} title={stat.title} description={stat.description} />;
                })}
              </div>
            </div>

            {/* Right: Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 relative">
              <Image src={resort} alt="Heritage and craftsmanship" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="px-4 md:px-8 lg:px-12 py-12 md:py-20" style={{ backgroundColor: "rgba(123, 162, 4, 0.08)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12" style={{ color: "#3F4C1B" }}>
            The Art of Elegant Discovery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
              <Image src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80" alt="Discovery 1" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
              <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80" alt="Discovery 2" fill className="object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 relative">
              <Image src="https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&q=80" alt="Discovery 3" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "At Anantara, magic is most meaningful when we connect deeply with people, culture, and place. Since opening our first resort in Hua Hin, Thailand in 2001...",
              "It is found in the unexpected. Whether it's a guided walk through Balinese rice fields, a Moroccan spice ritual, or sunrise yoga by the Mekong...",
              "Every moment we create carries the essence of each destination. Our resorts are not just places to stay – they are gateways to understanding the soul of a region.",
            ].map((text, index) => (
              <div key={index} style={{ color: "#3F4C1B" }} className="text-sm leading-relaxed">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
