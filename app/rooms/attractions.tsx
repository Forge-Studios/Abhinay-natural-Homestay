"use client";

import Section from "@/components/base/Section";
import ImageBgCard from "@/components/ImageBgCard";
import ImageCard from "@/components/ImageCard";
import TwoColSection from "@/components/TwoColSection";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const attractions = [
  {
    title: "Dine by Design",
    description: "From a candlelit dinner on a cliffside pavilion to a starlit beach picnic surrounded by torches, our “Dine by Design” experience.",
    imgSrc: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    title: "Local Living Encounters",
    description:
      "Step into the daily life of a local village, learn the art of traditional weaving, or harvest spices alongside a farmer in the morning sun.",
    imgSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Sunrise Awakening Rituals",
    description: "Begin your morning with guided yoga on a cliff overlooking the sea, followed by a nourishing herbal elixir.",
    imgSrc: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
  },
];

interface Props {}

export const Attractions = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Section className="block md:hidden">
        <ImageBgCard images={[attractions[activeIndex].imgSrc]} className="rounded-[3rem] shadow-2xl overflow-hidden p-4">
          <TwoColSection
            gap="gap-10 lg:gap-20"
            className="items-start"
            bgColor="bg-transparent"
            left={
              <div className="space-y-8 px-4 lg:px-0">
                <span className="text-app-bg lg:text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Nearby Attractions</span>
                <h2 className="text-5xl font-display font-bold text-app-bg lg:text-brand-primary leading-tight">Explore the Wonders Around Us</h2>
                <p className="text-app-bg lg:text-brand-secondary/80 leading-relaxed font-light text-lg">
                  Nestled amidst nature&apos;s finest, our homestay offers easy access to a variety of attractions that promise unforgettable
                  experiences.
                </p>

                <div className="w-full border-t border-b border-app-bg/40 lg:border-brand-muted/20">
                  {attractions.map((item, index) => (
                    <div
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(0)}
                      key={index}
                      className="
                        group
                        flex items-center justify-between gap-8
                        px-6 md:px-10 py-8
                        border-b border-app-bg/40 lg:border-brand-muted/20 last:border-b-0
                        transition-colors
                        hover:bg-brand-accent/10
                      "
                    >
                      {/* Text */}
                      <div className="max-w-2xl">
                        <h3 className="text-xl font-medium text-app-bg lg:text-brand-primary">{item.title}</h3>
                        <p className="mt-2 text-app-bg lg:text-black/50 leading-relaxed">{item.description}</p>
                      </div>

                      {/* Arrow CTA */}
                      <button
                        className="
                        flex items-center justify-center
                        p-2 rounded-full border
                        border-gray-300 text-app-bg
                        transition-all duration-300
                        group-hover:bg-brand-primary
                        group-hover:border-brand-primary
                        group-hover:text-brand-muted
                      "
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            }
            right={
              <ImageCard
                src={attractions[activeIndex].imgSrc}
                alt="Nearby Attractions"
                className="h-80 lg:h-200 w-full rounded-3xl shadow-2xl hidden"
              />
            }
          />
        </ImageBgCard>
      </Section>
      <Section className="hidden md:block">
        <TwoColSection
          gap="gap-10 lg:gap-20"
          className="items-start"
          bgColor="bg-transparent"
          left={
            <div className="space-y-8 px-4 lg:px-0">
              <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Nearby Attractions</span>
              <h2 className="text-5xl font-display font-bold text-brand-primary leading-tight">Explore the Wonders Around Us</h2>
              <p className="text-brand-secondary/80 leading-relaxed font-light text-lg">
                Nestled amidst nature&apos;s finest, our homestay offers easy access to a variety of attractions that promise unforgettable
                experiences.
              </p>

              <div className="w-full border-t border-b border-brand-muted/20">
                {attractions.map((item, index) => (
                  <div
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(0)}
                    key={index}
                    className="
                        group
                        flex items-center justify-between gap-8
                        px-6 md:px-10 py-8
                        border-b border-brand-muted/20 last:border-b-0
                        transition-colors
                        hover:bg-brand-accent/10
                      "
                  >
                    {/* Text */}
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-medium text-brand-primary">{item.title}</h3>
                      <p className="mt-2 text-black/50 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Arrow CTA */}
                    <button
                      className="
                        flex items-center justify-center
                        p-2 rounded-full border
                        border-gray-300 text-gray-700
                        transition-all duration-300
                        group-hover:bg-brand-primary
                        group-hover:border-brand-primary
                        group-hover:text-white
                      "
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          }
          right={<ImageCard src={attractions[activeIndex].imgSrc} alt="Nearby Attractions" className="h-80 lg:h-200 w-full rounded-3xl shadow-2xl" />}
        />
      </Section>
    </>
  );
};
