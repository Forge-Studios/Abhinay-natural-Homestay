import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-24 px-8 mt-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-display font-bold tracking-[0.3em] uppercase">ABHINAY NATURAL</h3>
          <p className="mt-8 text-white/50 max-w-md leading-loose font-light">
            Where luxury meets the wild. Subscribe to our journal for forest guides and exclusive stay offers.
          </p>
          <div className="mt-10 flex gap-4 max-w-md">
            <input 
              placeholder="Email Address" 
              className="bg-white/5 border border-white/10 rounded-full py-4 px-8 w-full text-sm outline-none focus:bg-white/10 transition-all placeholder:text-white/20" 
            />
            <button className="bg-white text-brand-primary px-10 rounded-full font-bold text-xs tracking-widest hover:bg-stone-100 transition-colors">
              JOIN
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-8">Follow Us</h4>
          <div className="flex gap-8">
            <Instagram size={24} className="hover:text-brand-accent cursor-pointer transition-colors" />
            <Facebook size={24} className="hover:text-brand-accent cursor-pointer transition-colors" />
            <Twitter size={24} className="hover:text-brand-accent cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-8">Location</h4>
          <p className="text-sm font-medium leading-relaxed">
            123 Forest Edge Trail<br/>
            Mountain Peak Region<br/>
            Pin: 400101
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-[10px] text-white/30 tracking-widest uppercase italic">
          © 2026 Abhinay Natural Homestay. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}