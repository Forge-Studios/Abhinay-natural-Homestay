"use client";

import { ReactNode } from "react";
import BaseCard from "./base/BaseCard";

interface StatCardProps {
  readonly stat: string | number;
  readonly title: string;
  readonly description?: string;
  readonly subtitle?: string;
  readonly children?: ReactNode;
  readonly footer?: ReactNode;
  readonly className?: string;
  readonly animate?: boolean;
  readonly intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
}

export default function StatCard({
  stat,
  title,
  description,
  subtitle,
  children,
  footer,
  className = "",
  animate = true,
  intensity = "xl",
}: Readonly<StatCardProps>) {
  return (
    <BaseCard
      intensity={intensity}
      className={`
        p-8 flex flex-col h-full
        transition-all duration-500 group
        hover:-translate-y-1 hover:border-brand-accent/30
        ${animate ? "animate-page-reveal" : ""}
        ${className}
      `}
    >
      {/* Subtitle / Eyebrow */}
      {subtitle && <span className="block text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-3">{subtitle}</span>}

      {/* Large Stat Number */}
      <div className="text-4xl md:text-6xl text-brand-primary mb-4">{stat}</div>

      {/* Main Title */}
      <h3 className="text-lg md:text-xl font-display font-bold text-brand-primary mb-4 leading-tight">{title}</h3>

      {/* Description */}
      {description && <p className="text-base md:text-lg font-body leading-relaxed mb-6">{description}</p>}

      {/* Custom Content Slot */}
      {children && <div className="flex-1">{children}</div>}

      {/* Footer Slot */}
      {footer && (
        <div className="mt-auto pt-6 border-t border-brand-primary/5 flex items-center justify-between text-sm text-brand-primary/50">{footer}</div>
      )}
    </BaseCard>
  );
}
