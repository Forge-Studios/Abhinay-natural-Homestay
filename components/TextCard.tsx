"use client";

import React, { ReactNode } from "react";
import BaseCard from "./base/BaseCard";

interface TextCardProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly children?: ReactNode; // For adding custom elements like tags or buttons
  readonly footer?: ReactNode; // For metadata or "Read More" links
  readonly intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  readonly className?: string;
  readonly animate?: boolean;
}

export default function TextCard({
  title,
  subtitle,
  description,
  children,
  footer,
  intensity = "xl",
  className = "",
  animate = true,
}: Readonly<TextCardProps>) {
  return (
    <BaseCard
      intensity={intensity}
      className={`
        p-8 flex flex-col h-full 
        transition-all duration-500 group
        hover:translate-y-[-4px] hover:border-brand-accent/30
        ${animate ? "animate-page-reveal" : ""}
        ${className}
      `}
    >
      {/* Subtitle / Eyebrow */}
      {subtitle && <span className="block text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold mb-3">{subtitle}</span>}

      {/* Main Title */}
      <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-primary mb-4 leading-tight">{title}</h3>

      {/* Description */}
      {description && <p className="text-brand-primary/70 font-body leading-relaxed mb-6">{description}</p>}

      {/* Custom Content Slot */}
      {children && <div className="flex-1">{children}</div>}

      {/* Footer Slot */}
      {footer && (
        <div className="mt-auto pt-6 border-t border-brand-primary/5 flex items-center justify-between text-sm text-brand-primary/50">{footer}</div>
      )}
    </BaseCard>
  );
}
