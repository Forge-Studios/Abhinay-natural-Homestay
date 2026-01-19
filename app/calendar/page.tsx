"use client";

import Calendar from "@/components/Calendar";
import { useState } from "react";

export default function Page() {
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleRangeChange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end });
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-4" style={{ backgroundColor: "#F6EDD9" }}>
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
    </main>
  );
}
