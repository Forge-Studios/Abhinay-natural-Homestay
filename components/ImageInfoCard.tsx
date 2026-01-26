import Image from "next/image";
import { ReactNode } from "react";
import BaseCard from "./base/BaseCard";

interface ImageInfoCardProps {
  src: string;
  alt: string;
  content: ReactNode;
  textColor?: string; // e.g. "text-white"
  bgColor?: string; // e.g. "bg-gray-800"
}

export default function ImageInfoCard({ src, alt, content, textColor = "text-white", bgColor }: ImageInfoCardProps) {
  return (
    <BaseCard className={`p-4 ${bgColor} flex flex-col items-center gap-2 h-max`}>
      {/* Responsive image wrapper */}
      <div className="relative w-full aspect-5/3 rounded-4xl overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 500px" className="object-cover" />
      </div>

      <div className={`${textColor} p-4`}>{content}</div>
    </BaseCard>
  );
}
