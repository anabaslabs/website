import type { Metadata } from "next";
import { Fredoka, Lexend, Lora, Ysabeau_Infant } from "next/font/google";
import TailwindIndicator from "@/components/TwIndicator";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ysabeauInfant = Ysabeau_Infant({
  variable: "--font-ysabeau-infant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anabaslabs.com"),
  title: "Anabas Labs",
  description:
    "Empowering modern enterprises with scalable software solutions. Your Vision, Built with Precision.",
  keywords: [
    "Anabas Labs",
    "Empowering modern enterprises with scalable software solutions",
    "Your Vision, Built with Precision",
    "Build Softwares",
    "Build Systems",
    "Build Websites",
    "Build Web Apps",
    "Build Mobile Apps",
    "Build AI Agents",
  ],
  robots: "index, follow",
  creator: "Anabas Labs",
  authors: [{ name: "Anabas Labs", url: "https://anabaslabs.com" }],

  openGraph: {
    title: "Anabas Labs",
    description:
      "Empowering modern enterprises with scalable software solutions. Your Vision, Built with Precision.",
    url: "https://anabaslabs.com",
    siteName: "Anabas Labs",
    images: [
      {
        url: "https://anabaslabs.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Anabas Labs",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anabas Labs",
    description:
      "Empowering modern enterprises with scalable software solutions. Your Vision, Built with Precision.",
    images: ["https://anabaslabs.com/banner.png"],
    creator: "@anabaslabs",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  alternates: {
    canonical: "https://anabaslabs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${lexend.variable} ${lora.variable} ${ysabeauInfant.variable} antialiased`}
      >
        {children}
        <TailwindIndicator />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
