const companies = [
  "Yondu Inc.",
  "Fixlers Company",
  "Al Wasim Information Technology",
  "BinhiMedfi Inc.",
  "Fligno Softwares Inc.",
  "MyShed Company",
];

export default function ProofStrip() {
  return (
    <div className="mb-16 border-y border-divider py-5">
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
        Worked with
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-secondary">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </div>
  );
}
