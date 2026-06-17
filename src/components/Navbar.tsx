"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/50 backdrop-blur-lg py-4 shadow-sm" : "bg-transparent py-6"
    }`}>
      <div className="flex w-full items-center justify-between px-8 max-w-7xl mx-auto">
      <div>
        <Link href="/" className="font-semibold text-lg">
          nadhifibr
        </Link>
      </div>
      <div className="flex items-center gap-8 text-sm font-medium">
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
      </div>
    </nav>
  );
}
