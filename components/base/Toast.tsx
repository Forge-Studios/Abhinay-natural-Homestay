"use client";

import { CheckCircle2, X, AlertCircle } from "lucide-react"; // Added AlertCircle
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "success" | "warning"; // New prop
}

export default function Toast({ message, isVisible, onClose, type = "success" }: ToastProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isVisible) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!mounted || !isVisible) return null;

  // Configuration for different types
  const config = {
    success: {
      label: "Success!",
      icon: <CheckCircle2 size={24} />,
      colorClass: "text-green-600 bg-green-100",
      brandClass: "text-brand-primary",
    },
    warning: {
      label: "Notice",
      icon: <AlertCircle size={24} />,
      colorClass: "text-amber-600 bg-amber-100",
      brandClass: "text-amber-900",
    },
  };

  const active = config[type];

  return createPortal(
    <div className="fixed top-32 right-4 md:right-8 z-[9999] pointer-events-none">
      <div className="bg-white/80 backdrop-blur-2xl border border-white/40 p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm pointer-events-auto animate-in fade-in slide-in-from-top-10 duration-500">
        <div className={`${active.colorClass} p-2 rounded-full shrink-0`}>{active.icon}</div>
        <div className="flex-1">
          <p className={`${active.brandClass} font-bold text-sm`}>{active.label}</p>
          <p className="text-brand-primary/70 text-xs mt-0.5 leading-relaxed">{message}</p>
        </div>
        <button onClick={onClose} className="text-brand-primary/30 hover:text-brand-primary p-1">
          <X size={18} />
        </button>
      </div>
    </div>,
    document.body,
  );
}
