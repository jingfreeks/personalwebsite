import Link from "next/link";
import { ArrowRight, Send } from "@/components/Icons";

/** Closing CTA for a blog article — same routes and copy pattern as the project pages' CTA. */
export default function BlogCTA() {
  return (
    <div className="mt-10 rounded-xl border border-accent/30 bg-accent/10 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Send className="mt-0.5 h-7 w-7 shrink-0 text-accent-light" strokeWidth={1.6} />
          <div>
            <p className="font-heading text-[1rem] font-bold text-primary">Ready to manage your business more efficiently?</p>
            <p className="mt-1 text-[0.88rem] leading-relaxed text-primary/85">
              See how sales, inventory and customer records can work together in Tindahan POS.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem] font-semibold sm:shrink-0">
          <Link href="/projects/tindahan-pos" className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
            Explore Tindahan POS <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/#contact" className="plain inline-flex items-center gap-2 text-link hover:text-accent-light">
            Request a demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
