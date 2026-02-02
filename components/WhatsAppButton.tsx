"use client";

import { useEffect, useRef, useState } from "react";

type WhatsAppButtonProps = {
  phoneNumber: string;
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
  const [showTooltip, setShowTooltip] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const playPopSound = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

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

  const toggleMenu = () => {
    playPopSound();
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  const handleOptionClick = (message: string) => {
    playPopSound();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    /*  clearance on mobile */
    <div className="fixed bottom-32 sm:bottom-8 right-6 z-[60]" ref={menuRef}>
      {/* GREETING TOOLTIP */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-20 right-0 mb-2 w-48 bg-white text-brand-primary p-3 rounded-2xl shadow-xl border border-brand-primary/10 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <p className="text-xs font-bold">Need help? 👋</p>
          <p className="text-[10px] opacity-70">Chat with us on WhatsApp!</p>
          <div className="absolute -bottom-1 right-8 w-2 h-2 bg-white rotate-45 border-r border-b border-brand-primary/10" />
        </div>
      )}

      {/* CHAT MENU */}
      {isOpen && (
        <div
          className="absolute bottom-20 right-0 w-72 rounded-[2rem] overflow-hidden mb-4 shadow-2xl border border-white/20 animate-in fade-in zoom-in-90 slide-in-from-bottom-8 duration-300"
          style={{ backgroundColor: "#F6EDD9", backdropFilter: "blur(12px)" }}
        >
          <div className="bg-brand-primary p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-sm font-bold">Abhinay Support</p>
            </div>
            <p className="text-[10px] opacity-70 mt-1 uppercase tracking-widest">Typically online</p>
          </div>

          <div className="p-3 space-y-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.message)}
                className="w-full text-left transition-all duration-300 hover:scale-[1.03] active:scale-95 group"
              >
                <div
                  className="rounded-2xl px-4 py-3 shadow-sm border border-black/5 bg-[#DCF8C6] group-hover:shadow-md transition-shadow"
                  style={{ borderTopLeftRadius: "0.2rem" }}
                >
                  <p className="text-[10px] font-bold uppercase text-[#075E54] mb-1">{option.title}</p>
                  <p className="text-sm text-gray-800 leading-snug line-clamp-2 italic italic opacity-90">"{option.message}"</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MAIN TOGGLE BUTTON */}
      <button
        onClick={toggleMenu}
        className="relative group w-16 h-16 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center hover:scale-110 active:scale-75"
        style={{
          backgroundColor: "#7BA204",
          color: "white",
          border: "4px solid white",
        }}
      >
        {!isOpen && <span className="absolute inset-0 rounded-full bg-[#7BA204] animate-ping opacity-25" />}

        <div className={`transition-transform duration-500 cubic-bezier(0.68, -0.55, 0.265, 1.55) ${isOpen ? "rotate-[135deg]" : "rotate-0"}`}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          ) : (
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-9 h-9">
              <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.736 5.568 2.134 7.992L0 32l8.26-2.086A15.89 15.89 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.091c-2.462 0-4.872-.652-6.994-1.885l-.5-.294-4.9 1.238 1.306-4.776-.326-.515A13.06 13.06 0 012.91 16C2.91 8.98 8.98 2.91 16 2.91S29.09 8.98 29.09 16 23.02 29.09 16 29.09zm7.45-9.327c-.408-.204-2.416-1.193-2.79-1.33-.373-.136-.646-.204-.918.204-.272.409-1.057 1.33-1.296 1.603-.238.272-.476.306-.884.102-.408-.204-1.722-.635-3.28-2.025-1.213-1.084-2.032-2.422-2.27-2.83-.238-.408-.025-.63.179-.833.184-.183.408-.476.612-.714.204-.238.272-.408.408-.68.136-.272.068-.51-.034-.714-.102-.204-.918-2.215-1.258-3.032-.33-.792-.665-.684-.918-.696-.238-.01-.51-.013-.782-.013-.272 0-.714.102-1.088.51-.374.408-1.428 1.397-1.428 3.407 0 2.01 1.463 3.952 1.666 4.224.204.272 2.878 4.398 6.976 6.164.975.42 1.736.67 2.33.857.98.312 1.873.268 2.578.162.786-.118 2.416-.986 2.756-1.94.34-.952.34-1.77.238-1.94-.102-.17-.374-.272-.782-.476z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
