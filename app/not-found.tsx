import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="bg-page text-primary">
      <div className="mx-auto max-w-[44rem] px-5 py-24 text-center sm:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-accent-light">404</p>
        <h1 className="font-heading mt-3 text-[2.2rem] font-bold leading-none tracking-tight text-primary sm:text-[2.6rem]">Page not found</h1>
        <p className="mx-auto mt-4 max-w-[46ch] text-[1rem] leading-relaxed text-primary/85">
          That link doesn&apos;t go anywhere. Try one of these instead.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[0.9rem] font-semibold">
          {[
            ["Home", "/"],
            ["Projects", "/projects"],
            ["Experience", "/#experience"],
            ["Contact", "/#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="plain inline-flex items-center gap-1.5 text-link hover:text-accent-light">
                {label} <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
