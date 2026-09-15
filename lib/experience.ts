export type ExperienceEntry = {
  dates: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  summary?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    dates: "2024 — Present",
    title: "Founder / Full Stack Developer",
    company: "Dells Software",
    location: "Davao City · Remote",
    description:
      "Building business systems for Filipino small retailers — Tindahan POS, Inventory and Accounting — and the Dells Farm web platform.",
  },
  { dates: "2024", title: "Lead Developer", company: "MyShed Company", location: "Davao City" },
  { dates: "2022 — 2023", title: "Software Engineer", company: "Fixlers Company", location: "Spring Valley, NY" },
  { dates: "2022", title: "App Developer", company: "AKLaunch Co.", location: "Passaic, NJ" },
  { dates: "2020 — 2022", title: "Software Engineer", company: "Yondu Inc.", location: "Taguig City" },
  { dates: "2020", title: "React Native Developer", company: "Al Wasim Information Technology", location: "Riyadh, Saudi Arabia" },
  { dates: "2019 — 2020", title: "Associate Web Developer", company: "Fligno Softwares Inc.", location: "Cagayan de Oro City" },
  { dates: "2018 — 2019", title: "System Developer", company: "PRL BPO Technology", location: "Davao City" },
  { dates: "2017 — 2018", title: "IT Head / Backend Developer", company: "BinhiMedfi Inc.", location: "Cagayan de Oro City" },
  { dates: "2016 — 2017", title: "SEO Specialist", company: "Thinklogic Marketing Inc.", location: "Cagayan de Oro City" },
  {
    dates: "2008 — 2016",
    title: "Programmer & web developer roles in the Philippines and Saudi Arabia",
    company: "Syntactics, Sadeem/Al-Harafi, oDesk",
    location: "",
    summary: true,
  },
];
