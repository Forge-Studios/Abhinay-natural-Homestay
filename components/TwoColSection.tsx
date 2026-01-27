import { ReactNode } from "react";

interface TwoColSectionProps {
  left: ReactNode;
  right: ReactNode;

  bgColor?: string;

  /** Reverse order on desktop */
  reverse?: boolean;

  /** Optional styling hooks */
  className?: string;
  gap?: string; // Tailwind gap classes, e.g. "gap-8"
}

export default function TwoColSection({
  left,
  right,
  reverse = false,
  className = "",
  gap = "gap-8",
  bgColor = "bg-brand-muted",
}: TwoColSectionProps) {
  return (
    <div
      className={`
        grid grid-cols-1 lg:grid-cols-2
        rounded-2xl
        ${bgColor}
        ${gap}
        ${className}
      `}
    >
      {/* Column 1 */}
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>{left}</div>

      {/* Column 2 */}
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>{right}</div>
    </div>
  );
}
