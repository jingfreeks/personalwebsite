"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = { state: "idle" } | { state: "sending" } | { state: "sent" } | { state: "error"; message: string; fallback?: boolean };

const field =
  "w-full rounded-lg border border-white/15 bg-page/60 px-3.5 py-3 text-sm text-primary placeholder:text-muted outline-none transition-colors focus-visible:border-accent disabled:opacity-60";

export default function Contact() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fallback?: boolean };
      if (res.ok && json.ok) {
        form.reset();
        setStatus({ state: "sent" });
      } else {
        setStatus({ state: "error", message: json.error ?? "Something went wrong. Please try again.", fallback: json.fallback });
      }
    } catch {
      setStatus({ state: "error", message: "Network error — please check your connection and try again." });
    }
  }

  const sending = status.state === "sending";

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="font-heading mb-1.5 text-[1.45rem] font-bold tracking-tight text-primary">
        Start a Project
      </h2>
      <p className="mb-5 text-[0.85rem] text-primary/80">
        Tell me a bit about what you&apos;re building — I reply within a day. Prefer email?{" "}
        <a href={`mailto:${site.email}`} className="text-link no-underline hover:underline">
          {site.email}
        </a>
      </p>

      {status.state === "sent" ? (
        <div role="status" className="max-w-[28rem] rounded-xl border border-green/50 bg-green/10 px-4 py-4 text-sm text-primary">
          <p className="font-semibold">Message sent — thank you!</p>
          <p className="mt-1 text-primary/80">I&apos;ll get back to you within a day.</p>
          <button type="button" onClick={() => setStatus({ state: "idle" })} className="mt-3 text-[0.8rem] font-semibold text-link hover:text-accent-light">
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="flex max-w-[28rem] flex-col gap-3">
          <label className="sr-only" htmlFor="contact-name">Your name</label>
          <input id="contact-name" type="text" name="name" placeholder="Your name" required maxLength={100} autoComplete="name" disabled={sending} className={field} />
          <label className="sr-only" htmlFor="contact-email">Your email</label>
          <input id="contact-email" type="email" name="email" placeholder="Your email" required maxLength={200} autoComplete="email" disabled={sending} className={field} />
          <label className="sr-only" htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="What are you building, and what do you need help with?"
            rows={5}
            required
            maxLength={5000}
            disabled={sending}
            className={`${field} resize-y`}
          />
          {/* honeypot — hidden from people, filled by bots */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="contact-company">Company</label>
            <input id="contact-company" type="text" name="company" tabIndex={-1} autoComplete="off" />
          </div>

          {status.state === "error" && (
            <p role="alert" className="rounded-lg border border-red/50 bg-red/10 px-3.5 py-2.5 text-[0.82rem] text-primary">
              {status.message}
              {status.fallback && (
                <>
                  {" "}
                  <a href={`mailto:${site.email}`} className="font-semibold text-link hover:underline">{site.email}</a>
                </>
              )}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(22,131,255,0.5)] transition-colors hover:bg-accent-strong disabled:cursor-wait disabled:opacity-70"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </section>
  );
}
