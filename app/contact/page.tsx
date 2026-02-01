"use client";

import Form from "@/components/base/Form";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const inputStyles = `
    peer w-full px-5 py-4 pt-7
    bg-white/20 border border-brand-primary/10 
    rounded-2xl text-brand-primary outline-none 
    placeholder-transparent
    focus:border-brand-primary/30 transition-all duration-300
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
        {/* HEADER */}
        <section className="max-w-3xl mb-14">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Reach Out</span>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-brand-primary mt-6">Connect with the Heart of the Wild</h1>
          <p className="mt-6 text-brand-primary/70 text-lg leading-relaxed">
            Planning a getaway or a long stay? Drop us a message — we’ll handle the rest.
          </p>
        </section>

        {/* QUICK CONTACT ACTIONS (Always Visible) */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: <MapPin size={18} />,
              title: "Location",
              value: "Phaparkheti, WB",
              color: "bg-brand-primary",
            },
            {
              icon: <Phone size={18} />,
              title: "Call",
              value: "+91 98765 43210",
              color: "bg-brand-muted",
            },
            {
              icon: <Mail size={18} />,
              title: "Email",
              value: "hello@abhinaynatural.com",
              color: "bg-brand-accent",
            },
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
          {/* FORM — PRIMARY */}
          <div className="lg:col-span-7 order-1">
            <Form
              title="Send a Message"
              description="Tell us what you’re looking for."
              submitLabel="Send Message"
              intensity="xl"
              rounded="3xl"
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());

                console.log("Contact Form Submitted:", data);

                alert("Message sent successfully!");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input name="name" placeholder=" " className={inputStyles} required />
                  <label className={labelStyles}>Full Name</label>
                </div>
                <div className="relative">
                  <input name="email" type="email" placeholder=" " className={inputStyles} required />
                  <label className={labelStyles}>Email Address</label>
                </div>
              </div>

              <div className="relative">
                <select name="type" className={`${inputStyles} appearance-none`}>
                  <option>General Inquiry</option>
                  <option>Group Booking</option>
                  <option>Career</option>
                  <option>Media</option>
                </select>
                <label className="absolute left-5 top-2 text-[10px] uppercase tracking-widest text-brand-primary/60">Inquiry Type</label>
              </div>

              <div className="relative">
                <textarea rows={5} name="message" placeholder=" " className={`${inputStyles} resize-none`} required />
                <label className={labelStyles}>Message</label>
              </div>
            </Form>
          </div>

          {/* MAP — SECONDARY */}
          <aside className="lg:col-span-5 order-2">
            <div className="bg-white/40 backdrop-blur-md p-4 rounded-3xl border border-white/20 h-[280px] sm:h-[360px] lg:h-full">
              <iframe
                className="w-full h-full rounded-2xl"
                loading="lazy"
                style={{ border: 0 }}
                src="https://www.google.com/maps?q=27.0418,88.6883&z=14&output=embed"
              />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
