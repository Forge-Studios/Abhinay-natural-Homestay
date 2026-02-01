"use client";

import { useState } from "react";

type CalendarProps = {
  startDate: Date | null;
  endDate: Date | null;
  onRangeChange: (start: Date | null, end: Date | null) => void;
};

export default function Calendar({ startDate, endDate, onRangeChange }: CalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getDate = (day: number) => {
    const d = new Date(currentYear, currentMonth, day);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const isPastDate = (date: Date) => date < today;

  const isSameDay = (a: Date | null, b: Date) =>
    !!a && a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();

  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false;
    const date = getDate(day);
    return date > startDate && date < endDate;
  };

  const selectDate = (day: number) => {
    const date = getDate(day);
    if (isPastDate(date)) return;

    if (!startDate) {
      onRangeChange(date, null);
      return;
    }

    if (startDate && !endDate) {
      if (date < startDate) {
        onRangeChange(date, null);
      } else {
        onRangeChange(startDate, date);
      }
      return;
    }

    onRangeChange(date, null);
  };

  const prevMonth = () => {
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) return;

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long" });

  return (
    <div
      className="
        w-full max-w-96 mx-auto p-4 sm:p-6 
        backdrop-blur-3xl bg-white/10 
        border-2 border-white/40 
        rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl
        transition-all duration-500
      "
      style={{ backgroundColor: "rgba(245, 245, 245, 0.7)" }}
    >
      {/* Selected Range */}
      <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        <div className="rounded-lg border-2 p-2 sm:p-3 text-sm" style={{ borderColor: "#9999CC", backgroundColor: "rgba(123, 162, 4, 0.05)" }}>
          <p style={{ color: "#3F4C1B" }} className="text-xs font-semibold uppercase tracking-wider">
            Start Date
          </p>
          <p className="font-semibold mt-1 sm:mt-2 text-sm" style={{ color: "#7BA204" }}>
            {startDate?.toDateString() ?? "--"}
          </p>
        </div>
        <div className="rounded-lg border-2 p-2 sm:p-3 text-sm" style={{ borderColor: "#9999CC", backgroundColor: "rgba(123, 162, 4, 0.05)" }}>
          <p style={{ color: "#3F4C1B" }} className="text-xs font-semibold uppercase tracking-wider">
            End Date
          </p>
          <p className="font-semibold mt-1 sm:mt-2 text-sm" style={{ color: "#7BA204" }}>
            {endDate?.toDateString() ?? "--"}
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="mb-3 sm:mb-5 flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="transition hover:opacity-70 disabled:opacity-40 p-2 sm:px-3 sm:py-2 rounded-lg font-bold text-base sm:text-lg min-w-[44px] h-[44px] flex items-center justify-center"
          style={{ color: "#3F4C1B" }}
          disabled={currentYear === today.getFullYear() && currentMonth === today.getMonth()}
        >
          ◀
        </button>

        <h2 className="font-bold text-lg sm:text-xl truncate" style={{ color: "#3F4C1B" }}>
          {monthName} {currentYear}
        </h2>

        <button
          onClick={nextMonth}
          className="transition hover:opacity-70 p-2 sm:px-3 sm:py-2 rounded-lg font-bold text-base sm:text-lg min-w-[44px] h-[44px] flex items-center justify-center"
          style={{ color: "#3F4C1B" }}
        >
          ▶
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-xs sm:text-sm font-semibold mb-2 gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="py-1 sm:py-2" style={{ color: "#7BA204" }}>
            {d}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 text-center gap-1 sm:gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i} className="h-8 sm:h-10" />
        ))}

        {days.map((day) => {
          const date = getDate(day);
          const disabled = isPastDate(date);

          const isStart = isSameDay(startDate, date);
          const isEnd = isSameDay(endDate, date);

          return (
            <button
              key={day}
              disabled={disabled}
              onClick={() => selectDate(day)}
              className={`group flex h-10 sm:h-10 w-10 sm:w-10 items-center justify-center rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 m-0.5 sm:m-0.5
    ${
      disabled
        ? "cursor-not-allowed opacity-40 bg-gray-300 hover:bg-gray-300"
        : isStart || isEnd
          ? "bg-[#7BA204] text-white font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
          : isInRange(day)
            ? "bg-[#9999CC] hover:bg-[#8888BB]"
            : "hover:bg-[#6A8E04] hover:text-white active:bg-[#5A7A04] hover:shadow-md"
    }`}
              style={{
                color: disabled ? "#999999" : isStart || isEnd ? "white" : "#3F4C1B",
                minHeight: "40px",
                minWidth: "40px",
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
