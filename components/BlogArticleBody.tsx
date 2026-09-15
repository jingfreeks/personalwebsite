import Link from "next/link";
import type { BlogBlock, BlogRun } from "@/lib/blog";

function Runs({ runs }: { runs: BlogRun[] }) {
  return (
    <>
      {runs.map((run, i) =>
        typeof run === "string" ? (
          <span key={i}>{run}</span>
        ) : run.external ? (
          <a key={i} href={run.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-link hover:text-accent-light">
            {run.text}
          </a>
        ) : (
          <Link key={i} href={run.href} className="font-semibold text-link hover:text-accent-light">
            {run.text}
          </Link>
        ),
      )}
    </>
  );
}

/** Renders a post's typed block content with the site's existing article typography. */
export default function BlogArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mt-8 space-y-4 text-[1rem] leading-relaxed text-primary/90">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i}>
                <Runs runs={block.runs} />
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="font-heading !mt-10 text-[1.35rem] font-bold text-primary">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="font-heading !mt-6 text-[1.05rem] font-bold text-primary">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5">
                {block.items.map((runs, j) => (
                  <li key={j}>
                    <Runs runs={runs} />
                  </li>
                ))}
              </ul>
            );
          case "flow":
            return (
              <div key={i} className="flex flex-wrap items-center gap-2 py-2 text-[0.85rem] font-medium text-secondary">
                {block.steps.map((step, j) => (
                  <span key={j} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-[#0b1a2e]/80 px-3 py-1.5 text-primary">{step}</span>
                    {j < block.steps.length - 1 && <span aria-hidden="true" className="text-accent-light">&rarr;</span>}
                  </span>
                ))}
              </div>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full min-w-[24rem] text-left text-[0.88rem]">
                  <thead>
                    <tr className="bg-[#0e2140]">
                      {block.headers.map((h) => (
                        <th key={h} scope="col" className="px-4 py-2.5 font-semibold text-primary">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-white/10 bg-[#0b1a2e]/80">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-2.5 text-primary/85">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <div key={i} className="rounded-xl border border-accent/30 bg-accent/10 p-4">
                {block.title && <p className="font-heading text-[0.95rem] font-bold text-primary">{block.title}</p>}
                <p className="mt-1 text-primary/90">
                  <Runs runs={block.runs} />
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
