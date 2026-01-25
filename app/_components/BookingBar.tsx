"use client";

import BaseCard from "@/components/base/BaseCard";
import Calendar from "@/components/Calendar";
import { Calendar as CalendarIcon, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BookingBar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [open, setOpen] = useState<boolean | "arrival" | "departure">(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <section className="px-6 md:px-12 -mt-20 relative z-20">
      <BaseCard
        intensity="md"
        hover={false}
        borderOpacity={10}
        className="relative max-w-300 mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-center"
      >
        {/* Arrival */}
        <div onClick={() => setOpen("arrival")} className="flex flex-col gap-2 md:border-r border-brand-primary/10 pr-4 cursor-pointer">
          <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
            <CalendarIcon size={14} /> Arrival
          </label>
          <p className="text-sm font-bold text-brand-primary">{startDate ? startDate.toDateString() : "dd-mm-yyyy"}</p>
        </div>

        {/* Departure */}
        <div onClick={() => setOpen("departure")} className="flex flex-col gap-2 md:border-r border-brand-primary/10 pr-4 cursor-pointer">
          <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
            <CalendarIcon size={14} /> Departure
          </label>
          <p className="text-sm font-bold text-brand-primary">{endDate ? endDate.toDateString() : "dd-mm-yyyy"}</p>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
            <Users size={14} /> Guests
          </label>
          <select className="bg-transparent text-sm font-bold outline-none text-brand-primary cursor-pointer">
            <option>2 Adults, 1 Room</option>
            <option>4 Adults, 2 Rooms</option>
          </select>
        </div>

        <button className="w-full bg-brand-accent text-white py-5 rounded-[1.5rem] font-bold tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-brand-accent/20">
          CHECK AVAILABILITY
        </button>

        {/* Calendar Popup */}
        {open && (
          <div ref={calendarRef} className="absolute left-0 top-full mt-6 z-50">
            <Calendar
              startDate={startDate}
              endDate={endDate}
              onRangeChange={(start, end) => {
                setStartDate(start);
                setEndDate(end);

                // auto-close when range complete
                if (start && end) setOpen(false);
              }}
            />
          </div>
        )}
      </BaseCard>
    </section>
  );
}
