import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-app-bg text-brand-primary py-24 px-8 mt-20">
      <div className="w-full max-w-[95vw] 2xl:max-w-400 mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-display font-bold tracking-[0.3em] uppercase">ABHINAY NATURAL</h3>
          <p className="mt-8 text-brand-primary/70 max-w-md leading-loose font-light">
            Where luxury meets the wild. Subscribe to our journal for forest guides and exclusive stay offers.
          </p>
          <div className="mt-10 flex gap-4 max-w-md">
            <input 
              placeholder="Email Address" 
              className="bg-white/80 border border-brand-primary/10 rounded-full py-4 px-8 w-full text-sm outline-none focus:bg-white transition-all placeholder:text-brand-primary/40 text-brand-primary" 
            />
            <button className="bg-brand-accent text-white px-10 rounded-full font-bold text-xs tracking-widest hover:bg-brand-primary transition-colors">
              JOIN
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary/50 mb-8">Follow Us</h4>
          <div className="flex gap-8">
            <Instagram size={24} className="text-brand-primary hover:text-brand-accent cursor-pointer transition-colors" />
            <Facebook size={24} className="text-brand-primary hover:text-brand-accent cursor-pointer transition-colors" />
            <Twitter size={24} className="text-brand-primary hover:text-brand-accent cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-primary/50 mb-8">Location</h4>
          <p className="text-sm font-medium leading-relaxed text-brand-primary">
            123 Forest Edge Trail<br/>
            Mountain Peak Region<br/>
            Pin: 400101
          </p>
        </div>
      </div>
      <div className="w-full max-w-[95vw] 2xl:max-w-400 mx-auto pt-16 mt-16 border-t border-brand-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-brand-primary/50 tracking-widest uppercase italic">
          © 2026 Abhinay Natural Homestay. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}