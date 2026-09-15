import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = `${site.name} — Full Stack Web & Mobile Developer`;
const description =
  "Davao City software developer building web and mobile apps with React, React Native, Next.js and Supabase. Founder of Dells Software. Open to remote work.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description,
  keywords: [
    "Lyndell Dobluis",
    "software developer Philippines",
    "full stack developer Davao City",
    "React developer",
    "React Native developer",
    "Next.js developer",
    "Supabase",
    "POS system developer",
    "Dells Software",
    "Tindahan POS",
    "freelance developer Philippines",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#030a12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <JsonLd />
        {/* Vercel serves the analytics script; skip it for local/CI `next start` builds */}
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
