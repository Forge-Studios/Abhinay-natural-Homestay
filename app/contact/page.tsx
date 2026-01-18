import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
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
          
          {/* 2. CONTACT INFORMATION (Left Column - 5/12) */}
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

          {/* 3. CONTACT FORM (Right Column - 7/12) */}
          <section className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl">
            <h2 className="text-3xl font-display font-bold text-brand-primary flex items-center gap-4">
              <MessageSquare className="text-brand-accent" />
              Send a Message
            </h2>
            
            <form className="mt-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/40">Full Name</label>
                  <input type="text" className="bg-stone-50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-brand-primary font-medium" placeholder="Eugene Mendes" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/40">Email Address</label>
                  <input type="email" className="bg-stone-50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-brand-primary font-medium" placeholder="eugene@example.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/40">Inquiry Type</label>
                <select className="bg-stone-50 border-none rounded-2xl p-4 outline-none appearance-none cursor-pointer text-brand-primary font-medium">
                  <option>General Inquiry</option>
                  <option>Group Booking / Events</option>
                  <option>Career Opportunities</option>
                  <option>Media & Collaboration</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary/40">Message</label>
                <textarea rows={5} className="bg-stone-50 border-none rounded-3xl p-6 outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-brand-primary font-medium" placeholder="How can we help you reconnect with nature?"></textarea>
              </div>

              <button className="w-full bg-brand-accent text-white py-6 rounded-2xl font-bold tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-brand-accent/90 transition-all shadow-xl shadow-brand-accent/20 uppercase text-sm">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>
  );
}