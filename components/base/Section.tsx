import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean; // If true, section takes full width, else max-w-7xl and centered
  id?: string;
}

export default function Section({ children, className, fullWidth = false, id }: SectionProps) {
  return (
    <>
      <section
        id={id}
        className={`py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 w-full ${className || ""} ${
          fullWidth ? "max-w-full" : "max-w-7xl mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-7xl"
        }`}
      >
        {children}
      </section>
    </>
  );
}
