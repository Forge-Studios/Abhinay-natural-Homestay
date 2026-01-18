import { ReactNode, ElementType } from "react";

interface GlassCardProps {
  children: ReactNode;
  as?: ElementType; // Allows changing the tag (e.g., section, article)
  className?: string;
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  hover?: boolean;
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  borderOpacity?: number;
}

export default function BaseCard({
  children,
  as: Component = "div",
  className = "",
  intensity = "xl",
  hover = true,
  rounded = "3xl",
  borderOpacity = 20,
}: GlassCardProps) {
  // Mapping intensities to backdrop-blur classes
  const blurMap = {
    none: "backdrop-blur-none",
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
    "2xl": "backdrop-blur-2xl",
  };

  const roundedMap = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-[2.5rem]", // Your specific brand radius
    full: "rounded-full",
  };

  return (
    <Component
      className={`
        /* Base Glass Styles using brand card-bg */
        ${blurMap[intensity]} 
        bg-card-bg
        
        /* Dynamic Border Opacity */
        border border-white/${borderOpacity}
        
        /* Shape and Shadow */
        ${roundedMap[rounded]}
        shadow-2xl 
        
        /* Hover Transitions */
        transition-all duration-500 
        ${hover ? "hover:bg-white/20 hover:shadow-brand-primary/10" : ""}
        
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
