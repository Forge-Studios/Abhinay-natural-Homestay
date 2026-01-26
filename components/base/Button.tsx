import { ArrowRight } from "lucide-react";
import { ElementType } from "react";

type BaseButtonProps = {
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
  borderOpacity?: number;
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
  borderOpacity = 0,
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

  const Component = typeMap[type] as ElementType;

  return (
    <>
      <Component
        onClick={onPress && onPress}
        className={`
        flex items-between gap-2 w-full

        ${hasArrow ? "justify-between" : "justify-center"}

        ${sizeMap[size]}

        /* Base Glass Styles using brand card-bg */
        ${blurMap[intensity]}
        bg-card-bg

        /* Dynamic Border Opacity */
        border border-brand-accent ${borderOpacity}

        /* Shape and Shadow */
        ${roundedMap[rounded]}

        /* Hover Transitions */
        transition-all duration-500 hover:bg-brand-accent hover:text-white

        ${type === "link" ? { href } : {}}

        ${className}`}
      >
        <p>{text}</p>
        {hasArrow && <ArrowRight />}
      </Component>
    </>
  );
}
