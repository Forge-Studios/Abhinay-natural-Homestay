"use client";

import React, { ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import BaseCard from "./BaseCard";

// Define Data
interface ModalChildProps {
  close: () => void;
}

interface GlassModalProps {
  readonly trigger: ReactElement<any>;
  readonly children: ReactNode | ((props: ModalChildProps) => ReactNode);
  readonly title?: ReactNode;
  readonly footer?: ReactNode | ((props: ModalChildProps) => ReactNode);
  readonly size?: "sm" | "md" | "lg" | "xl" | "full";
  readonly intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  readonly rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  readonly showCloseButton?: boolean;
  readonly closeOnBackdropClick?: boolean;
  readonly className?: string;
}

export default function GlassModal({
  trigger,
  children,
  title,
  footer,
  size = "md",
  intensity = "xl",
  rounded = "3xl",
  showCloseButton = true,
  closeOnBackdropClick = true,
  className = "",
}: Readonly<GlassModalProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  const sizeMap = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-[95vw]",
  };

  // Helper
  const renderSlot = (slot: ReactNode | ((props: ModalChildProps) => ReactNode)) => {
    return typeof slot === "function" ? slot({ close }) : slot;
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-brand-primary/40 backdrop-blur-md transition-opacity duration-500 animate-in fade-in"
        onClick={closeOnBackdropClick ? close : undefined}
        role="button"
        aria-label="Close modal"
        tabIndex={-1}
      />

      <BaseCard
        as="div"
        intensity={intensity}
        rounded={rounded}
        hover={false}
        className={`
          relative w-full ${sizeMap[size]} 
          bg-card-bg border-glass-border
          shadow-2xl flex flex-col max-h-[90vh]
          animate-page-reveal overflow-hidden
          ${className}
          z-[10000]
        `}
      >
        {/* HEADER SLOT */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-brand-primary/10 bg-white/5">
            <div className="flex-1">
              {typeof title === "string" ? <h3 className="text-xl font-display font-semibold text-brand-primary">{title}</h3> : title}
            </div>
            {showCloseButton && (
              <button
                onClick={close}
                className="ml-4 p-2 rounded-full hover:bg-brand-accent/10 text-brand-primary/50 hover:text-brand-primary transition-all duration-300 outline-none focus-visible:ring-2 ring-brand-accent/40"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* BODY SLOT (Scrollable) */}
        <div className="p-6 overflow-y-auto custom-scrollbar text-brand-primary/90 font-body flex-1">{renderSlot(children)}</div>

        {/* FOOTER SLOT (Fixed at bottom) */}
        {footer && (
          <div className="p-4 px-6 border-t border-brand-primary/10 bg-white/5 flex items-center justify-end gap-3">{renderSlot(footer)}</div>
        )}
      </BaseCard>
    </div>
  );

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: (e: any) => {
          if (trigger.props?.onClick) trigger.props.onClick(e);
          open();
        },
        onPress: (e: any) => {
          if (trigger.props?.onPress) trigger.props.onPress(e);
          open();
        },
      })}

      {mounted && isOpen ? createPortal(modalContent, document.body) : null}
    </>
  );
}
