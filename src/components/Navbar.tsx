"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled && !isMobileMenuOpen ? "bg-background/50 backdrop-blur-lg py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="relative z-50 flex w-full items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div>
          <Link href="/" className="font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            nadhifibr
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-foreground/70 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-foreground/70 transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-foreground/70 transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="hover:text-foreground/70 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-foreground/70 transition-colors">
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 ml-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-md animate-in fade-in duration-300">
          <Link href="#about" className="text-3xl font-medium hover:text-foreground/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="#projects" className="text-3xl font-medium hover:text-foreground/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#experience" className="text-3xl font-medium hover:text-foreground/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Experience
          </Link>
          <Link href="#skills" className="text-3xl font-medium hover:text-foreground/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#contact" className="text-3xl font-medium hover:text-foreground/70 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
