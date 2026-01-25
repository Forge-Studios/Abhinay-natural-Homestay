"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  onChange?: (option: string) => void;
}

export default function Dropdown({ options, placeholder = "Select an option", onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <>
      <div ref={dropdownRef} className="max-w-xs relative">
        <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="flex items-center cursor-pointer w-full">
          <div className="flex items-center justify-between w-full px-1">
            <span className="cursor-pointer text-brand-primary font-bold text-sm">{selectedOption || placeholder}</span>
            {isOpen ? (
              <ChevronDown size={16} className="rotate-180 transition-transform" />
            ) : (
              <ChevronDown size={16} className="transition-transform" />
            )}
          </div>
        </button>

        {isOpen && (
          <div className="absolute top-0 bg-card-bg backdrop-blur-[2px] border rounded-xl w-full p-2">
            <ul>
              {options.map((option) => (
                <li key={option}>
                  <button type="button" className=" font-bold text-brand-primary text-sm" onClick={() => handleOptionSelect(option)}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
