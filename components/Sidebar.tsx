import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Sidebar() {
  return (
    <nav className="flex w-full shrink-0 flex-col gap-7 bg-sidebar px-5 py-8 md:w-[220px]">
      <div className="flex items-center gap-2.5">
        <Image
          src="/assets/portrait.jpg"
          alt="Portrait of Lyndell T. Dobluis"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-accent object-cover"
        />
        <div className="text-[13px] font-semibold leading-tight">
          Lyndell
          <br />
          Dobluis
        </div>
      </div>

      <div className="flex flex-col gap-1 text-[13px]">
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className={`plain rounded-md px-2.5 py-2.5 ${
              i === 0 ? "bg-panel text-primary" : "text-muted2"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-1.5 text-xs">
        <a
          href="https://www.linkedin.com/in/lyndelldobluis"
          target="_blank"
          rel="noopener noreferrer"
          className="plain text-muted2"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://www.facebook.com/lyndell.dobluis"
          target="_blank"
          rel="noopener noreferrer"
          className="plain text-muted2"
        >
          Facebook ↗
        </a>
      </div>
    </nav>
  );
}
