"use client";
import Accordion from "@/components/Accordion";

import BaseCard from "@/components/base/BaseCard";
import Button from "@/components/base/Button";
import Form from "@/components/base/Form";
import Calendar from "@/components/Calendar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

export default function ComponentsPage() {
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end });
  };

  /**
   * STYLES LOGIC:
   * 1. pt-7: Makes space for the label at the top.
   * 2. text-brand-primary: Ensures typing is visible on beige glass.
   * 3. Label starts at left-5/top-5 and floats to left-5/top-2.
   */
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

        {/* Existing Components - UNTOUCHED */}
        <Button text="Visit Us" type="link" href="test.com" />

        <BaseCard className="p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Base Card Component</h2>
          <p>This is an example of the BaseCard component with default props.</p>
        </BaseCard>

        {/* The Form Component with Left-Floating Labels */}
        <div className="mt-12 max-w-2xl">
          <Form
            title="Contact Form"
            description="Labels float to the top-left on focus or when typing."
            submitLabel="Send Message"
            rounded="3xl"
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log("Form Data:", Object.fromEntries(new FormData(e.currentTarget)));
              alert("Form submitted! Check console.");
            }}
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

          <div className="flex justify-center">
            <Calendar onRangeChange={handleRangeChange} />
          </div>

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
        <WhatsAppButton phoneNumber="916296344129" message="Hi, I have some queries" />
      </div>
    </main>
  );
}
