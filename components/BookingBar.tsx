"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { Calendar as CalendarIcon, Users, LucideIcon } from "lucide-react";
import BaseCard from "@/components/base/BaseCard";
import Calendar from "@/components/Calendar";
import Dropdown from "@/components/Dropdown";

// --- Types ---
type BookingMode = "arrival" | "departure" | "guests" | null;

interface BookingFieldProps {
  label: string;
  value: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
  showBorder?: boolean;
}

// --- Sub-component for individual fields ---
const BookingField = ({ label, value, icon: Icon, active, onClick, showBorder = true }: BookingFieldProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex flex-col gap-1.5 text-left transition-opacity hover:opacity-70 focus:outline-none ${
      showBorder ? "md:border-r border-brand-primary/10 pr-4" : ""
    }`}
  >
    <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2 cursor-pointer">
      <Icon size={14} className={active ? "text-brand-accent" : ""} />
      {label}
    </label>
    <p className="text-sm font-bold text-brand-primary truncate">{value}</p>
  </button>
);

export default function BookingBar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [activeMode, setActiveMode] = useState<BookingMode>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Format dates for display
  const formatDate = (date: Date | null) => {
    if (!date) return "Select Date";
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveMode(null);
      }
    };

    if (activeMode) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMode]);

  // Mobile check (use state instead of window check for React)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="px-6 md:px-12 -mt-20 relative">
      {/* BookingBar - Hide on mobile when calendar active */}
      {(!activeMode || !isMobile) && (
        <BaseCard
          intensity="md"
          hover={false}
          borderOpacity={10}
          className="relative max-w-6xl mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-center isolate z-10"
        >
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
            {/* Arrival */}
            <BookingField
              label="Arrival"
              value={formatDate(startDate)}
              icon={CalendarIcon}
              active={activeMode === "arrival"}
              onClick={() => setActiveMode("arrival")}
            />

            {/* Departure */}
            <BookingField
              label="Departure"
              value={formatDate(endDate)}
              icon={CalendarIcon}
              active={activeMode === "departure"}
              onClick={() => setActiveMode("departure")}
            />

            {/* Guests */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
                <Users size={14} /> Guests
              </label>
              <Dropdown options={["2 Adults, 1 Room", "4 Adults, 2 Rooms"]} className="bg-transparent border-none p-0 font-bold text-sm" />
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-brand-accent text-white py-4 md:py-5 rounded-2xl font-bold tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-brand-accent/20">
            CHECK AVAILABILITY
          </button>
        </BaseCard>
      )}

      {/* Mobile Calendar - Fixed height + backdrop + outside click */}
      {activeMode && isMobile && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 sm:hidden" onClick={() => setActiveMode(null)} />

          {/* Calendar Card */}
          <div className="fixed top-32 left-6 right-6 z-50 sm:hidden p-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-in slide-in-from-top-4 duration-300 max-h-[70vh] overflow-auto">
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onRangeChange={(start, end) => {
                setStartDate(start);
                setEndDate(end);
                setActiveMode(null);
              }}
            />
          </div>
        </>
      )}

      {/* Desktop Popup */}
      {activeMode && !isMobile && (
        <div className="absolute left-0 top-full mt-4 z-50 animate-in fade-in zoom-in-95 duration-200 max-w-96 mx-auto">
          <Calendar
            startDate={startDate}
            endDate={endDate}
            onRangeChange={(start, end) => {
              setStartDate(start);
              setEndDate(end);
              if (start && end) setActiveMode(null);
            }}
          />
        </div>
      )}
    </section>
  );
}
