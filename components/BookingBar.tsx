"use client";

import BaseCard from "@/components/base/BaseCard";
import Calendar from "@/components/Calendar";
import Dropdown from "@/components/Dropdown";
import { Calendar as CalendarIcon, LucideIcon, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- Types ---
type BookingMode = "arrival" | "departure" | "guests" | null;
type Direction = "up" | "down";

interface BookingFieldProps {
  label: string;
  value: string;
  icon: LucideIcon;
  active: boolean;
  onClick: () => void;
  showBorder?: boolean;
}

const BookingField = ({ label, value, icon: Icon, active, onClick, showBorder = true }: BookingFieldProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full flex flex-col gap-1.5 text-left transition-opacity hover:opacity-70 focus:outline-none ${
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
  const [direction, setDirection] = useState<Direction>("down");

  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // Smart Placement Logic
  const handleToggleMode = (mode: BookingMode) => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setDirection(spaceBelow < 450 ? "up" : "down");
    }
    setActiveMode(activeMode === mode ? null : mode);
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "Select Date";
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveMode(null);
      }
    };
    if (activeMode) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMode]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Shared Desktop Calendar Component
  const DesktopCalendar = () => (
    <div
      className={`absolute left-0 z-50 animate-in fade-in zoom-in-95 duration-200 w-[350px] pointer-events-none ${
        direction === "up" ? "bottom-full mb-4 origin-bottom" : "top-full mt-4 origin-top"
      }`}
    >
      <div className="py-4 pointer-events-auto">
        <div className="shadow-2xl rounded-3xl overflow-hidden bg-white">
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
      </div>
    </div>
  );

  return (
    <section className="px-6 md:px-12 -mt-20 relative" ref={barRef}>
      {(!activeMode || !isMobile) && (
        <BaseCard
          intensity="md"
          hover={false}
          borderOpacity={10}
          className="relative max-w-6xl mx-auto p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-8 items-center isolate z-10"
        >
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
            {/* ARRIVAL */}
            <div className="relative">
              <BookingField
                label="Arrival"
                value={formatDate(startDate)}
                icon={CalendarIcon}
                active={activeMode === "arrival"}
                onClick={() => handleToggleMode("arrival")}
              />
              {activeMode === "arrival" && !isMobile && <DesktopCalendar />}
            </div>

            {/* DEPARTURE */}
            <div className="relative">
              <BookingField
                label="Departure"
                value={formatDate(endDate)}
                icon={CalendarIcon}
                active={activeMode === "departure"}
                onClick={() => handleToggleMode("departure")}
              />
              {activeMode === "departure" && !isMobile && <DesktopCalendar />}
            </div>

            {/* GUESTS */}
            <div className="flex flex-col gap-1.5 relative">
              <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
                <Users size={14} /> Guests
              </label>
              <Dropdown options={["2 Adults, 1 Room", "4 Adults, 2 Rooms"]} className="bg-transparent border-none p-0 font-bold text-sm" />
            </div>
          </div>

          <button className="w-full bg-brand-accent text-white py-4 md:py-5 rounded-2xl font-bold tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-brand-accent/20">
            CHECK AVAILABILITY
          </button>
        </BaseCard>
      )}

      {/* MOBILE CALENDAR */}
      {activeMode && isMobile && (
        <>
          {/* Backdrop - Explicitly anchored to 0,0 */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
            onClick={() => setActiveMode(null)}
          />

          {/* Calendar Wrapper - High Z-index and Fixed Top Positioning */}
          <div className="fixed top-20 left-0 right-0 z-[110] flex justify-center p-8 pointer-events-none">
            <div className="w-full max-w-sm animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
              <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
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
            </div>
          </div>
        </>
      )}
    </section>
  );
}
