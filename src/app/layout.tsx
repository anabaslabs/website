import TailwindIndicator from "@/components/TwIndicator";

import type { Metadata } from "next";
import { Fredoka, Lexend, Lora } from "next/font/google";
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

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anabas Labs",
  description:
    "Turning real problems into scalable software. Built publicly, Shipped properly.",
  keywords: ["Anabas Labs"],
  robots: "index, follow",
  creator: "Anabas Labs",
  authors: [{ name: "Anabas Labs", url: "https://anabaslabs.com" }],

  openGraph: {
    title: "Anabas Labs",
    description:
      "Turning real problems into scalable software. Built publicly, Shipped properly.",
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
      "Turning real problems into scalable software. Built publicly, Shipped properly.",
    images: ["https://anabaslabs.com/banner.png"],
    creator: "@anabaslabs",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
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
        className={`${fredoka.variable} ${lexend.variable} ${lora.variable} antialiased`}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
