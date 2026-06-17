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
  description: "nadhifibr",
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
