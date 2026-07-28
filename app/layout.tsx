import type { Metadata } from "next";
import { Fjalla_One, Nunito, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: ["400"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lyndell T. Dobluis — Software Developer",
  description:
    "Software engineer with 15+ years of experience across web and mobile development, specializing in React Native applications for cross-platform iOS/Android delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fjallaOne.variable} ${nunito.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
