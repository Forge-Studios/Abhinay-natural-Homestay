"use client";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

// Custom Fern Frond SVG component for reuse
const FernFrond = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 95C50 95 48 70 60 50C72 30 95 15 95 15C95 15 75 25 62 42C49 59 48 85 48 85M45 80C45 80 40 60 48 40C56 20 75 5 75 5C75 5 60 15 52 32C44 49 42 75 42 75M35 65C35 65 25 50 35 30C45 10 65 2 65 2C65 2 50 10 42 25C34 40 33 60 33 60" />
    <path d="M42 90C42 90 35 75 25 65C15 55 5 50 5 50C5 50 15 58 28 68C41 78 40 92 40 92" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-app-bg text-brand-primary py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden border-t border-brand-primary/5">
      {/* --- SUBTLE FERN BACKGROUNDS (No Animation) --- */}
      {/* Top Left Fern */}
      <div className="absolute top-[-5%] left-[-5%] text-brand-primary/5 pointer-events-none -rotate-12">
        <FernFrond className="w-[400px] h-[400px]" />
      </div>

      {/* Mid Right Fern */}
      <div className="absolute top-[20%] right-[-10%] text-brand-accent/5 pointer-events-none rotate-[160deg]">
        <FernFrond className="w-[500px] h-[500px]" />
      </div>

      {/* Bottom Left Fern */}
      <div className="absolute bottom-[-10%] left-[15%] text-brand-primary/10 pointer-events-none rotate-[45deg]">
        <FernFrond className="w-[300px] h-[300px]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-brand-primary via-brand-primary/80 to-brand-accent bg-clip-text text-transparent">
            ABHINAY
          </h3>
          <p className="text-brand-primary/60 max-w-sm leading-relaxed text-sm font-light italic">
            "A homestay designed for deep rest and natural connection. Reconnect with the wild in comfort."
          </p>
        </div>

        {/* Social */}
        <div className="space-y-5">
          <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-accent/80">Connect</h4>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-brand-primary hover:text-white border border-brand-primary/5 transition-all duration-300 shadow-sm"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-5">
          <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-accent/80">The Estate</h4>
          <div className="space-y-4 text-sm font-light">
            <a href="mailto:hello@abhinaynatural.com" className="flex items-center gap-3 hover:text-brand-accent transition-all group">
              <Mail size={16} className="text-brand-accent/60" />
              <span>hello@abhinaynatural.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-brand-accent transition-all">
              <Phone size={16} className="text-brand-accent/60" />
              <span>+91 98765 43210</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-brand-accent/60" />
              <span className="leading-tight">
                N 88°41, 27°02, 16.8, 41 Phaparkheti,
                <br />
                Gorubathan, West Bengal 735231
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h4 className="text-[11px] font-bold tracking-[0.4em] uppercase text-brand-accent/80">Explore</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {["Home", "Rooms", "Experiences", "Gallery", "Contact", "Booking"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                className="text-sm font-medium text-brand-primary/70 hover:text-brand-accent hover:translate-x-1 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="w-full max-w-[1400px] mx-auto mt-20 pt-8 border-t border-brand-primary/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-brand-primary/40 tracking-[0.2em] uppercase font-bold">
          <p>© 2026 Abhinay Natural Homestay. Deeply Rooted.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors">
              Terms of Stay
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
