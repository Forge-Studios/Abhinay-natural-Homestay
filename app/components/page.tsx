"use client";

import BaseCard from "@/components/base/BaseCard";
import Button from "@/components/base/Button";
import Form from "@/components/base/Form";

export default function ComponentsPage() {
  /**
   * STYLES LOGIC:
   * 1. pt-7: Makes space for the label at the top.
   * 2. text-brand-primary: Ensures typing is visible on beige glass.
   * 3. Label starts at left-5/top-5 and floats to left-5/top-2.
   */
  const inputStyles = `
    peer w-full px-5 py-4 pt-7
    bg-white/20 border border-brand-primary/10 
    rounded-2xl text-brand-primary outline-none 
    placeholder-transparent
    focus:border-brand-primary/30 transition-all duration-300
  `;

  const labelStyles = `
    absolute left-5 top-5 text-brand-primary/40 text-base
    transition-all duration-300 pointer-events-none
    
    /* Shift logic: Stay on the left, move up to top-2, and shrink */
    peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-brand-primary/70
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-primary/70
  `;

  return (
    <main className="bg-app-bg min-h-screen pt-36 pb-24 text-brand-primary">
      <div className="max-w-[95vw] 2xl:max-w-400 mx-auto px-6">
        <h1>Components Page</h1>

        {/* Existing Components - UNTOUCHED */}
        <Button text="Visit Us" type="link" href="test.com" />

        <BaseCard className="p-6 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Base Card Component</h2>
          <p>This is an example of the BaseCard component with default props.</p>
        </BaseCard>

        {/* The Form Component with Left-Floating Labels */}
        <div className="mt-12 max-w-2xl">
          <Form
            title="Contact Form"
            description="Labels float to the top-left on focus or when typing."
            submitLabel="Send Message"
            rounded="3xl"
            onSubmit={(e: any) => {
              e.preventDefault();
              console.log("Form Data:", Object.fromEntries(new FormData(e.currentTarget)));
              alert("Form submitted! Check console.");
            }}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Field */}
                <div className="relative">
                  <input name="name" id="name" placeholder=" " className={inputStyles} required />
                  <label htmlFor="name" className={labelStyles}>
                    Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <input name="email" id="email" type="email" placeholder=" " className={inputStyles} required />
                  <label htmlFor="email" className={labelStyles}>
                    Email
                  </label>
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input name="subject" id="subject" placeholder=" " className={inputStyles} required />
                <label htmlFor="subject" className={labelStyles}>
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea name="message" id="message" placeholder=" " rows={4} className={`${inputStyles} resize-none h-36`} required />
                <label htmlFor="message" className={labelStyles}>
                  Message
                </label>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}
