import { ArrowRight } from "lucide-react";
import { ElementType } from "react";

type BaseButtonProps = {
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  borderOpacity?: string | number;
  text: string;
  hasArrow?: boolean;
};

export type ButtonProps =
  | (BaseButtonProps & {
      type: "link";
      href: string;
      onPress?: () => void;
    })
  | (BaseButtonProps & {
      type: "button";
      onPress: () => void;
      href?: string;
    });

export default function Button({
  intensity = "none",
  rounded = "full",
  className = "",
  borderOpacity,
  size = "md",
  onPress,
  href,
  type = "button",
  text = "Button text",
  hasArrow = true,
}: ButtonProps) {
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

  const sizeMap = {
    sm: "text-sm px-5 py-2",
    md: "text-md px-7 py-3",
    lg: "text-lg px-9 py-4",
  };

  const typeMap = {
    link: "a",
    button: "button",
  };

  const borderOpacityMap: any = {
    0: "border-transparent",
    20: "border-brand-accent/20",
    40: "border-brand-accent/40",
    60: "border-brand-accent/60",
    80: "border-brand-accent/80",
    100: "border-brand-accent",
  };

  const Component = typeMap[type] as ElementType;

  return (
    <>
      <Component
        {...(type === "link" ? { href } : {})}
        onClick={onPress && onPress}
        className={`
        flex items-between gap-2 w-full

        ${hasArrow ? "justify-between" : "justify-center"}

        ${sizeMap[size]}

        /* Base Glass Styles using brand card-bg */
        ${blurMap[intensity]}
        bg-card-bg

        /* Dynamic Border Opacity */
        border ${borderOpacityMap[borderOpacity || 0]}

        /* Shape and Shadow */
        ${roundedMap[rounded]}

        /* Hover Transitions */
        transition-all duration-500 hover:bg-brand-accent hover:text-white

        

        ${className}`}
      >
        <p>{text}</p>
        {hasArrow && <ArrowRight />}
      </Component>
    </>
  );
}
