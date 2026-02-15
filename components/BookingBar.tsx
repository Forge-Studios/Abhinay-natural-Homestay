"use client";

import BaseCard from "@/components/base/BaseCard";
import Toast from "@/components/base/Toast";
import Calendar from "@/components/Calendar";
import Dropdown from "@/components/Dropdown";
import { Calendar as CalendarIcon, LucideIcon, MessageCircle, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// --- Types ---
type BookingMode = "arrival" | "departure" | "guests" | null;
type Direction = "up" | "down";
type ToastType = "success" | "warning"; // New type for Toast

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
  const [guests, setGuests] = useState("2 Adults, 1 Room");
  const [activeMode, setActiveMode] = useState<BookingMode>(null);
  const [direction, setDirection] = useState<Direction>("down");

  // UPDATED: Toast States now includes 'type'
  const [toast, setToast] = useState<{ show: boolean; message: string; type: ToastType }>({
    show: false,
    message: "",
    type: "success",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_MOBILE_NUM;

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

  const handleWhatsAppRedirect = () => {
    // UPDATED: Replaced alert with Warning Toast
    if (!startDate || !endDate) {
      setToast({
        show: true,
        message: "Please select both arrival and departure dates first.",
        type: "warning",
      });
      return;
    }

    const message =
      `*New Booking Request* \n\n` +
      `*Arrival:* ${formatDate(startDate)}\n` +
      `*Departure:* ${formatDate(endDate)}\n` +
      `*Guests:* ${guests}\n\n` +
      `Is there any rooms available for these dates?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
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
              // LOGIC: Prevent departure before arrival
              if (start && end && end <= start) {
                setToast({
                  show: true,
                  message: "Departure date must be after the arrival date.",
                  type: "warning",
                });
                return;
              }
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
    <>
      <section className="px-6 md:px-12 -mt-20 relative" ref={barRef}>
        {(!activeMode || !isMobile) && (
          <BaseCard
            intensity="md"
            hover={false}
            borderOpacity={10}
            className="relative max-w-6xl mx-auto p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center isolate z-10"
          >
            {/* INPUTS SECTION */}
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8" ref={containerRef}>
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

              <div className="flex flex-col gap-1.5 relative">
                <label className="text-[10px] font-bold uppercase text-brand-primary/40 tracking-widest flex items-center gap-2">
                  <Users size={14} /> Guests
                </label>
                <Dropdown
                  options={["1 person", "2 persons", "3 Persons", "4 persons", "more than 4 persons"]}
                  onChange={(val) => setGuests(val)}
                  className="bg-transparent border-none p-0 font-bold text-sm"
                />
              </div>
            </div>

            {/* ACTION SECTION */}
            <div className="md:col-span-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full bg-brand-accent text-white py-3.5 md:py-4 rounded-xl text-xs md:text-sm font-bold tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2 group"
              >
                <MessageCircle size={18} className="fill-white/20 group-hover:scale-110 transition-transform" />
                <span>BOOK NOW</span>
              </button>
            </div>
          </BaseCard>
        )}

        {/* MOBILE OVERLAY CALENDAR */}
        {activeMode && isMobile && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}
              onClick={() => setActiveMode(null)}
            />
            <div className="fixed top-20 left-0 right-0 z-[110] flex justify-center p-8 pointer-events-none">
              <div className="w-full max-w-sm animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
                <div className="rounded-3xl shadow-2xl overflow-hidden bg-white">
                  <Calendar
                    startDate={startDate}
                    endDate={endDate}
                    onRangeChange={(start, end) => {
                      if (start && end && end <= start) {
                        setToast({
                          show: true,
                          message: "Departure must be after arrival.",
                          type: "warning",
                        });
                        return;
                      }
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

      {/* TOAST PORTAL - Pass type here */}
      <Toast isVisible={toast.show} message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />
    </>
  );
}
