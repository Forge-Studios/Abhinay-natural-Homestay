"use client";

import Accordion from "@/components/Accordion";
import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import ImageCarousel from "@/components/ImageCarousel";
import StatCard from "@/components/StatCard";
import { SITE_IMAGES } from "@/lib/images";
import Image from "next/image";

export default function AboutPage() {
  const resortImages = [
    {
      id: "1",
      src: SITE_IMAGES.outside,
      alt: "Abhinay Natural Homestay Exterior",
      title: "The Road Ends Here",
      description: "And the peace begins. Wood, earth, and the luxury of silence.",
    },
    {
      id: "2",
      src: SITE_IMAGES.outside3,
      alt: "Hill View from Gorubathan",
      title: "Mornings in Phaparkheti",
      description: "Where the only alarm clock is the sun rising over the valley.",
    },
  ];

  const rhythms = [
    {
      number: "Nourish",
      title: "The Taste of Home",
      description:
        "Food that remembers its roots. Seasonal greens from our garden, spices ground by hand, and recipes passed down through generations.",
    },
    {
      number: "Breathe",
      title: "Forest Therapy",
      description: "The air here is different. It’s cool, pine-scented, and clears your mind the moment you step out of the car.",
    },
    {
      number: "Connect",
      title: "Stories by Firelight",
      description: "Evenings are for the bonfire. No phones, just the crackle of wood, a sky full of stars, and conversations that matter.",
    },
    {
      number: "Pause",
      title: "The Gift of Time",
      description:
        "Here, there is no rush. Read a book, watch the mist roll in, or simply sit still. Rediscover the person you are when the noise stops.",
    },
  ];

  const attractions = [
    {
      title: "The Song of Chel River",
      location: "Fagu Valley",
      description:
        "A short journey down to the riverbed. It’s not just a view—take off your shoes, dip your feet in the crystal-cold mountain water, and let the current wash away your city stress.",
    },
    {
      title: "History in the Clouds",
      location: "Dalim Fort Ruins",
      description:
        "Stand atop the ruins of the historic Dalim Fort in Gorubathan. With the plains on one side and the Himalayas on the other, you’ll feel like you’re standing on the edge of the world.",
    },
    {
      title: "The Secret Waterfalls",
      location: "Hidden Trails",
      description:
        "Forget the tourist spots. Ask us to guide you to the hidden cascades tucked away in the Phaparkheti forests. Pure, untouched, and strictly for those who seek silence.",
    },
  ];

  return (
    <main className="bg-app-bg min-h-screen overflow-x-hidden">
      {/* HERO + INTRO */}
      <Section fullWidth={true} className="py-16 pb-0">
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-28">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#3F4C1B]">
                Come as a Guest, <br className="hidden sm:block" />
                Leave as Family.
              </h1>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-[#3F4C1B]/90">
                Life in the city is loud. <strong>Abhinay Natural Homestay</strong> is the antidote. Tucked away in the misty embrace of{" "}
                <strong>Phaparkheti, Gorubathan</strong>, we offer you something rare: a chance to stop, breathe, and feel at home in the Himalayas.
              </p>
              <Button type="link" text="Find Your Peace" href="/contact" size="lg" rounded="3xl" intensity="lg" hasArrow />
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-7xl mx-auto space-y-12">
            <header className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3F4C1B]">More Than Just a Stay.</h2>
              <p className="text-base leading-relaxed opacity-80 text-[#3F4C1B]">
                We didn't build a hotel; we opened our home. <strong>Tucked away in the quiet folds of Phaparkheti</strong>, Abhinay is built with
                local stones, bamboo, and a lot of heart. We believe that true luxury isn't found in a marble lobby, but in a cup of tea made with
                fresh milk, served with a smile that says, "We are glad you are here."
              </p>
            </header>
            <ImageCarousel images={resortImages} autoPlay autoPlayInterval={8000} />
          </div>
        </section>
      </Section>

      {/* NATURE + VALUES SECTION */}
      <section className="relative w-full py-20 md:py-24 overflow-hidden bg-[#3F4C1B]/5">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 xl:px-20 grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20">
          {/* IMAGE COLUMN: On Tablet/Mobile, this sits on top to set the mood */}
          <div className="xl:col-span-5 xl:sticky xl:top-32 space-y-10 order-1 xl:order-2">
            <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
              <Image
                src={SITE_IMAGES.outside2}
                alt="The misty hills of Gorubathan from Abhinay Homestay"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3F4C1B]/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* THE HOST NOTE: Adjusted font size for better tablet scaling */}
            <div className="max-w-xl xl:max-w-md relative pl-6 md:pl-8 border-l-2 border-[#3F4C1B]/20">
              <h3 className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-4 md:mb-6 text-[#3F4C1B]/60">A Note from the Hearth</h3>
              <p className="text-lg md:text-xl xl:text-2xl leading-relaxed text-[#3F4C1B] italic font-medium">
                "The mountains have a way of healing you, if you let them. At Abhinay, we just provide the space—the warm food, the clean bed, and the
                open sky. The rest is between you and nature."
              </p>
              <div className="mt-4 md:mt-6 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-[#3F4C1B]/40"></div>
                <p className="font-bold text-[#3F4C1B]">Your Hosts at Abhinay</p>
              </div>
            </div>
          </div>

          {/* RHYTHMS COLUMN: Now has full width on iPad Pro Portrait */}
          <div className="xl:col-span-7 order-2 xl:order-1">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-10 md:mb-12 text-[#3F4C1B] tracking-tight">
              Simple Living,
              <br className="hidden sm:block" /> High Thinking
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
              {rhythms.map((item, i) => (
                <StatCard key={i} stat={item.number} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL ATTRACTIONS SECTION */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F4C1B] mb-12">Wander Beyond Our Doorstep</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attractions.map((attr, idx) => (
              <div key={idx} className="space-y-4 p-6 rounded-3xl hover:bg-[#3F4C1B]/5 transition-colors duration-300">
                <span className="text-sm font-bold tracking-wider uppercase text-[#3F4C1B]/60">{attr.location}</span>
                <h3 className="text-2xl font-bold text-[#3F4C1B]">{attr.title}</h3>
                <p className="opacity-80 text-[#3F4C1B] leading-relaxed">{attr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <Section fullWidth={true} className="py-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3F4C1B]">Before You Arrive</h2>
            <p className="mt-6 opacity-70 text-[#3F4C1B]">We want your journey to be as peaceful as your stay.</p>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              items={[
                {
                  id: "location",
                  title: "Where exactly is 'Peace' located?",
                  content:
                    "We are in the village of Phaparkheti, Gorubathan. It is an easy drive from the plains, but far enough to leave the noise behind.",
                },
                {
                  id: "food",
                  title: "What is on the menu?",
                  content:
                    "Comfort. We serve traditional Bengali and Pahari meals using organic vegetables from our own backyard. If you have a favorite childhood dish, let us know—we love to cook with heart.",
                },
                {
                  id: "vibe",
                  title: "Is this place right for me?",
                  content:
                    "If you are looking for loud parties and room service, perhaps not. But if you are looking for fireflies, homemade butter, and the sound of silence, then yes—you are coming home.",
                },
              ]}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
