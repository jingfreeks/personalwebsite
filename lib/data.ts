export const positioning =
  "I build fullstack products across web and mobile — React, React Native, and AI-assisted engineering workflows — shipped end-to-end for teams who need a senior engineer without the full-time headcount.";

export const proofLine =
  "Shipped React Native apps for a regional bank (Metrobank), a US home-services startup, and a Saudi consultancy.";

export const timezoneNote =
  "Davao City, Philippines (GMT+8) — overlapping mornings with US ET, full workdays with EU and Gulf teams.";

export const services = [
  {
    name: "React Native App Builds",
    scope:
      "Cross-platform iOS/Android apps, MVP to production, including App Store & Play Store release.",
    timeline: "6–10 weeks",
  },
  {
    name: "Web App Development (React)",
    scope:
      "Fullstack React web apps — client dashboards and internal tools, wired to your existing backend or built from scratch.",
    timeline: "4–8 weeks",
  },
  {
    name: "Firebase & Real-Time Backend Integration",
    scope:
      "Auth, REST API integration, and real-time features (WebRTC/Socket.io) wired into an existing or new app.",
    timeline: "2–4 weeks",
  },
  {
    name: "Fractional Senior Engineer",
    scope:
      "Ongoing or retainer support — code review, leading dev efforts, and AI-assisted delivery, collaborating directly with your team across time zones.",
    timeline: "Ongoing",
  },
];

export const caseStudies = [
  {
    company: "Fixlers Company",
    title: "Fixlers — Home-Services Booking App",
    problem:
      "Needed a React Native booking app to connect customers with home-service providers, built and shipped by a small remote team.",
    build:
      "Built the app end-to-end as part of the core engineering team — booking flow, provider matching, and state management.",
    result:
      "Shipped to production as the company's primary customer-facing app (usage figures under NDA).",
    tech: ["React Native", "Redux", "Firebase"],
    src: "/assets/apps/fixlers.jpg",
  },
  {
    company: "Yondu Inc.",
    title: "Metrobank Mobile — Banking App",
    problem:
      "A regional bank needed a secure, reliable mobile login and account experience for its retail banking app.",
    build:
      "Worked within Yondu's engineering team on the mobile login and account flows for the Metrobank consumer app.",
    result:
      "Delivered as part of a production release for a regulated financial institution (metrics under NDA).",
    tech: ["React Native", "REST APIs"],
    src: "/assets/apps/yondu-metrobank.jpg",
  },
  {
    company: "Al Wasim Information Technology",
    title: "Consultation App — Arabic-Market Booking",
    problem:
      "Needed a React Native booking app localized for the Arabic market, built while working on-site in Riyadh, Saudi Arabia.",
    build:
      "Built the consultation-booking app end-to-end, including full Arabic RTL support and localization.",
    result:
      "Shipped as the company's client-facing booking app (metrics under NDA).",
    tech: ["React Native", "Localization"],
    src: "/assets/apps/alwasim.jpg",
  },
];

export const techStack = [
  'React Native', 'React', 'TypeScript', 'JavaScript', 'Redux', 'Redux Saga',
  'Redux Toolkit', 'React Navigation', 'Hooks', 'REST APIs', 'Socket.IO',
  'Agora.io (WebRTC)', 'Firebase', 'MySQL', 'JEST', 'Claude Code (AI-Assisted Development)',
  'Git / GitHub / GitLab / Bitbucket', 'Postman',
  'Visual Studio Code', 'Xcode', 'Android Studio', 'Trello', 'JIRA',
];

type ExperienceEntry = {
  dates: string;
  title: string;
  company: string;
  location: string;
  summary?: boolean;
};

export const experience: ExperienceEntry[] = [
  { dates: '2024–Present', title: 'Independent React Native Contractor', company: 'Self-employed', location: 'Remote' },
  { dates: '2024', title: 'Lead Developer', company: 'MyShed Company', location: 'Davao City' },
  { dates: '2022–2023', title: 'Software Engineer', company: 'Fixlers Company', location: 'Spring Valley, NY' },
  { dates: '2022', title: 'App Developer', company: 'AKLaunch Co.', location: 'Passaic, NJ' },
  { dates: '2020–2022', title: 'Software Engineer', company: 'Yondu Inc.', location: 'Taguig City' },
  { dates: '2020', title: 'React Native Developer', company: 'Al Wasim Information Technology', location: 'Riyadh, Saudi Arabia' },
  { dates: '2019–2020', title: 'Associate Web Developer', company: 'Fligno Softwares Inc.', location: 'Cagayan de Oro City' },
  { dates: '2018–2019', title: 'System Developer', company: 'PRL BPO Technology', location: 'Davao City' },
  { dates: '2017–2018', title: 'IT Head / Backend Developer', company: 'BinhiMedfi Inc.', location: 'Cagayan de Oro City' },
  { dates: '2016–2017', title: 'SEO Specialist', company: 'Thinklogic Marketing Inc.', location: 'Cagayan de Oro City' },
  {
    dates: '2008–2016',
    title: 'Programmer & web developer roles in the Philippines and Saudi Arabia',
    company: 'Syntactics, Sadeem/Al-Harafi, oDesk',
    location: '',
    summary: true,
  },
];

type RecognitionEntry = {
  year: string;
  text: string;
  link?: string;
};

export const recognition: RecognitionEntry[] = [
  { year: '2009', text: 'Employee of the Year — Syntactics Inc.' },
  {
    year: '2015',
    text: 'Certificate of Appreciation for Outstanding Performance — Sadeem / Al-Harafi Co.',
    link: '/assets/certs/sadeem-appreciation.jpg',
  },
  { year: '2021', text: 'Team Awardee — Yondu Inc.' },
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];
