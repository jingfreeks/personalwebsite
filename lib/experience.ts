export type ExperienceEntry = {
  dates: string;
  title: string;
  company: string;
  location: string;
  description?: string;
  summary?: boolean;
};

// Source: Lyndell's resume (roles, month-level dates and responsibilities) and
// the Dells Software repositories for the current role.
export const experience: ExperienceEntry[] = [
  {
    dates: "2024 — Present",
    title: "Founder / Full Stack Developer",
    company: "Dells Software",
    location: "Davao City · Remote",
    description:
      "Building business systems for Filipino small retailers — Tindahan POS, Inventory Management and Accounting — plus the Dells Farm web platform, on React, Vite, Expo and Supabase.",
  },
  {
    dates: "Jan 2024 — Jul 2024",
    title: "Lead Developer",
    company: "MyShed Company",
    location: "Davao City",
    description:
      "Led web application development in React with Context API and React Query and a shared UI library; designed MySQL structures, defined REST API contracts with backend engineers, and oversaw unit testing and coverage with Jest.",
  },
  {
    dates: "Dec 2022 — Jul 2023",
    title: "Software Engineer",
    company: "Fixlers Company",
    location: "Spring Valley, NY · Remote",
    description:
      "Built and maintained React Native features — reusable components, navigation flows and Redux state — for a US client; coordinated endpoint design and verification with backend developers.",
  },
  {
    dates: "Feb 2022 — Nov 2022",
    title: "App Developer",
    company: "AK Launch Co.",
    location: "Passaic, NJ · Remote",
    description:
      "Cross-platform React Native features released on Android and iOS; set up Firebase push notifications and phone authentication for a US-based engineering team.",
  },
  {
    dates: "Nov 2020 — Mar 2022",
    title: "Software Engineer",
    company: "Yondu Inc.",
    location: "Taguig City",
    description:
      "Developed a mobile banking application in an Agile team, contributing core features with secure, reliable delivery. Recognized as a 2021 Team Awardee.",
  },
  {
    dates: "May 2020 — Nov 2020",
    title: "React Native Developer",
    company: "Al Wasim Information Technology",
    location: "Riyadh, Saudi Arabia",
    description:
      "React Native features for enterprise clients in the Saudi market; Firebase phone authentication and push notifications, plus real-time features with Socket.io and WebRTC (Agora.io).",
  },
  {
    dates: "Aug 2017 — Oct 2018",
    title: "IT Head / Backend Developer",
    company: "BinhiMedfi Inc.",
    location: "Cagayan de Oro City",
    description:
      "Led the company's IT function — backend systems, infrastructure, vendor coordination and day-to-day operations.",
  },
  {
    dates: "2008 — 2020",
    title:
      "Earlier roles: Associate Web Developer at Fligno Softwares (2019–2020), System Developer at PRL BPO (2018–2019), SEO Specialist at Thinklogic (2016–2017), Computer Programmer at Sadeem Harafi, Saudi Arabia (2012–2016), Freelance SEO Contractor on oDesk (2010–2012), and Junior Programmer at Syntactics (2008–2012, 2009 Employee of the Year).",
    company: "",
    location: "",
    summary: true,
  },
];

// Condensed, resume-verified timeline for the home page (full detail is in the
// resume PDF and the `experience` list above).
export type TimelineEntry = { dates: string; company: string; role: string; text: string };
export const timeline: TimelineEntry[] = [
  {
    dates: "2024 — Present",
    company: "Dells Software (Founder / Developer)",
    role: "Full Stack Developer",
    text: "Developing business systems (POS, Inventory, Accounting, Farm Management) for Filipino businesses.",
  },
  {
    dates: "2020 — 2024",
    company: "Remote / Contract — MyShed, Fixlers, AK Launch, Yondu, Al Wasim",
    role: "React Native / ReactJS Developer",
    text: "Worked with local and international clients (PH, US, Saudi Arabia) on web and mobile applications.",
  },
  {
    dates: "2017 — 2020",
    company: "BinhiMedfi, PRL BPO, Fligno Softwares",
    role: "IT Head / Backend & Web Developer",
    text: "Led IT operations and built backend systems and web applications for local companies.",
  },
  {
    dates: "2008 — 2017",
    company: "Syntactics, Sadeem Harafi (KSA), Thinklogic",
    role: "Junior Programmer → Computer Programmer",
    text: "Started as a junior programmer (2009 Employee of the Year), then programmed abroad and worked in SEO.",
  },
];
