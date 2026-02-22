"use client";

import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import ImageBgCard from "@/components/ImageBgCard";
import TwoColSection from "@/components/TwoColSection";
import { SITE_IMAGES } from "@/lib/images";
import { Bed, Square, Star, Users, Utensils } from "lucide-react";
import { Attractions } from "./attractions";
import FooterCtaSection from "./footerCTA";

const rooms = [
  {
    id: 1,
    title: "Standard Room (Double Bedroom)",
    description: "Comfortable and cozy room with a queen size bed, perfect for couples or solo travelers.",
    price: "2,000",
    size: "Standard",
    guests: "2 Adults",
    bed: "Queen Size Bed",
    images: [SITE_IMAGES.Standard1, SITE_IMAGES.Standard2],
    tag: "Standard Comfort",
  },
  {
    id: 2,
    title: "Deluxe(Double Bedroom)",
    description: "Our standard rooms for two. Choose between the Deluxe room with a Queen bed or our standalone King Bed Cottage for more privacy.",
    price: "2500",
    size: "Cosy & Private",
    guests: "2 Adults",
    bed: "King Size bed ",
    images: [SITE_IMAGES.image1, SITE_IMAGES.roomSingle, SITE_IMAGES.outside2],
    tag: "6 Rooms Total",
    packageInfo: "Stay + Meals: ₹1600 per person",
  },
  {
    id: 3,
    title: "Deluxe Family (4-Bedded Room)",
    description: "A spacious setup for small families or friends traveling together. Includes two comfortable Queen size beds.",
    price: "3,000",
    size: "Large",
    guests: "4 People",
    bed: "2 Queen sized beds",
    images: [SITE_IMAGES.outside2, SITE_IMAGES.InteriorBedded4],
    tag: "4 Rooms Available",
  },
  {
    id: 4,
    title: "Super Family (5-Bedded Room)",
    description: "Great for larger groups. These rooms are equipped with 1 King and 1 Queen sized beds to fit everyone comfortably.",
    price: "3,500",
    size: "Extra Large",
    guests: "5 People",
    bed: "1 King size and 1 Queen size Bed",
    images: [SITE_IMAGES.outside3, SITE_IMAGES.roomDeluxe],
    tag: "4 Rooms Available",
  },
  {
    id: 5,
    title: "Dormitory Hall",
    description: "A large shared hall featuring five double beds. The best choice for trekking groups and big squads on a budget.",
    price: "4,000",
    size: "Shared Space",
    guests: "10 people",
    bed: "5 Double Beds",
    images: [SITE_IMAGES.Dormitory1, SITE_IMAGES.Dormitory2],
    tag: "1 Dorm Available",
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_MOBILE_NUM;

export default function RoomsPage() {
  const handleRoomDetails = (roomType: string) => {
    const message =
      `*New Booking Enquiry* \n\n` +
      `I am interested in the *${roomType}*.\n` +
      `Can you let me know about availability and the meal packages?\n\n` +
      `Looking forward to staying at Abhinay Natural Homestay!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24">
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto">
        {/* 1. HEADER SECTION */}
        <Section fullWidth={true} className="pt-0!">
          <ImageBgCard images={[SITE_IMAGES.image1]} className="p-8 rounded-[2.5rem]">
            <span className="text-white/70 font-bold tracking-[0.4em] uppercase text-xs">Accommodations</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white/70 mt-6 leading-tight">
              Our Signature <br /> Sanctuaries.
            </h1>
            <p className="mt-8 text-white/70 leading-loose text-xl font-light max-w-2xl">
              Each room is a masterpiece of eco-luxury, designed to bring the outside in while providing the ultimate comfort.
            </p>
            <div className="max-w-max">
              <Button
                text="Explore Rooms"
                hasArrow={true}
                type="link"
                href="#rooms-listing"
                className="mt-12 bg-white/20 text-white font-bold tracking-widest"
                borderOpacity={0}
              />
            </div>
          </ImageBgCard>
        </Section>

        {/* 2. CATEGORY FILTER */}
        <Section id="rooms-listing" className="pb-0!">
          <div className="hidden md:flex gap-10 border-b border-brand-primary/10 pb-6">
            {["ALL ROOMS", "DOUBLE", "FAMILY", "SUPER FAMILY", "DORMITORY"].map((cat, i) => (
              <a
                key={i}
                className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${
                  i === 0 ? "text-brand-primary" : "text-brand-primary/40 hover:text-brand-primary"
                }`}
                href={i === 0 ? "#rooms-listing" : `#room-${rooms[i - 1]?.id || i}`}
              >
                {cat}
              </a>
            ))}
          </div>
        </Section>

        {/* 3. ROOMS LISTING GRID WITH SVG PATTERN */}
        <Section className="space-y-24 md:space-y-32">
          {rooms.map((room, index) => (
            <div key={room.id} className="relative rounded-[3rem] overflow-hidden group/card shadow-sm">
              {/* BRAND BACKGROUND COLOR */}
              <div className="absolute inset-0 bg-brand-primary/20 z-0" />

              {/* FERN PATTERN LAYER */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none z-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10C60 10 58 35 35 45M60 10C60 10 62 35 85 45M60 30C60 30 55 50 30 65M60 30C60 30 65 50 90 65M60 55C60 55 58 75 40 90M60 55C60 55 62 75 80 90M60 10V110' stroke='%233F4C1B' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                  backgroundSize: "220px 220px",
                  transform: index % 2 === 0 ? "rotate(-10deg) scale(1.1)" : "rotate(170deg) scale(1.1)",
                }}
              />

              <TwoColSection
                reverse={index % 2 !== 0}
                gap="gap-0"
                className="items-center relative z-20"
                bgColor="transparent"
                id={`room-${room.id}`}
                left={
                  /* FIX: Wrapper with forced height prevents layout jumps */
                  <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden">
                    <ImageBgCard
                      key={`room-gallery-${room.id}`} // Prevents state reuse between different cards
                      images={room.images}
                      className={`
        w-full h-full object-cover
        ${
          index % 2 !== 0
            ? "lg:rounded-tr-[3rem] lg:rounded-br-[3rem] lg:rounded-tl-none lg:rounded-bl-none"
            : "lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-tr-none lg:rounded-br-none"
        }
        group
      `}
                      overlay={false}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700 z-10" />
                      <div className="absolute top-8 left-8 z-20 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                        <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase">{room.tag}</span>
                      </div>
                    </ImageBgCard>
                  </div>
                }
                right={
                  <div className="space-y-8 px-6 lg:px-16 py-12 lg:py-0">
                    <h2 className="text-4xl font-display font-bold text-brand-primary leading-tight">{room.title}</h2>
                    <p className="text-brand-primary/70 leading-relaxed font-light text-lg">{room.description}</p>

                    {/* Specs Table */}
                    <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-brand-primary/10">
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
                        <Utensils size={18} className="text-brand-accent" />
                        <span className="text-sm font-medium">Package incl. food- 1600/person</span>
                      </div>
                    </div>

                    {/* Review Avatars */}
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-brand-primary/80">
                        <Star fill="#3F4C1B" size={16} className="text-brand-accent" />
                        <span className="text-sm font-bold">
                          4.9/5 <span className="font-normal opacity-60">(Reviews)</span>
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i + 10 + index}`}
                            className="w-10 h-10 rounded-full border-2 border-brand-bg -ml-3 first:ml-0 object-cover"
                            alt="Guest"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4">
                      <div>
                        <p className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest">Starting From</p>
                        <p className="text-3xl font-display font-bold text-brand-primary">
                          ₹{room.price}
                          <span className="text-sm font-sans font-normal text-brand-primary/40"> / night</span>
                        </p>
                      </div>

                      <Button
                        type="button"
                        onPress={() => handleRoomDetails(room.title)}
                        text="Check Availability"
                        size="md"
                        intensity="lg"
                        className="bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg"
                      />
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </Section>

        {/* 4. Nearby Attractions */}
        <Attractions />

        {/* Footer CTA */}
        <FooterCtaSection />
      </div>
    </main>
  );
}
