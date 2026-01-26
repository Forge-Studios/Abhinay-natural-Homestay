import Image from "next/image";
import { ReactNode } from "react";
import BaseCard from "./base/BaseCard";

interface ImageInfoCardProps {
  src: string;
  alt: string;
  content: ReactNode;
  textColor?: string; // Tailwind color class suffix (e.g., "white" for text-white)
  bgColor?: string; // Tailwind color class suffix (e.g., "gray-800" for bg-gray-800)
}

export default function ImageInfoCard({ src, alt, content, textColor, bgColor }: ImageInfoCardProps) {
  return (
    <BaseCard className={`w-max h-max p-4 bg-${bgColor}`}>
      <Image src={src} alt={alt} height={100} width={500} className="rounded-4xl" />
      <div className={`text-${textColor || "white"} p-4`}>{content}</div>
    </BaseCard>
  );
}
