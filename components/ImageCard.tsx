import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  aspectRatio?: string; // "4/5"
}

export default function ImageCard({ src, alt, height, width, aspectRatio }: ImageCardProps) {
  return (
    <div
      className="order-1 lg:order-2 relative rounded-[3rem] overflow-hidden shadow-2xl mx-auto"
      style={{
        width: width ? `${width}px` : "fit-content",
        height: height ? `${height}px` : "fit-content",
        aspectRatio: aspectRatio,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={!!(width || height || aspectRatio)}
        sizes="100%"
        className="rounded-[2.5rem] object-cover transition-transform duration-700 hover:scale-105"
        priority
      />
    </div>
  );
}
