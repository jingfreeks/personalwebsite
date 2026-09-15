import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const description =
  "Software developer building modern, scalable web and mobile solutions — React, React Native, Next.js and Supabase — and founder of Dells Software, maker of Tindahan POS.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s · ${site.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} — ${site.role}`, description, url: site.url, siteName: site.name, type: "website", locale: "en_US", images: ["/design/portfolio-design.png"] },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.role}`, description, images: ["/design/portfolio-design.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
