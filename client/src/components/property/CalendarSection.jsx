import React from "react";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";
import { useBooking } from "../../contexts/BookingContext";
import { formatDateRange } from "../../utils/formatters";

export function CalendarSection() {
  const { checkIn, checkOut, nights, setCheckIn, setCheckOut } = useBooking();

  const handleClearDates = () => {
    setCheckIn("2026-10-18");
    setCheckOut("2026-10-23");
  };

  // October 2026 calendar days (Starts on Thursday Oct 1, 2026)
  // Week days: S M T W T F S
  // Oct 1 is Thursday (index 4)
  const octDays = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];

  // November 2026 calendar days (Starts on Sunday Nov 1, 2026)
  const novDays = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30,
  ];

  // Blocked / grayed out dates in November matching Photo 1
  const novDisabledDays = [18, 19, 20, 21, 22, 23, 24, 29, 30];

  return (
    <section id="calendar" className="py-8 border-b border-gray-200" aria-label="Availability Calendar">
      {/* Header matching Photo 1 */}
      <div className="mb-6">
        <h2 className="text-xl md:text-[22px] font-semibold text-gray-900 leading-snug">
          {nights} nights in Candolim
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          {formatDateRange(checkIn, checkOut)}
        </p>
      </div>

      {/* 2-Month Calendar Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 select-none">
        {/* October 2026 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              aria-label="Previous month"
              className="p-1.5 hover:bg-gray-100 rounded-full text-gray-700 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="font-semibold text-sm text-gray-900">
              October 2026
            </h3>
            <div className="w-7 md:hidden" />
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-700 mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          {/* October Grid */}
          <div className="grid grid-cols-7 gap-y-1 text-center text-xs font-medium">
            {octDays.map((day, index) => {
              if (!day) return <div key={`empty-${index}`} />;

              const isStart = day === 18;
              const isEnd = day === 23;
              const isInRange = day > 18 && day < 23;

              return (
                <div
                  key={`oct-${day}`}
                  className={`h-10 flex items-center justify-center relative cursor-pointer ${
                    isInRange ? "bg-gray-100" : ""
                  } ${isStart ? "bg-gradient-to-r from-transparent to-gray-100" : ""} ${
                    isEnd ? "bg-gradient-to-l from-transparent to-gray-100" : ""
                  }`}
                >
                  <span
                    className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
                      isStart || isEnd
                        ? "bg-black text-white font-bold shadow-xs"
                        : isInRange
                        ? "text-gray-900 font-semibold"
                        : "hover:border hover:border-gray-900 text-gray-900"
                    }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-7 hidden md:block" />
            <h3 className="font-semibold text-sm text-gray-900 text-center flex-1">
              November 2026
            </h3>
            <button
              aria-label="Next month"
              className="p-1.5 hover:bg-gray-100 rounded-full text-gray-700 transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-700 mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          {/* November Grid */}
          <div className="grid grid-cols-7 gap-y-1 text-center text-xs font-medium">
            {novDays.map((day) => {
              const isDisabled = novDisabledDays.includes(day);

              return (
                <div key={`nov-${day}`} className="h-10 flex items-center justify-center">
                  <span
                    className={`w-9 h-9 flex items-center justify-center rounded-full ${
                      isDisabled
                        ? "text-gray-300 line-through cursor-not-allowed"
                        : "hover:border hover:border-gray-900 text-gray-900 cursor-pointer"
                    }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Controls matching Photo 1 */}
      <div className="flex items-center justify-between pt-6 mt-4">
        <button
          onClick={() => alert("Keyboard shortcuts: Use arrow keys to navigate dates, Enter to select.")}
          className="p-2 border border-gray-300 hover:border-gray-900 rounded-lg text-gray-700 hover:text-black transition cursor-pointer"
          title="Keyboard shortcuts"
          aria-label="Keyboard shortcuts"
        >
          <Keyboard className="w-4 h-4" />
        </button>

        <button
          onClick={handleClearDates}
          className="text-xs sm:text-sm font-semibold underline text-gray-900 hover:text-black transition cursor-pointer"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
}
