"use client";

import { FormEvent } from "react";
import Form from "./base/Form";

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      console.log("im here");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      alert("Message sent successfully 🚀");
      e.currentTarget.reset();
    } catch {
      alert("Something went wrong. Try again.");
    }
  };

  /**
   * STYLING LOGIC:
   * 1. Added 'peer' to the input and 'placeholder-transparent' to hide native placeholders.
   * 2. Added 'pt-7' to inputs to give the shifted label space at the top.
   * 3. Used 'peer-focus' and 'peer-[:not(:placeholder-shown)]' to trigger label movement.
   */
  const fieldStyles = `
    peer w-full px-5 py-4 pt-7
    bg-white/20 border border-brand-primary/10
    rounded-2xl text-brand-primary outline-none
    placeholder-transparent
    focus:border-brand-primary/30 focus:bg-white/40
    transition-all duration-300
  `;

  const labelStyles = `
    absolute right-5 top-5 
    text-brand-primary/40 text-base font-medium
    transition-all duration-300 pointer-events-none
    
    /* Shift to Top Right on focus or when input is not empty */
    peer-focus:top-2 peer-focus:right-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-brand-primary/70
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:right-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-primary/70
  `;

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <Form
        title="Get in Touch"
        description="Fill out the fields below and we'll reach out soon."
        submitLabel="Send Message"
        onSubmit={handleSubmit}
        intensity="xl"
        rounded="3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="relative">
            <input name="name" type="text" id="name" placeholder=" " className={fieldStyles} required />
            <label htmlFor="name" className={labelStyles}>
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input name="email" type="email" id="email" placeholder=" " className={fieldStyles} required />
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
          </div>
        </div>

        {/* Subject Field */}
        <div className="relative">
          <input name="subject" type="text" id="subject" placeholder=" " className={fieldStyles} required />
          <label htmlFor="subject" className={labelStyles}>
            Subject
          </label>
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea name="message" id="message" placeholder=" " rows={5} className={`${fieldStyles} resize-none h-40`} required />
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
        </div>
      </Form>
    </section>
  );
}
