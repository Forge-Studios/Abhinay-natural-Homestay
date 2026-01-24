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
    <div className="w-96 rounded-xl border-2 p-6 shadow-lg" style={{ backgroundColor: "#F6EDD9", borderColor: "#7BA204" }}>
      {/* Selected Range */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg border-2 p-3 text-sm" style={{ borderColor: "#9999CC", backgroundColor: "rgba(123, 162, 4, 0.05)" }}>
          <p style={{ color: "#3F4C1B" }} className="text-xs font-semibold uppercase tracking-wider">
            Start Date
          </p>
          <p className="font-semibold mt-2" style={{ color: "#7BA204" }}>
            {startDate?.toDateString() ?? "--"}
          </p>
        </div>
        <div className="rounded-lg border-2 p-3 text-sm" style={{ borderColor: "#9999CC", backgroundColor: "rgba(123, 162, 4, 0.05)" }}>
          <p style={{ color: "#3F4C1B" }} className="text-xs font-semibold uppercase tracking-wider">
            End Date
          </p>
          <p className="font-semibold mt-2" style={{ color: "#7BA204" }}>
            {endDate?.toDateString() ?? "--"}
          </p>
        </div>
      </div>

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <button
          onClick={prevMonth}
          className="transition hover:opacity-70 disabled:opacity-40 px-3 py-2 rounded-lg font-bold text-lg"
          style={{ color: "#3F4C1B" }}
          disabled={currentYear === today.getFullYear() && currentMonth === today.getMonth()}
        >
          ◀
        </button>

        <h2 className="font-bold text-xl" style={{ color: "#3F4C1B" }}>
          {monthName} {currentYear}
        </h2>

        <button onClick={nextMonth} className="transition hover:opacity-70 px-3 py-2 rounded-lg font-bold text-lg" style={{ color: "#3F4C1B" }}>
          ▶
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm font-semibold mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} style={{ color: "#7BA204" }}>
            {d}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 text-center gap-1">
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={i} />
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
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition ${
                disabled
                  ? "cursor-not-allowed opacity-40"
                  : isStart || isEnd
                    ? "text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105"
                    : isInRange(day)
                      ? "hover:opacity-90"
                      : "hover:shadow-md"
              }`}
              style={{
                backgroundColor: disabled ? "#E0E0E0" : isStart || isEnd ? "#7BA204" : isInRange(day) ? "#9999CC" : "transparent",
                color: disabled ? "#999999" : isStart || isEnd ? "white" : "#3F4C1B",
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
