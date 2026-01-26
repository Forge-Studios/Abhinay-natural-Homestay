"use client";
import Accordion from "@/components/Accordion";
import BaseCard from "@/components/base/BaseCard";
import Button from "@/components/base/Button";
import CTA from "@/components/base/CTA";
import Form from "@/components/base/Form";
import Modal from "@/components/base/Modal";
import Section from "@/components/base/Section";
import Dropdown from "@/components/Dropdown";
import IconTextCard from "@/components/IconTextCard";
import ImageCard from "@/components/ImageCard";
import ImageCarousel from "@/components/ImageCarousel";
import ImageInfoCard from "@/components/ImageInfoCard";
import TextCard from "@/components/TextCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Coffee, Wifi } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ComponentsPage() {
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // ✅ store reference early
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed");
      }

      alert("Message sent successfully 🚀");
      form.reset(); // ✅ safe now
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  /**
   * STYLES LOGIC:
   * 1. pt-7: Makes space for the label at the top.
   * 2. text-brand-primary: Ensures typing is visible on beige glass.
   * 3. Label starts at left-5/top-5 and floats to left-5/top-2.
   */

  const carouselImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=1200&q=80",
      alt: "Luxury hotel room",
      title: "Luxury Suites",
      description: "Experience comfort and elegance in our premium rooms",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80",
      alt: "Hotel pool area",
      title: "Relaxation Zone",
      description: "Unwind by our sparkling swimming pool and gardens",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      alt: "Restaurant dining",
      title: "Fine Dining",
      description: "Savor exquisite cuisine prepared by our expert chefs",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=1200&q=80",
      alt: "Hotel fitness center",
      title: "Wellness Center",
      description: "Stay fit with our state-of-the-art facilities",
    },
  ];

  const amenities = [
    {
      icon: <Wifi size={24} />,
      title: "Icon Text Card Example 1",
      description: "Stay connected with high-speed fiber internet throughout the property.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Icon Text Card Example 2",
      description: "Organic local beans brewed fresh every morning for our guests.",
    },
  ];

  const inputStyles = `
    peer w-full px-5 py-4 pt-7
    bg-white/20 border border-brand-primary/10
    rounded-2xl text-brand-primary outline-none
    placeholder-transparent
    focus:border-brand-primary/30 transition-all duration-300
  `;

  const labelStyles = `
    absolute left-5 top-5 text-brand-primary/40 text-base
    transition-all duration-300 pointer-events-none

    /* Shift logic: Stay on the left, move up to top-2, and shrink */
    peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-brand-primary/70
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-primary/70
  `;

  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24 text-brand-primary">
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6">
        <h1>Components Page</h1>

        <Button text="Visit Us" type="link" href="test.com" />

        {/* THE MODAL USAGE */}
        <Modal
          trigger={<Button className="mt-6" text="Click to Open Modal" type="button" onPress={() => {}} />}
          title="Example Modal"
          size="lg"
          closeOnBackdropClick={false}
          footer={({ close }) => (
            <>
              <button onClick={close} className="text-brand-primary/60 hover:text-brand-primary">
                Cancel
              </button>
              <Button
                text="Confirm Booking"
                type="button"
                onPress={() => {
                  alert("Saved!");
                  close(); // Close modal after action
                }}
              />
            </>
          )}
        >
          {({ close }) => (
            <div className="space-y-4">
              <p>Please fill out your details below.</p>
              {/* Your components here */}
            </div>
          )}
        </Modal>

        <BaseCard className="p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Base Card Component</h2>
          <p>This is an example of the BaseCard component with default props.</p>
        </BaseCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mt-6">
          {amenities.map((item, index) => (
            <IconTextCard key={index} icon={item.icon} title={item.title} description={item.description} intensity="lg" />
          ))}
        </div>

        <TextCard
          className="mt-6 w-[20%]"
          subtitle="Heritage"
          title="Simple Text Card Example"
          description="Our homestay was founded on the principles of sustainability and traditional hospitality, passed down through three generations."
          intensity="lg"
        />

        <TextCard
          className="mt-6 w-[20%]"
          title="Detailed Text Card Example"
          description="Discover the hidden gems of the valley that only locals know about..."
          footer={
            <>
              <span>Jan 24, 2026</span>
              <button className="text-brand-accent font-semibold hover:underline">Read Story</button>
            </>
          }
        />

        {/* The Form Component with Left-Floating Labels */}
        <div className="mt-12 max-w-2xl">
          <Form
            title="Contact Form"
            description="Labels float to the top-left on focus or when typing."
            submitLabel="Send Message"
            rounded="3xl"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="relative">
                  <input name="name" id="name" placeholder=" " className={inputStyles} required />
                  <label htmlFor="name" className={labelStyles}>
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input name="email" id="email" type="email" placeholder=" " className={inputStyles} required />
                  <label htmlFor="email" className={labelStyles}>
                    Email
                  </label>
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input name="subject" id="subject" placeholder=" " className={inputStyles} required />
                <label htmlFor="subject" className={labelStyles}>
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea name="message" id="message" placeholder=" " rows={4} className={`${inputStyles} resize-none h-36`} required />
                <label htmlFor="message" className={labelStyles}>
                  Message
                </label>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6 py-6">
        <Accordion
          items={[
            {
              id: "1",
              title: "What is your refund policy?",
              content:
                "Refunds are processed within 7 days of the request, provided the request meets our terms of service. Funds are typically returned to the original payment method.",
            },
            {
              id: "2",
              title: "Do you offer support?",
              content:
                "Yes, we provide 24/7 customer support via live chat and email. Our dedicated success team usually responds to critical inquiries within two hours.",
            },
            {
              id: "3",
              title: "How do you ensure my data remains secure?",
              content:
                "Security is our top priority. We employ industry-standard AES-256 encryption for all data at rest and TLS 1.3 for data in transit. Additionally, our infrastructure is hosted in SOC 2 Type II compliant data centers with 24/7 monitoring. We perform regular third-party security audits and penetration testing to ensure that your sensitive information remains protected against evolving digital threats.",
            },
            {
              id: "4",
              title: "What happens if I decide to cancel my subscription?",
              content:
                "You can cancel your subscription at any time directly through your dashboard without any hidden fees or complicated exit procedures. Once canceled, your account will remain active with full access to all premium features until the end of your current billing period. After that time, your account will transition to our 'Free Tier,' and your data will be preserved for 90 days should you choose to reactivate in the future.",
            },
          ]}
        />
      </div>
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6 ">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#3F4C1B" }}>
              Date Range Picker
            </h1>
            <p style={{ color: "#7BA204" }} className="text-sm">
              Select your dates with our custom styled calendar
            </p>
          </div>

          {/* <div className="flex justify-center">
            <Calendar onRangeChange={handleRangeChange} />
          </div> */}

          {dateRange.start && (
            <div
              className="mt-8 rounded-lg p-4 text-center"
              style={{ backgroundColor: "rgba(123, 162, 4, 0.1)", borderColor: "#7BA204", borderWidth: 2 }}
            >
              <p className="text-sm font-semibold" style={{ color: "#3F4C1B" }}>
                Selected Range
              </p>
              <p className="mt-2 font-medium" style={{ color: "#7BA204" }}>
                {dateRange.start?.toLocaleDateString()}
                {dateRange.end && ` → ${dateRange.end?.toLocaleDateString()}`}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6 ">
        <WhatsAppButton phoneNumber="916296344129" />
      </div>
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "#3F4C1B" }}>
              Experience Luxury
            </h1>
            <p style={{ color: "#7BA204" }} className="text-lg">
              Explore our world-class facilities and accommodations
            </p>
          </div>
          <ImageCarousel images={carouselImages} autoPlay={true} autoPlayInterval={6000} />
        </div>
      </section>
      <section className="px-6 max-w-350">
        <CTA />
      </section>

      <section className="px-6 max-w-350">
        <Dropdown options={["user1", "user2", "user3"]} onChange={(item) => console.log(item)} />
      </section>

      <Section className="bg-brand-muted" fullWidth={true}>
        <h2 className="text-3xl font-bold mb-4">Section Component Example with Full Width</h2>
        <p className="text-lg text-brand-secondary">
          This is an example of the Section component which provides consistent padding and max-width for content areas.
        </p>
        <ImageCarousel images={carouselImages} autoPlay={false} />
      </Section>
      <Section className="bg-brand-secondary" fullWidth={false}>
        <h2 className="text-3xl font-bold mb-4 text-white">Section Component Example without Full Width</h2>
        <p className="text-lg text-brand-secondary">
          This is an example of the Section component which provides consistent padding and max-width for content areas.
        </p>
        <ImageCarousel images={carouselImages} autoPlay={false} />
      </Section>

      <Section className="bg-brand-muted grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageInfoCard
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
          alt="Image 1"
          content={
            <div>
              <h3 className="text-lg font-semibold">Luxury Accommodation</h3>
              <p className="text-sm">Experience our premium suite with stunning views and top-tier amenities.</p>
            </div>
          }
          hasBtn={false}
          btnText="Test"
          btnType="link"
          href="#"
        />
        <ImageInfoCard
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
          alt="Image 1"
          content={
            <div>
              <h3 className="text-lg font-semibold">Luxury Accommodation</h3>
              <p className="text-sm">Experience our premium suite with stunning views and top-tier amenities.</p>
            </div>
          }
          hasBtn={true}
          btnText="Test"
          btnType="link"
          href="#"
        />
        <ImageInfoCard
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
          alt="Image 1"
          content={<></>}
          hasBtn={true}
          btnText="Test"
          btnType="link"
          href="#"
        />

        <ImageCard src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80" alt="Image 1" />
      </Section>
    </main>
  );
}
