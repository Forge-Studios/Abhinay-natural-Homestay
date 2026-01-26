"use client";

import React, { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      }

      return prev.includes(id) ? [] : [id];
    });
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ backgroundColor: "#F6EDD9", borderColor: "#7BA204", border: "2px solid" }}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: isOpen ? "#7BA204" : "#F6EDD9",
                color: isOpen ? "white" : "#3F4C1B",
              }}
            >
              <div className="flex items-center gap-4 flex-1">
                {item.icon && <span className="text-2xl flex-shrink-0">{item.icon}</span>}
                <span className="text-lg">{item.title}</span>
              </div>
              <svg
                className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                style={{ color: isOpen ? "white" : "#7BA204" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden" style={{ backgroundColor: "rgba(123, 162, 4, 0.08)" }}>
                <div className="px-6 py-5" style={{ color: "#3F4C1B" }}>
                  <div className="text-base leading-relaxed">{item.content}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
