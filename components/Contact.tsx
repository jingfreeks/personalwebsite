"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="mb-8">
      <h2 className="mb-1.5 text-[22px] font-bold">Get in Touch</h2>
      <p className="mb-5 text-[13px] text-muted">
        Have an opportunity or a question? Send a message below.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="flex max-w-[440px] flex-col gap-3"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-lg border border-input-border bg-panel px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="rounded-lg border border-input-border bg-panel px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="resize-y rounded-lg border border-input-border bg-panel px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-[22px] py-[13px] text-sm font-semibold text-white"
        >
          {submitted ? "Message sent" : "Send message"}
        </button>
      </form>
    </section>
  );
}
