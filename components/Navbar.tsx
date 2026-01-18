"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import the hook
import { Search, Heart, Leaf, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 2. Get the current URL path

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "THE RESORT", href: "/rooms" },
    { name: "FAQ", href: "/faq" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      {/* FLUID GLASSFROST CONTAINER */}
      <div className="w-full max-w-[95vw] 2xl:max-w-[1600px] mx-auto bg-white/40 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/30 px-6 md:px-10 h-20 flex items-center justify-between transition-all duration-500 hover:bg-white/50">
        
        {/* Logo Section */}
        <Link href="/" className="flex flex-col items-center gap-0.5 group shrink-0">
          <Leaf className="text-brand-primary group-hover:rotate-12 transition-transform" size={20} />
          <div className="text-center font-display leading-tight">
            <span className="text-xs font-bold tracking-[0.3em] text-brand-primary block">
              ABHINAY
            </span>
            <span className="text-[7px] uppercase tracking-[0.1em] text-brand-secondary font-semibold">
              Natural Homestay
            </span>
          </div>
        </Link>

        {/* Navigation - Dynamic Active State */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => {
            // 3. Check if the link matches the current path
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] font-bold tracking-[0.15em] transition-all pb-1 border-b-2 ${
                  isActive 
                  ? "text-brand-primary border-brand-primary" // Active Style (Forest Green)
                  : "text-brand-secondary border-transparent hover:text-brand-primary hover:border-brand-primary/30" // Inactive Style
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-brand-primary p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fluid Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 mx-auto w-[90vw] bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-2xl border border-white/40 animate-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xs font-bold tracking-widest transition-colors ${
                    isActive ? "text-brand-primary" : "text-brand-secondary hover:text-brand-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}