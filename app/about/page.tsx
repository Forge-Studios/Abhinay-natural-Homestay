"use client";

import Accordion from "@/components/Accordion";
import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import ImageCarousel from "@/components/ImageCarousel";
import StatCard from "@/components/StatCard";
import { SITE_IMAGES } from "@/lib/images"; // Importing your new library
import Image from "next/image";

export default function AboutPage() {
  // Updated Carousel to use your Blob images
  const resortImages = [
    {
      id: "1",
      src: SITE_IMAGES.outside,
      alt: "Abhinay Natural Homestay Exterior",
      title: "A Destination in Itself",
      description: "Every corner tells a story of the hills, culture, and peace.",
    },
    {
      id: "2",
      src: SITE_IMAGES.outside3,
      alt: "Hill View",
      title: "Immersive Escapes",
      description: "Designed for discovery, relaxation, and deep connection with nature.",
    },
  ];

  const stats = [
    { number: "100%", title: "Organic Cuisine", description: "Farm-to-table meals grown in our own gardens." },
    { number: "360°", title: "Forest Views", description: "Every room opens up to the untouched wilderness." },
    { number: "2020", title: "Year Established", description: "Luxury rooted in mountain heritage." },
    { number: "5.0", title: "Guest Rating", description: "Excellence in hospitality and natural living." },
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
              We invite you to explore the world through elegance, culture, and deeply rooted hospitality at Abhinay.
            </p>

            <Button type="link" text="Contact Us" href="/contact" size="lg" rounded="3xl" intensity="lg" hasArrow />
          </div>
        </div>
      </section>

      {/* STORY + CAROUSEL */}
      <section className="px-6 md:px-12 py-20 ">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3F4C1B]">A Living Story</h2>
            <p className="text-base leading-relaxed opacity-80 text-[#3F4C1B]">
              Abhinay is more than a stay — it is a gateway into the soul of the forest.
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

          {/* Sticky Story - Using SITE_IMAGES.outside2 */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
              <Image src={SITE_IMAGES.outside2} alt="Abhinay Heritage View" fill className="object-cover" />
            </div>

            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-4 text-[#3F4C1B]">A Journey Through Time</h3>
              <p className="leading-relaxed opacity-80 text-[#3F4C1B]">
                Founded on the belief that meaningful journeys transform us, Abhinay began with a vision to preserve the mountain spirit.
              </p>

              <p className="mt-4 italic opacity-70 text-[#3F4C1B]">“Luxury is not the destination — it’s the peace you take home.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 lg:px-20 py-24 ">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F4C1B]">Frequently Asked Questions</h2>
            <p className="mt-6 opacity-70 text-[#3F4C1B]">Everything you need to know about our philosophy.</p>
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
                  content: "From guided forest treks to organic cooking classes, our experiences are truly local.",
                },
                {
                  id: "philosophy",
                  title: "Our Philosophy",
                  content: "Sustainability and hospitality are the twin pillars of the Abhinay experience.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </Section>
  );
}
