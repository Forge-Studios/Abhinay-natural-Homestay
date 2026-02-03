"use client";

import Accordion from "@/components/Accordion";
import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import ImageCarousel from "@/components/ImageCarousel";
import StatCard from "@/components/StatCard";
import resort from "@/public/images/resort.jpg";
import Image from "next/image";

export default function AboutPage() {
  const resortImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      alt: "Luxury Resort",
      title: "A Destination in Itself",
      description: "Every resort tells a story of place, culture, and time.",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80",
      alt: "Beach Paradise",
      title: "Immersive Escapes",
      description: "Designed for discovery, relaxation, and connection.",
    },
  ];

  const stats = [
    { number: "70+", title: "Cultures Celebrated", description: "Authentic traditions woven into every stay." },
    { number: "1000+", title: "Curated Experiences", description: "Designed to immerse and inspire." },
    { number: "20+", title: "Years of Craftsmanship", description: "Luxury rooted in heritage." },
    { number: "80+", title: "Global Awards", description: "Design, sustainability, and excellence." },
  ];

  return (
    <Section fullWidth={true} className="py-16">
      {/* HERO */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-28">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#3F4C1B]">
              Where Luxury <br className="hidden sm:block" /> Meets Local Hills
            </h1>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg md:text-xl leading-relaxed text-[#3F4C1B]/90">
              We invite you to explore the world through elegance, culture, and deeply rooted hospitality.
            </p>

            <Button
              type="button"
              text="Contact Us"
              size="lg"
              rounded="3xl"
              intensity="lg"
              hasArrow
              onPress={() => {
                // navigate, open modal, scroll, etc.
                alert("Contact clicked");
              }}
            />
          </div>
        </div>
      </section>

      {/* STORY + CAROUSEL */}
      <section className="px-6 md:px-12 py-20 ">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3F4C1B]">Every Resort is a Living Story</h2>
            <p className="text-base leading-relaxed opacity-80 text-[#3F4C1B]">
              More than destinations — our resorts are gateways into the soul of a place.
            </p>
          </header>

          <ImageCarousel images={resortImages} autoPlay autoPlayInterval={8000} />
        </div>
      </section>

      {/* STATS + HERITAGE */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Stats */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#3F4C1B]">
              Rooted in Heritage,
              <br /> Crafted for the World
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat.number} title={stat.title} description={stat.description} />
              ))}
            </div>
          </div>

          {/* Sticky Story */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <Image src={resort} alt="Heritage Resort" fill className="object-cover" />
            </div>

            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-[#3F4C1B]">A Journey Through Time</h3>
              <p className="leading-relaxed opacity-80 text-[#3F4C1B]">
                Founded on the belief that meaningful journeys transform us, our story began with a single resort and a timeless philosophy.
              </p>

              <p className="mt-4 italic opacity-70 text-[#3F4C1B]">“Luxury is not the destination — it’s the memory you take home.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F4C1B]">Frequently Asked Questions</h2>
            <p className="mt-6 opacity-70 text-[#3F4C1B]">Everything you need to know about our philosophy and experiences.</p>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              items={[
                {
                  id: "about",
                  title: "About Our Brand",
                  content: "We believe luxury is most meaningful when deeply connected to people, culture, and place.",
                },
                {
                  id: "experiences",
                  title: "Unique Experiences",
                  content: "Each experience is designed to immerse you in local traditions and natural beauty.",
                },
                {
                  id: "philosophy",
                  title: "Our Philosophy",
                  content: "Our resorts are gateways to understanding the soul of a destination.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </Section>
  );
}
