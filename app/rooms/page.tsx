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
    title: "Forest Edge Cottage",
    description: "A secluded sanctuary featuring panoramic views of the ancient woods and a private sit-out area.",
    price: "18,000",
    size: "450 sq.ft",
    guests: "2 Adults",
    bed: "King Size",
    images: [SITE_IMAGES.outside2, SITE_IMAGES.outside],
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "Mountain Vista Suite",
    description: "Located at the highest point of the estate, offering breath-taking views of the mist-covered peaks.",
    price: "22,000",
    size: "600 sq.ft",
    guests: "2 Adults, 1 Child",
    bed: "Super King",
    images: [SITE_IMAGES.outside3, SITE_IMAGES.roomDeluxe],
    tag: "Luxury",
  },
  {
    id: 3,
    title: "Riverside Bamboo Cabin",
    description: "Built with sustainable local bamboo, this cabin lets you sleep to the rhythmic sound of the nearby stream.",
    price: "15,500",
    size: "400 sq.ft",
    guests: "2 Adults",
    bed: "Queen Size",
    images: [SITE_IMAGES.roomSingle, SITE_IMAGES.outside],
    tag: "Eco-Friendly",
  },
];

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number

export default function RoomsPage() {
  const handleRoomDetails = (roomType: String) => {
    const message =
      `*New Booking Enquiry* \n\n` +
      `Can I get more details about the *${roomType}* and know about availibility?\n\n` +
      `Looking forward to experiencing the tranquility of Abhinay Natural Homestay!`;

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
            {["ALL ROOMS", "COTTAGES", "SUITES", "CABINS"].map((cat, i) => (
              <a
                key={i}
                className={`text-[10px] font-bold tracking-[0.2em] transition-colors ${
                  i === 0 ? "text-brand-primary" : "text-brand-primary/40 hover:text-brand-primary"
                }`}
                href={`#room-${i}`}
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
