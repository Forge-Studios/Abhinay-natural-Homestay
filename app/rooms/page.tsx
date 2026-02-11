"use client";

import Button from "@/components/base/Button";
import Section from "@/components/base/Section";
import ImageBgCard from "@/components/ImageBgCard";
import TwoColSection from "@/components/TwoColSection";
import { SITE_IMAGES } from "@/lib/images";
import { Bed, Square, Star, Users, Wind } from "lucide-react";
import { Attractions } from "./attractions";
import FooterCtaSection from "./footerCTA";

const rooms = [
  {
    id: 1,
    title: "Deluxe (Double Bedroom)",
    description: "Our standard rooms for two. Choose between the Deluxe room with a Queen bed or our standalone King Bed Cottage for more privacy.",
    price: "2,000 - 2,500",
    size: "Cosy & Private",
    guests: "2 Adults",
    bed: "Queen or King Bed",
    images: [SITE_IMAGES.roomSingle, SITE_IMAGES.outside2],
    tag: "6 Rooms Total", // This covers your 6 double bed rooms
    packageInfo: "Stay + Meals: ₹1600 per person",
  },
  {
    id: 2,
    title: "Deluxe Family (4-Bedded Room)",
    description: "A spacious setup for small families or friends traveling together. Includes two comfortable Queen size beds.",
    price: "3,000",
    size: "Large",
    guests: "4 People",
    bed: "2 Queen sized beds",
    images: [SITE_IMAGES.outside, SITE_IMAGES.outside2],
    tag: "4 Rooms Available",
  },
  {
    id: 3,
    title: "Super Family (5-Bedded Room)",
    description: "Great for larger groups. These rooms are equipped with 1 King and 1 Queen sized beds to fit everyone comfortably.",
    price: "3,500",
    size: "Extra Large",
    guests: "5 People",
    bed: "1 King size and 1 Queen size Bed",
    images: [SITE_IMAGES.roomDeluxe, SITE_IMAGES.outside3],
    tag: "4 Rooms Available",
  },
  {
    id: 4,
    title: "Dormitory Hall",
    description: "A large shared hall featuring five double beds. The best choice for trekking groups and big squads on a budget.",
    price: "5,000",
    size: "Shared Space",
    guests: "10 people",
    bed: "5 Double Beds",
    images: [SITE_IMAGES.image1],
    tag: "1 Dorm Available",
  },
];

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number

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
              <span className="max-w-max">
                <Button
                  text="Explore Rooms"
                  hasArrow={true}
                  type="link"
                  href="#rooms-listing"
                  className="mt-12 bg-white/20 text-white font-bold tracking-widest"
                  borderOpacity={0}
                />
              </span>
            </div>
          </ImageBgCard>
        </Section>

        {/* 2. CATEGORY FILTER (Desktop only for minimalist look) */}
        <Section id="rooms-listing" className="pb-0!">
          <div className="hidden md:flex gap-10 border-b border-brand-primary/10 pb-6">
            {["ALL ROOMS", "DOUBLE", "FAMILY", "SUPER FAMILY", "DORMITORY"].map((cat, i) => (
              <a
                key={i}
                className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${
                  i === 0 ? "text-brand-primary" : "text-brand-primary/40 hover:text-brand-primary"
                }`}
                href={i === 0 ? "#rooms-listing" : `#room-${i}`}
              >
                {cat}
              </a>
            ))}
          </div>
        </Section>

        {/* 3. ROOMS LISTING GRID */}

        <Section className="space-y-32">
          {rooms.map((room, index) => (
            <TwoColSection
              key={room.id}
              reverse={index % 2 !== 0}
              gap="gap-6 lg:gap-12"
              className="items-center"
              bgColor="bg-brand-primary/20"
              id={`room-${room.id}`}
              left={
                /* Image using ImageBgCard */
                <ImageBgCard
                  images={room.images} // ready for carousel later
                  className={`
                    w-full h-120 lg:h-150
                    shadow-2xl overflow-hidden
                    ${`rounded-tl-[3rem] rounded-tr-[3rem] rounded-b-none ${
                      index % 2 !== 0
                        ? "lg:rounded-tr-[3rem] lg:rounded-br-[3rem] lg:rounded-tl-none lg:rounded-bl-none"
                        : "lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] lg:rounded-tr-none lg:rounded-br-none"
                    }`}
                    group
                  `}
                  overlay={false}
                >
                  {/* Hover zoom effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />

                  {/* Glassfrost Label */}
                  <div className="absolute top-8 left-8 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/30">
                    <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase">{room.tag}</span>
                  </div>
                </ImageBgCard>
              }
              right={
                /* Details Content */
                <div className="space-y-8 px-4 lg:px-16 py-8 lg:py-0">
                  <h2 className="text-4xl font-display font-bold text-brand-primary leading-tight">{room.title}</h2>

                  <p className="text-brand-primary/60 leading-relaxed font-light text-lg">{room.description}</p>

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

                  <div className="grid grid-cols-2 gap-y-6">
                    <div className="flex items-center gap-3 text-brand-primary/80">
                      <Star fill="green" size={18} className="inline-block text-brand-accent" />
                      <p>48 Reviews</p>
                    </div>
                    <div className="flex items-center">
                      <img src="https://i.pravatar.cc/100?img=32" className="w-12 h-12 rounded-full object-cover border-2 border-white ml-0" />
                      <img src="https://i.pravatar.cc/100?img=44" className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-5" />
                      <img src="https://i.pravatar.cc/100?img=47" className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-5" />
                      <img src="https://i.pravatar.cc/100?img=12" className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-5" />
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 items-center">
                    <div>
                      <p className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest">Starting From</p>
                      <p className="text-3xl font-display font-bold text-brand-primary">
                        ₹{room.price}
                        <span className="text-sm font-sans font-normal text-brand-primary/40"> / night</span>
                      </p>
                    </div>

                    <div className="max-w-100  mt-2">
                      <Button
                        type="button"
                        onPress={() => handleRoomDetails(room.title)}
                        text="View Details"
                        href="#"
                        size="md"
                        hasArrow={false}
                        intensity="none"
                        borderOpacity={100}
                        className="text-brand-primary font-bold underline-offset-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              }
            />
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
