"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Reveal>
      <section id="contact" className="mb-10">
        <h2 className="font-heading mb-1.5 text-[22px] font-semibold">
          Get in Touch
        </h2>
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
            className="rounded-md border border-input-border bg-panel/40 px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted focus-visible:border-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="rounded-md border border-input-border bg-panel/40 px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted focus-visible:border-accent"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            required
            className="resize-y rounded-md border border-input-border bg-panel/40 px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted focus-visible:border-accent"
          />
          <button
            type="submit"
            className="rounded-md bg-accent px-[22px] py-[13px] text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            {submitted ? "Message sent" : "Send message"}
          </button>
        </form>
      </section>
    </Reveal>
  );
}
