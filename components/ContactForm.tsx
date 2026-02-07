"use client";

import { FormEvent, useRef, useState } from "react"; 
import Form from "./base/Form";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending) return; // Guard clause

    setIsPending(true);

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
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
    } finally {
      setIsPending(false);
    }
  };

  const fieldStyles = `
    peer w-full px-5 py-4 pt-7
    bg-white/20 border border-brand-primary/10
    rounded-2xl text-brand-primary outline-none
    placeholder-transparent
    focus:border-brand-primary/30 focus:bg-white/40
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const labelStyles = `
    absolute right-5 top-5 
    text-brand-primary/40 text-base font-medium
    transition-all duration-300 pointer-events-none
    peer-focus:top-2 peer-focus:right-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-brand-primary/70
    peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:right-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-brand-primary/70
  `;

  return (
    <section className="w-full max-w-2xl mx-auto p-4">
      <Form
        ref={formRef} 
        title="Get in Touch"
        description="Fill out the fields below and we'll reach out soon."
        submitLabel="Send Message"
        onSubmit={handleSubmit}
        isLoading={isPending} 
        intensity="xl"
        rounded="3xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input name="name" type="text" id="name" placeholder=" " className={fieldStyles} required disabled={isPending} />
            <label htmlFor="name" className={labelStyles}>
              Name
            </label>
          </div>

          <div className="relative">
            <input name="email" type="email" id="email" placeholder=" " className={fieldStyles} required disabled={isPending} />
            <label htmlFor="email" className={labelStyles}>
              Email
            </label>
          </div>
        </div>

        <div className="relative">
          <input name="subject" type="text" id="subject" placeholder=" " className={fieldStyles} required disabled={isPending} />
          <label htmlFor="subject" className={labelStyles}>
            Subject
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            id="message"
            placeholder=" "
            rows={5}
            className={`${fieldStyles} resize-none h-40`}
            required
            disabled={isPending}
          />
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
        </div>
      </Form>
    </section>
  );
}
