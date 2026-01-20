"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Form from "@/components/base/Form"; // Adjust path as needed

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
    
    /* Shift logic: Stay on the left, move up to top-2, and shrink */
    peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-brand-primary/70
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-primary/70
  `;

  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24">
      <div className="max-w-[95vw] 2xl:max-w-[1600px] mx-auto px-6">
        {/* 1. HEADER SECTION */}
        <section className="max-w-3xl mb-20">
          <span className="text-brand-accent font-bold tracking-[0.4em] uppercase text-xs">Reach Out</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary mt-6 leading-tight">
            Connect with the <br /> Heart of the Wild.
          </h1>
          <p className="mt-8 text-brand-primary/70 leading-loose text-xl font-light">
            Whether you are planning a weekend getaway or a long-term digital nomad stay, we are here to help you coordinate your perfect escape.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* 2. CONTACT INFORMATION (Left Column - 5/12) - Unchanged */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-sm group hover:shadow-xl transition-all">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary">Our Location</h3>
                  <p className="mt-2 text-brand-primary/60 leading-relaxed">
                    123 Forest Edge Trail, <br />
                    The Peak District, HP 400101
                  </p>
                  <button className="mt-4 text-xs font-bold text-brand-accent tracking-widest uppercase border-b border-brand-accent/30 pb-1">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-sm group hover:shadow-xl transition-all">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-muted rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary">Reservations</h3>
                  <p className="mt-2 text-brand-primary/60 leading-relaxed">+1 (555) 000-1234</p>
                  <p className="text-sm text-brand-primary/40 mt-1 italic">Available 8 AM - 8 PM IST</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 shadow-sm group hover:shadow-xl transition-all">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary">Email Inquiries</h3>
                  <p className="mt-2 text-brand-primary/60 leading-relaxed">hello@abhinaynatural.com</p>
                </div>
              </div>
            </div>
          </aside>

          {/* 3. REPLACED SECTION: CUSTOM CONTACT FORM (Right Column - 7/12) */}
          <div className="lg:col-span-7">
            <Form
              title="Send a Message"
              description="Tell us how we can help you reconnect with nature."
              submitLabel="Send Message"
              intensity="xl"
              rounded="3xl"
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                console.log("Form Submitted:", data);
                alert("Message Sent!");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="relative">
                  <input name="name" id="name" type="text" placeholder=" " className={inputStyles} required />
                  <label htmlFor="name" className={labelStyles}>
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input name="email" id="email" type="email" placeholder=" " className={inputStyles} required />
                  <label htmlFor="email" className={labelStyles}>
                    Email Address
                  </label>
                </div>
              </div>

              {/* Inquiry Type (Dropdown) */}
              <div className="relative">
                <select name="type" className={`${inputStyles} appearance-none cursor-pointer`}>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Group Booking / Events</option>
                  <option value="career">Career Opportunities</option>
                  <option value="media">Media & Collaboration</option>
                </select>
                <label className="absolute left-5 top-2 text-brand-primary/70 text-[10px] font-bold uppercase tracking-[0.2em]">Inquiry Type</label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea name="message" id="message" placeholder=" " rows={5} className={`${inputStyles} resize-none h-40`} required />
                <label htmlFor="message" className={labelStyles}>
                  Message
                </label>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
}
