import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

const hanken = localFont({ src: "./fonts/hanken-grotesk-latin-wght-normal.woff2", variable: "--font-hanken", display: "swap", weight: "100 900" });
const brass = localFont({ src: "./fonts/BrassMono-Regular.ttf", variable: "--font-brass", display: "swap", weight: "400" });

export const viewport: Viewport = { viewportFit: "cover", width: "device-width", initialScale: 1 };
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Portfolio`, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} — Portfolio`, description: site.description, url: "/", type: "website", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: `${site.name} — Portfolio`, description: site.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${brass.variable}`}>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen">{children}</body>
    </html>
  );
}
