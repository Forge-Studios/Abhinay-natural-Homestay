"use client";

import { Leaf, Home, Info, Bed, HelpCircle, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", icon: Home },
    { name: "ABOUT", href: "/about", icon: Info },
    { name: "ROOMS", href: "/rooms", icon: Bed },
    { name: "GALLERY", href: "/gallery", icon: HelpCircle },
    { name: "CONTACT US", href: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* --- DESKTOP TOP NAVBAR --- */}
      <nav className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <div
          className={`
            relative flex items-center justify-between px-6 md:px-10 rounded-full
            bg-white/40 backdrop-blur-2xl border border-white/30 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
            pointer-events-auto
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${
              isScrolled
                ? "w-[85%] max-w-[1100px] h-14 md:h-16 bg-white/70 shadow-2xl translate-y-[-4px]"
                : "w-full max-w-[95vw] 2xl:max-w-[1600px] h-20 translate-y-0"
            }
          `}
        >
          {/* Logo Section with Fluid Scale */}
          <Link href="/" className="flex flex-col items-center group shrink-0">
            <Leaf
              className={`text-brand-primary transition-all duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 ${
                isScrolled ? "scale-75 md:scale-90" : "scale-100"
              }`}
              size={20}
            />
            <div className="text-center font-display leading-tight">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-brand-primary block">ABHINAY</span>
              <div
                className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}
              `}
              >
                <span className="text-[7px] uppercase tracking-[0.1em] text-brand-secondary font-semibold">Natural Homestay</span>
              </div>
            </div>
          </Link>

          {/* Desktop Links - Hover Lift Animation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`
                    text-[10px] font-bold tracking-[0.15em] transition-all duration-300 relative py-1
                    hover:-translate-y-0.5 active:translate-y-0
                    ${isActive ? "text-brand-primary" : "text-brand-secondary hover:text-brand-primary"}
                  `}
                >
                  {link.name}
                  <span
                    className={`
                    absolute bottom-0 left-0 h-[2px] bg-brand-primary transition-all duration-500 ease-out
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                  `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Right Action */}
          <div className="lg:hidden">
            <Link
              href="/rooms"
              className="text-[9px] font-bold tracking-widest bg-brand-primary text-white px-5 py-2.5 rounded-full shadow-lg shadow-brand-primary/20 active:scale-95 transition-transform"
            >
              BOOK
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <div className="lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[420px]">
        <div className="bg-white/80 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 flex justify-around items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link key={link.name} href={link.href} className="flex flex-col items-center gap-1 group relative flex-1 py-2">
                {/* Icon Container with "Pop" Animation */}
                <div
                  className={`
                  p-2.5 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${
                    isActive
                      ? "bg-brand-primary text-white scale-110 -translate-y-2 shadow-lg shadow-brand-primary/30"
                      : "text-brand-secondary hover:bg-gray-100 active:scale-90"
                  }
                `}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                </div>

                {/* Dynamic Label */}
                <span
                  className={`
                  text-[9px] font-bold tracking-tight transition-all duration-300
                  ${isActive ? "opacity-100 translate-y-0 text-brand-primary" : "opacity-60 -translate-y-1"}
                `}
                >
                  {link.name.split(" ")[0]}
                </span>

                {/* Active Indicator */}
                <div
                  className={`
                  absolute bottom-0 w-1 h-1 bg-brand-primary rounded-full transition-all duration-500
                  ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
