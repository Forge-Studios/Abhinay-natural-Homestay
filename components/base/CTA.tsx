import { ArrowRight } from "lucide-react";
import Image from "next/image";
import BaseCard from "./BaseCard";

interface CTAProps {
  className?: string; //additional classes for positioning
  rowReverse?: boolean; //default false
  imgSrc?: string; //default image src
  showImage?: boolean; //default true
}

export default function CTA({ className, rowReverse, imgSrc, showImage = true }: CTAProps) {
  return (
    <BaseCard intensity="2xl" rounded="3xl" className={`${className} group p-8 flex ${rowReverse ? "flex-row-reverse" : ""} items-center gap-8`}>
      {showImage && (
        <div className="relative w-28 h-28 rounded-3xl overflow-hidden shrink-0 shadow-lg border border-white/10">
          <Image src={imgSrc || "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e"} alt="Mini Preview" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-brand-primary text-xl font-bold tracking-wide">Escape Awaits</h3>
        <p className="text-brand-primary/60 text-sm mt-2 font-medium">Find peace in grand style amid nature&apos;s embrace.</p>
        <button className="mt-5 flex items-center gap-3 text-brand-primary font-bold group/btn">
          <span className="text-xs tracking-[0.2em] uppercase">EXPLORE</span>
          <div className="w-10 h-10 rounded-full border-2 border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
            <ArrowRight size={18} />
          </div>
        </button>
      </div>
    </BaseCard>
  );
}
