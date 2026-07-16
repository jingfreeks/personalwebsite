import Image from "next/image";
import { imageCertificates, pdfCertificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="mb-14">
      <h2 className="mb-1.5 text-[22px] font-bold">Certificates &amp; Awards</h2>
      <p className="mb-[18px] text-[13px] text-muted">
        Certificates of employment and recognition from past companies.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {imageCertificates.map((cert) => (
          <div
            key={cert.title + cert.company}
            className="flex flex-col gap-2 overflow-hidden rounded-[10px] bg-panel p-3.5"
          >
            <a
              href={cert.src}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full overflow-hidden rounded-lg"
              style={{ aspectRatio: 1.294 }}
            >
              <Image
                src={cert.thumb}
                alt={cert.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 220px"
              />
            </a>
            <div className="text-[10px] uppercase tracking-[0.08em] text-accent-light">
              {cert.company}
            </div>
            <div className="text-sm font-semibold">{cert.title}</div>
            <div className="text-xs text-muted">{cert.meta}</div>
            <a
              href={cert.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-link no-underline"
            >
              View certificate &rarr;
            </a>
          </div>
        ))}

        {pdfCertificates.map((cert) => (
          <div
            key={cert.title + cert.company}
            className="flex flex-col gap-2 overflow-hidden rounded-[10px] bg-panel p-3.5"
          >
            <a
              href={cert.src}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-lg bg-sidebar text-xs tracking-[0.08em] text-accent-light no-underline"
              style={{ aspectRatio: 1.294 }}
            >
              PDF
            </a>
            <div className="text-[10px] uppercase tracking-[0.08em] text-accent-light">
              {cert.company}
            </div>
            <div className="text-sm font-semibold">{cert.title}</div>
            <div className="text-xs text-muted">{cert.meta}</div>
            <a
              href={cert.src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-link no-underline"
            >
              View certificate &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
