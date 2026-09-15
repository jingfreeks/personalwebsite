"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Reveal>
      <section id="contact" className="mb-10">
        <h2 className="font-heading mb-1.5 text-[22px] font-semibold">
          Start a Project
        </h2>
        <p className="mb-5 text-[13px] text-muted">
          Tell me a bit about what you&apos;re building — I reply within a day.
          Prefer email?{" "}
          <a
            href="mailto:lyndell.dobluis@gmail.com"
            className="text-link no-underline hover:underline"
          >
            lyndell.dobluis@gmail.com
          </a>
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
            placeholder="What are you building, and what do you need help with?"
            rows={5}
            required
            className="resize-y rounded-md border border-input-border bg-panel/40 px-3.5 py-3 font-sans text-sm text-primary placeholder:text-muted focus-visible:border-accent"
          />
          <button
            type="submit"
            className="rounded-md bg-accent-strong px-[22px] py-[13px] text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            {submitted ? "Message sent — I'll be in touch" : "Send message"}
          </button>
        </form>
      </section>
    </Reveal>
  );
}
