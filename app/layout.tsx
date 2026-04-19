import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { profile } from "./content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const canonicalUrl = new URL("/", siteUrl).href;

const metaDescription =
  profile.tagline ?? profile.summary[0] ?? "Portfolio and selected projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Portfolio | Desko Sekulović",
  description: metaDescription,
  openGraph: {
    title: "Portfolio | Desko Sekulović",
    description: metaDescription,
    images: ["/me.jpg"],
    url: canonicalUrl,
    siteName: "Portfolio | Desko Sekulović",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
