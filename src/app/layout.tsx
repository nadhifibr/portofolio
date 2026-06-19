import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nadhifibr.site"),
  title: {
    default: "Nadhif Ibrahim",
    template: "%s | Nadhif Ibrahim",
  },
  description: "Portfolio of Nadhif Ibrahim (nadhifibr), a Computer Science student at Universitas Indonesia specializing in software engineering, web development, and UI/UX design.",
  keywords: ["Muhammad Nadhif Ibrahim", "Nadhif Ibrahim", "nadhifibr", "Nadhif", "Ibrahim", "Software Engineer", "Web Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer", "Universitas Indonesia", "Portfolio", "Fasilkom UI", "Pacil"],
  authors: [{ name: "Nadhif Ibrahim", url: "https://nadhifibr.site" }],
  creator: "Nadhif Ibrahim",
  alternates: {
    canonical: "https://nadhifibr.site",
  },
  openGraph: {
    title: "Nadhif Ibrahim",
    description: "Portfolio of Nadhif Ibrahim (nadhifibr), a Computer Science student at Universitas Indonesia specializing in software engineering, web development, and UI/UX design.",
    url: "https://nadhifibr.site",
    siteName: "Nadhif Ibrahim Portfolio",
    images: [
      {
        url: "/assets/cover.png", // Foto yang akan muncul saat link di-share ke WhatsApp/Twitter/Line/IG
        width: 1200,
        height: 630,
        alt: "Nadhif Ibrahim",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadhif Ibrahim",
    description: "Portfolio of Nadhif Ibrahim (nadhifibr), a Computer Science student at Universitas Indonesia specializing in software engineering, web development, and UI/UX design.",
    images: ["/assets/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
