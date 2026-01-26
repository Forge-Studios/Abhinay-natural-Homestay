import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  aspectRatio?: string; // "4/5", "16/9"
  className?: string; // allow layout control from parent
}

export default function ImageCard({ src, alt, aspectRatio = "4 / 5", className = "" }: ImageCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-[3rem] shadow-2xl
        w-full max-w-md mx-auto
        ${className}
      `}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 80vw,
          400px
        "
        className="
          object-cover rounded-[2.5rem]
          transition-transform duration-700
          hover:scale-105
        "
        priority
      />
    </div>
  );
}
