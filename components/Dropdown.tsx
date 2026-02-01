"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onChange?: (option: string) => void;
  className?: string;
}

export default function Dropdown({ options, placeholder = "Select an option", onChange, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="flex items-center justify-between w-full group focus:outline-none">
        <span className="text-brand-primary font-bold text-sm truncate">{selectedOption || placeholder}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ml-2 text-brand-primary/40 group-hover:text-brand-primary ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Glassmorphism Menu */}
      {isOpen && (
        <div
          className="absolute left-0 top-full mt-3 w-full min-w-[220px] 
          /* The Glass Effect */
          bg-white/70 backdrop-blur-xl 
          border border-white/20 
          /* Soft UI Polish */
          rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] 
          z-[60] overflow-hidden 
          /* Animation */
          animate-in fade-in slide-in-from-top-2 duration-300"
        >
          <ul className="py-2">
            {options.map((option) => {
              const isSelected = selectedOption === option;
              return (
                <li key={option}>
                  <button
                    type="button"
                    className={`w-full text-left px-4 py-3 text-sm font-bold flex items-center justify-between transition-all
                      ${isSelected ? "bg-brand-primary text-white" : "text-brand-primary hover:bg-brand-primary/10"}`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                    {isSelected && <Check size={14} strokeWidth={3} />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
