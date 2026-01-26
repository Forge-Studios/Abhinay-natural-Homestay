"use client";

import Accordion from "@/components/Accordion";
import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
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
    <Section className="py-12">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        {/* Increased max-width and adjusted gap */}
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-24">
          {/* Headline: Takes up 60% of the width */}
          <div className="md:w-3/5">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]" style={{ color: "#3F4C1B" }}>
              Where Luxury <br className="hidden lg:block" /> Meets Local Hills
            </h1>
          </div>

          {/* Description: Takes up the remaining space with a top margin to align with the headline's first line */}
          <div className="md:w-2/5 flex flex-col gap-8 md:pt-4">
            <p style={{ color: "#3F4C1B" }} className="text-lg md:text-xl opacity-90 leading-relaxed">
              Anantara invites you to discover the world through a lens of elegance, culture, and timeless hospitality.
            </p>
            <div>
              <Button
                type="button"
                text="Contact Us"
                size="lg"
                rounded="3xl"
                intensity="lg"
                borderOpacity={20}
                hasArrow={true}
                onPress={() => alert("Contact clicked")}
              />
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
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Stats Grid */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-xl leading-tight" style={{ color: "#3F4C1B" }}>
                Rooted in Heritage, <br /> Crafted for the World
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {stats.map((stat, index) => {
                  const isEven = index % 2 !== 0;
                  const CardComponent = stat.number ? StatCard : TextCard;
                  return (
                    <div key={index} className={isEven ? "md:mt-16" : ""}>
                      <CardComponent stat={stat.number} title={stat.title} description={stat.description} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Image & Storytelling Text */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative group mb-10">
                <Image
                  src={resort}
                  alt="Heritage and craftsmanship"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* New Paragraph Section to fill the void */}
              <div className="max-w-md px-2">
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#3F4C1B" }}>
                  A Journey Through Time
                </h3>
                <p className="text-base leading-relaxed opacity-80 mb-6" style={{ color: "#3F4C1B" }}>
                  Anantara began with a simple belief: that life is a most meaningful journey when we connect deeply with people, culture, and place.
                  Since opening our first resort in 2001, we have grown into a global icon of luxury.
                </p>
                <p className="text-base leading-relaxed opacity-80 italic" style={{ color: "#3F4C1B" }}>
                  "Luxury isn't just about the stay—it's about the stories you bring home."
                </p>

                <div className="mt-8 pt-8 border-t border-[#3F4C1B]/10">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-50">Est. 1994 — Global Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: "#3F4C1B" }}>
                Frequently <br /> Asked Questions
              </h2>
              <p className="mt-6 text-base opacity-70 max-w-sm" style={{ color: "#3F4C1B" }}>
                Explore our philosophy and find answers to common inquiries about the Anantara experience.
              </p>
            </div>

            {/* Right Column: The Accordion */}
            <div className="lg:col-span-8 w-full">
              <Accordion
                items={[
                  {
                    id: "about",
                    title: "About Anantara",
                    content:
                      "At Anantara, magic is most meaningful when we connect deeply with people, culture, and place. Since opening our first resort in Hua Hin, Thailand in 2001, we have grown to become a global brand known for our authentic experiences and warm hospitality.",
                  },
                  {
                    id: "experiences",
                    title: "Unique Experiences",
                    content:
                      "Our experiences are found in the unexpected. Whether it's a guided walk through Balinese rice fields, a Moroccan spice ritual, or sunrise yoga by the Mekong, each activity is designed to immerse you in the local culture and create lasting memories.",
                  },
                  {
                    id: "philosophy",
                    title: "Our Philosophy",
                    content:
                      "Every moment we create carries the essence of each destination. Our resorts are not just places to stay – they are gateways to understanding the soul of a region. We believe in responsible tourism that benefits both our guests and the local communities.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
