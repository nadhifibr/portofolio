"use client";

import Image from "next/image";
import { useState } from "react";

const awards = [
  {
    id: 1,
    title: "Finalist Harvard Health Systems Innovation Lab (HSIL) Hackathon Bandung Hub 2026",
    issuer: "Harvard University & AISX Institut Teknologi Bandung",
    date: "Apr 2026",
    images: ["/assets/awards/hsil.png", "/assets/awards/hsil2.jpg"]
  },
  {
    id: 2,
    title: "Semi-Finalist (Top 14) EURECA 2026 Business Plan Competition",
    issuer: "Universitas Prasetiya Mulya",
    date: "Apr 2026",
    images: ["/assets/awards/eureca.png", "/assets/awards/eureca2.jpg"]
  },
  {
    id: 3,
    title: "Finalist UI Studentpreneurs Business Model Canvas Competition",
    issuer: "UI Studentpreneurs",
    date: "Feb 2026",
    images: ["/assets/awards/studentpreneur.png", "/assets/awards/studentpreneur2.jpg"]
  },
  {
    id: 4,
    title: "Semi-Finalist (Top 11) AIPRENEUR AI Business Model Canvas Competition",
    issuer: "AIPRENEUR by College Copilot & Competition Realms",
    date: "Dec 2025",
    images: ["/assets/awards/aipreneur.png"]
  }
];

function AwardCard({ award }: { award: typeof awards[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? award.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === award.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col bg-foreground/5 rounded-3xl transition-all duration-500 hover:bg-foreground/10 border border-foreground/10 group h-full overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/5">
      
      {/* Image Carousel */}
      {award.images && award.images.length > 0 && (
        <div className="relative w-full h-48 md:h-64 overflow-hidden bg-foreground/10 shrink-0 border-b border-foreground/10 group/carousel">
          <Image 
            src={award.images[currentImageIndex]} 
            alt={award.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          {/* Subtle inner overlay that darkens slightly on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover/carousel:bg-black/20 transition-colors duration-500 pointer-events-none" />
          
          {/* Navigation Arrows */}
          {award.images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
              
              {/* Dots Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {award.images.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Text Content */}
      <div className="flex flex-col p-6 md:p-8 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-medium px-4 py-1.5 bg-background rounded-full text-foreground/80 shadow-sm border border-foreground/5">
            {award.date}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold mb-6 leading-snug flex-grow transition-colors duration-300 group-hover:text-foreground/80">
          {award.title}
        </h3>
        
        <h4 className="text-sm md:text-base text-foreground/60 font-medium mt-auto border-t border-foreground/10 pt-4">
          Issued by {award.issuer}
        </h4>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="w-full py-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
