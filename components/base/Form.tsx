"use client";
import { ReactNode, FormEvent, forwardRef } from "react";
import BaseCard from "./BaseCard";
import Button from "./Button";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  title?: string;
  description?: string;
  submitLabel?: string;
  isLoading?: boolean;
  className?: string;
  intensity?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, onSubmit, title, description, submitLabel = "Submit", isLoading = false, className = "", intensity = "xl", rounded = "3xl" }, ref) => {
    return (
      <BaseCard intensity={intensity} rounded={rounded} hover={false} className={className}>
        <form ref={ref} onSubmit={onSubmit} className="p-6 md:p-10 flex flex-col gap-8 h-full overflow-visible">
          {/* Header Section */}
          {(title || description) && (
            <div className="space-y-1">
              {title && <h2 className="text-3xl font-bold text-brand-primary tracking-tight">{title}</h2>}
              {description && <p className="text-brand-primary/60 text-base">{description}</p>}
            </div>
          )}

          {/* Form Fields Container */}
          <div className="space-y-6">{children}</div>

          {/* Action Button */}
          <div className="pt-4 mt-auto">
            <Button
              type="button"
              text={isLoading ? "Processing..." : submitLabel}
              hasArrow={!isLoading}
              rounded="full"
              onPress={() => {
                // Manually trigger the native form submission
                if (ref && "current" in ref) {
                  ref.current?.requestSubmit();
                }
              }}
            />
          </div>
        </form>
      </BaseCard>
    );
  },
);

Form.displayName = "Form";
export default Form;
