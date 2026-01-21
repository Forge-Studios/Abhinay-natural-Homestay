"use client";

import React from "react";

import { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
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
    <div className="w-full rounded-xl overflow-hidden shadow-lg border-2" style={{ backgroundColor: "#F6EDD9", borderColor: "#7BA204" }}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div key={item.id} className={index !== 0 ? "border-t-2" : ""} style={{ borderColor: "#7BA204" }}>
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between px-5 py-5 text-left font-semibold transition-all duration-200"
              style={{
                backgroundColor: isOpen ? "#7BA204" : "#F6EDD9",
                color: isOpen ? "white" : "#3F4C1B",
              }}
            >
              <span className="text-lg">{item.title}</span>
              <span
                className={`transform transition-transform duration-300 text-xl ${isOpen ? "rotate-180" : ""}`}
                style={{ color: isOpen ? "white" : "#7BA204" }}
              >
                ▼
              </span>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden px-5" style={{ backgroundColor: "rgba(123, 162, 4, 0.1)", color: "#3F4C1B" }}>
                <p className="text-base leading-relaxed py-4">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
