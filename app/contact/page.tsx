"use client";

import Form from "@/components/base/Form";
import Toast from "@/components/base/Toast";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("General Inquiry");
  const [isPending, setIsPending] = useState(false);
  const [showToast, setShowToast] = useState(false); // Toast visibility state

  const dropdownRef = useRef<HTMLDivElement>(null);
  const options = ["General Inquiry", "Single Booking", "Group Booking", "Others"];
  const PhoneNumber = process.env.NEXT_PUBLIC_MOBILE_NUM;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return;

    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    formData.set("subject", `New Enquiry for [${selectedType}]`);

    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      // SUCCESS: Trigger Toast and Reset
      setShowToast(true);
      e.currentTarget.reset();
      setSelectedType("General Inquiry");
    } catch (err) {
      console.log("Something went wrong. Please try again.");
    } finally {
      setIsPending(false);
    }
  };

  const inputStyles = `
    peer w-full px-5 py-4 pt-7
    bg-white/20 border border-brand-primary/10 
    rounded-2xl text-brand-primary outline-none 
    placeholder-transparent
    focus:border-brand-primary/30 transition-all duration-300
    disabled:opacity-50
  `;

  const labelStyles = `
    absolute left-5 top-5 text-brand-primary/40 text-base
    transition-all duration-300 pointer-events-none
    peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-brand-primary/70
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-primary/70
  `;

  return (
    <main className="bg-app-bg min-h-screen pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* HEADER SECTION */}
        <section className="max-w-3xl mb-14">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Reach Out</span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-brand-primary mt-6">Connect with the Heart of the Wild</h1>
          <p className="mt-6 text-brand-primary/70 text-lg leading-relaxed">
            Planning a getaway or a long stay? Drop us a message — we’ll handle the rest.
          </p>
        </section>

        {/* QUICK CONTACT ACTIONS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { icon: <MapPin size={18} />, title: "Location", value: "Paparkheti, WB", color: "bg-brand-primary" },
            { icon: <Phone size={18} />, title: "Call", value: PhoneNumber, color: "bg-brand-muted" },
            { icon: <Mail size={18} />, title: "Email", value: "hello@abhinaynaturalhomestay.in", color: "bg-brand-accent" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/20">
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white`}>{item.icon}</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-primary/50">{item.title}</p>
                <p className="text-sm font-medium text-brand-primary truncate">{item.value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* MAIN CONTENT */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 order-1">
            <Form
              title="Send a Message"
              description="Tell us what you’re looking for."
              submitLabel="Send Message"
              isLoading={isPending}
              intensity="xl"
              rounded="3xl"
              onSubmit={handleContactSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input name="name" placeholder=" " className={inputStyles} required disabled={isPending} />
                  <label className={labelStyles}>Full Name</label>
                </div>
                <div className="relative">
                  <input name="email" type="email" placeholder=" " className={inputStyles} required disabled={isPending} />
                  <label className={labelStyles}>Email Address</label>
                </div>
              </div>

              {/* FROSTED GLASS DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  disabled={isPending}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${inputStyles} text-left flex justify-between items-center`}
                >
                  <span className="pt-2">{selectedType}</span>
                  <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} size={18} />
                </button>
                <label className="absolute left-5 top-2 text-[10px] uppercase tracking-widest text-brand-primary/60">Inquiry Type</label>

                {isOpen && (
                  <ul className="absolute left-0 right-0 mt-2 z-50 bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                    {options.map((option) => (
                      <li key={option}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedType(option);
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-5 py-3 hover:bg-brand-primary/10 text-brand-primary transition-colors text-sm"
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="relative">
                <textarea rows={5} name="message" placeholder=" " className={`${inputStyles} resize-none`} required disabled={isPending} />
                <label className={labelStyles}>Message</label>
              </div>
            </Form>
          </div>

          {/* MAP */}
          <aside className="lg:col-span-5 order-2">
            <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/20 h-[280px] sm:h-[360px] lg:h-full">
              <iframe
                className="w-full h-full rounded-2xl"
                loading="lazy"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4372.777635032914!2d88.69382506526053!3d27.038082229801788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4059f516c776f%3A0x4c5e6cf574bc413b!2sAbhinay%20Natural%20Homestay!5e1!3m2!1sen!2sin!4v1771170887303!5m2!1sen!2sin"
              />
            </div>
          </aside>
        </section>
      </div>

      {/* TOAST NOTIFICATION */}
      <Toast isVisible={showToast} message="Message sent! We've also sent a confirmation to your inbox." onClose={() => setShowToast(false)} />
    </main>
  );
}
