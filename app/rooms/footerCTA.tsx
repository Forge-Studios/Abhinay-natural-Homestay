"use client";

import Button from "@/components/base/Button";
import ImageBgCard from "@/components/ImageBgCard";
import { SITE_IMAGES } from "@/lib/images";

export default function FooterCtaSection() {
  return (
    <section className="px-4 lg:px-0">
      <ImageBgCard
        images={[SITE_IMAGES.FooterCTA]}
        className="
          h-[420px] md:h-[520px] lg:h-[620px]
          rounded-3xl
          flex items-center justify-center
        "
        overlay
        overlayClassName="bg-black/40"
        showArrows={false}
        showDots={false}
      >
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full w-full max-w-3xl mx-auto text-center px-6">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight">
            Your <span className="text-app-bg">Abhinay Experience</span> Awaits
            <br />
            Book Your Experience Right Now
          </h1>

          <p className="mt-6 text-white/80 text-sm md:text-base leading-relaxed">
            Whether you wish to relax by the pool, embark on a forest adventure, or explore the rich cultural heritage of Lolegaon, our resort offers
            a range of activities to suit your every mood.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <Button
              type="link"
              href="/contact"
              text="Book Now"
              size="lg"
              intensity="sm"
              borderOpacity={0}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4"
            />
          </div>
        </div>
      </ImageBgCard>
    </section>
  );
}
