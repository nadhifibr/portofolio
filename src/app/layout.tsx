import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nadhif Ibrahim",
  description: "Portfolio of Nadhif Ibrahim, a Computer Science student at Universitas Indonesia specializing in software engineering, web development, and UI/UX design.",
  keywords: ["Nadhif Ibrahim", "nadhifibr", "Software Engineer", "Web Developer", "UI/UX Designer", "Universitas Indonesia", "Portfolio"],
  authors: [{ name: "Nadhif Ibrahim" }],
  creator: "Nadhif Ibrahim",
  openGraph: {
    title: "Nadhif Ibrahim",
    description: "Portfolio of Nadhif Ibrahim, a Computer Science student at Universitas Indonesia specializing in software engineering, web development, and UI/UX design.",
    url: "https://nadhifibr.site",
    siteName: "Nadhif Ibrahim Portfolio",
    images: [
      {
        url: "/assets/nadhif-jaket.jpg", // Foto yang akan muncul saat link di-share ke WhatsApp/Twitter
        width: 1200,
        height: 630,
        alt: "Nadhif Ibrahim",
      },
    ],
    locale: "en_US",
    type: "website",
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
      </body>
    </html>
  );
}
