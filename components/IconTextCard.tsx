"use client";

import { ReactNode } from "react";
import BaseCard from "./base/BaseCard";

interface IconTextCardProps {
  readonly icon: ReactNode; 
  readonly title: string;
  readonly description: string;
  readonly variant?: "vertical" | "horizontal";
  readonly intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  readonly className?: string;
  readonly iconBg?: boolean; 
}

export default function IconTextCard({
  icon,
  title,
  description,
  variant = "vertical",
  intensity = "xl",
  className = "",
  iconBg = true,
}: Readonly<IconTextCardProps>) {
  const isVertical = variant === "vertical";

  return (
    <BaseCard intensity={intensity} className={`p-6 transition-all duration-500 group ${className}`}>
      <div className={`flex ${isVertical ? "flex-col" : "flex-row items-start gap-5"}`}>
        {/* Icon Container */}
        <div
          className={`
            flex items-center justify-center shrink-0
            transition-transform duration-500 group-hover:scale-110
            ${iconBg ? "w-12 h-12 rounded-2xl bg-brand-accent/10 text-brand-accent" : "text-brand-accent"}
            ${isVertical ? "mb-6" : "mt-1"}
          `}
        >
          {icon}
        </div>

        {/* Text Content */}
        <div className={isVertical ? "text-left" : "text-left"}>
          <h3 className="text-xl font-display font-semibold text-brand-primary mb-2">{title}</h3>
          <p className="text-brand-primary/70 font-body leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </BaseCard>
  );
}
