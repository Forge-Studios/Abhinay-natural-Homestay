"use client";

import { Bed, Home, Info, Leaf, Mail, Image } from "lucide-react";
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
    { name: "GALLERY", href: "/gallery", icon: Image },
    { name: "CONTACT US", href: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* --- TOP NAVBAR --- */}
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <div
          className={`
            relative flex items-center justify-between px-6 md:px-10 rounded-full
            bg-white/40 backdrop-blur-2xl border border-white/30 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
            pointer-events-auto
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            ${
              isScrolled
                ? "w-[85%] max-w-[1100px] h-12 md:h-16 bg-white/70 shadow-2xl translate-y-[-4px]"
                : "w-full max-w-[95vw] 2xl:max-w-[1600px] h-14 md:h-20 translate-y-0"
            }
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="flex flex-col items-center group shrink-0">
            <Leaf
              className={`text-brand-primary transition-all duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 ${
                isScrolled ? "scale-75 md:scale-90" : "scale-90 md:scale-100"
              }`}
              size={18}
            />
            <div className="text-center font-display leading-tight">
              <span className="text-[9px] md:text-xs font-bold tracking-[0.3em] text-brand-primary block">ABHINAY</span>
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

          {/* Desktop Links */}
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
              className="text-[8px] font-bold tracking-widest bg-brand-primary text-white px-4 py-2 rounded-full shadow-lg shadow-brand-primary/20 active:scale-95 transition-transform"
            >
              BOOK
            </Link>
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-[400px]">
        <div className="bg-white/80 backdrop-blur-3xl border border-white/50 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-1 flex justify-around items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link key={link.name} href={link.href} className="flex flex-col items-center group relative flex-1 py-1.5">
                {/* Slimmer Icon Container */}
                <div
                  className={`
                  p-1.5 rounded-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  ${
                    isActive
                      ? "bg-brand-primary text-white scale-110 -translate-y-1.5 shadow-md shadow-brand-primary/30"
                      : "text-brand-secondary active:scale-90"
                  }
                `}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                </div>

                {/* Slimmer Label */}
                <span
                  className={`
                  text-[8px] font-bold tracking-tight transition-all duration-300 mt-0.5
                  ${isActive ? "opacity-100 translate-y-0 text-brand-primary" : "opacity-60 -translate-y-0.5"}
                `}
                >
                  {link.name.split(" ")[0]}
                </span>

                {/* Active Indicator Dot */}
                <div
                  className={`
                  absolute bottom-0.5 w-1 h-1 bg-brand-primary rounded-full transition-all duration-500
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
