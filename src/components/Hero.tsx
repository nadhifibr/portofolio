"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/auav.png",
  "/assets/bem.png",
  "/assets/hsil.png",
  "/assets/studentpreneur.png",
];

const roles = [
  "A Software Engineer",
  "A Web Developer",
  "A UI/UX Designer",
  "A Graphic Designer",
  "An Artist"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // Image slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[loopNum % roles.length];
    
    const typingSpeed = 100;
    const deletingSpeed = 50;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentRole) {
      // Pause at the end of typing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Move to the next role
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay with Glass Effect for fading into the background */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/50 to-background/30 backdrop-blur-[3px] pointer-events-none transition-colors duration-300" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 -mt-12">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-foreground drop-shadow-lg transition-colors duration-300">
          Nadhif Ibrahim
        </h1>
        <div className="relative h-10 w-full max-w-2xl mx-auto flex justify-center mt-2">
          <p className="text-xl md:text-2xl text-foreground/90 drop-shadow-md transition-colors duration-300">
            {text}
            <span className="animate-[pulse_1s_infinite]">|</span>
          </p>
        </div>
      </div>
    </div>
  );
}
