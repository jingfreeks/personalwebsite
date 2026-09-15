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
      "Shipped to production as the company's primary customer-facing app.",
    nda: true,
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
      "Delivered as part of a production release for a regulated financial institution.",
    nda: true,
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
      "Shipped as the company's client-facing booking app.",
    nda: true,
    tech: ["React Native", "Localization"],
    src: "/assets/apps/alwasim.jpg",
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
