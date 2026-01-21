"use client";
import Accordion from "@/components/Accordion";
import BaseCard from "@/components/base/BaseCard";
import Button from "@/components/base/Button";
import Calendar from "@/components/Calendar";
import { useState } from "react";

export default function ComponentsPage() {
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end });
  };

  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24">
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6">
        <h1>Components Page</h1>
        <Button text="Visit Us" type="link" href="test.com" />
        <BaseCard className="p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4">Base Card Component</h2>
          <p>This is an example of the BaseCard component with default props.</p>
        </BaseCard>
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
    </main>
  );
}
