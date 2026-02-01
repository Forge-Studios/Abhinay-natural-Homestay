import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-app-bg text-brand-primary py-12 px-6 md:px-12 lg:px-20  relative">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            ABHINAY NATURAL
          </h3>
          <p className="text-brand-primary/70 max-w-sm leading-relaxed text-sm font-light">
            Where luxury meets the wild. Forest guides and exclusive stay offers.
          </p>
        </div>

        {/* Social */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-primary/70">Follow Us</h4>
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "https://instagram.com/abhinaynatural", label: "Instagram" },
              { Icon: Facebook, href: "https://facebook.com/abhinaynatural", label: "Facebook" },
              { Icon: Twitter, href: "https://twitter.com/abhinaynatural", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-brand-accent hover:text-white border border-white/10 hover:border-brand-accent/30 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                aria-label={`Follow us on ${label}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-primary/70">Contact</h4>
          <div className="space-y-2 text-sm">
            <a href="mailto:hello@abhinaynatural.com" className="flex items-start gap-2.5 hover:text-brand-accent group transition-all">
              <Mail size={16} className="mt-0.5 flex-shrink-0 text-brand-accent/70 group-hover:scale-105" />
              <span className="leading-tight">hello@abhinaynatural.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-start gap-2.5 hover:text-brand-accent group transition-all">
              <Phone size={16} className="mt-0.5 flex-shrink-0 text-brand-accent/70 group-hover:scale-105" />
              <span className="leading-tight">+91 98765 43210</span>
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-accent/70" />
              <span className="leading-tight">
                123 Forest Edge Trail
                <br className="hidden sm:inline" />
                Mountain Peak Region
                <br />
                Pin: 400101
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-primary/70">Quick Links</h4>
          {[
            { label: "Home", href: "/" },
            { label: "Rooms", href: "/rooms" },
            { label: "Experiences", href: "/experiences" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block text-sm font-medium text-brand-primary/80 hover:text-brand-accent hover:underline py-1 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-[1400px] mx-auto pt-8 border-t border-brand-primary/10 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-brand-primary/50 tracking-[0.1em] uppercase">
          <p>© 2026 Abhinay Natural Homestay. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
