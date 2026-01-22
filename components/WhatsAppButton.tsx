"use client";

import { useEffect, useRef, useState } from "react";

type WhatsAppButtonProps = {
  phoneNumber: string; // e.g. "919876543210"
};

const options = [
  {
    id: "booking",
    title: "Book a Room",
    message: "Hello, I am interested in booking a room. Can you help me with the available options?",
  },
  {
    id: "queries",
    title: "Have Queries",
    message: "Hello, I have some queries about your hotel. Can you please assist me?",
  },
];

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleOptionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40" ref={menuRef} role="region" aria-label="WhatsApp contact options">
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-72 rounded-2xl  overflow-hidden mb-2"
          style={{ backgroundColor: "#F6EDD9", borderColor: "#7BA204" }}
        >
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.message)}
              className="w-full px-4 py-3 text-left transition-all duration-200"
            >
              <div
                className="max-w-full rounded-2xl px-4 py-3 shadow-sm"
                style={{
                  backgroundColor: "#DCF8C6", // WhatsApp bubble green
                  borderTopLeftRadius: "0.5rem",
                }}
              >
                {/* Title (Sender) */}
                <p className="text-xs font-semibold mb-1" style={{ color: "#075E54" }}>
                  {option.title}
                </p>

                {/* Message */}
                <p className="text-sm text-gray-800 leading-snug line-clamp-2">{option.message}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center transform hover:scale-110 active:scale-95"
        style={{
          backgroundColor: "#7BA204",
          color: "white",
          border: "3px solid white",
        }}
        aria-label="Open WhatsApp menu"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.736 5.568 2.134 7.992L0 32l8.26-2.086A15.89 15.89 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.091c-2.462 0-4.872-.652-6.994-1.885l-.5-.294-4.9 1.238 1.306-4.776-.326-.515A13.06 13.06 0 012.91 16C2.91 8.98 8.98 2.91 16 2.91S29.09 8.98 29.09 16 23.02 29.09 16 29.09zm7.45-9.327c-.408-.204-2.416-1.193-2.79-1.33-.373-.136-.646-.204-.918.204-.272.409-1.057 1.33-1.296 1.603-.238.272-.476.306-.884.102-.408-.204-1.722-.635-3.28-2.025-1.213-1.084-2.032-2.422-2.27-2.83-.238-.408-.025-.63.179-.833.184-.183.408-.476.612-.714.204-.238.272-.408.408-.68.136-.272.068-.51-.034-.714-.102-.204-.918-2.215-1.258-3.032-.33-.792-.665-.684-.918-.696-.238-.01-.51-.013-.782-.013-.272 0-.714.102-1.088.51-.374.408-1.428 1.397-1.428 3.407 0 2.01 1.463 3.952 1.666 4.224.204.272 2.878 4.398 6.976 6.164.975.42 1.736.67 2.33.857.98.312 1.873.268 2.578.162.786-.118 2.416-.986 2.756-1.94.34-.952.34-1.77.238-1.94-.102-.17-.374-.272-.782-.476z" />
        </svg>
      </button>
    </div>
  );
}
