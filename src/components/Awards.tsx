import Image from "next/image";

const awards = [
  {
    id: 1,
    title: "Finalist Harvard Health Systems Innovation Lab (HSIL) Hackathon Bandung Hub 2026",
    issuer: "Harvard University & AISX Institut Teknologi Bandung",
    date: "Apr 2026",
    logo: "/assets/awards/hsil.png"
  },
  {
    id: 2,
    title: "Semi-Finalist (Top 14) EURECA 2026 Business Plan Competition",
    issuer: "Universitas Prasetiya Mulya",
    date: "Apr 2026",
    logo: "/assets/awards/eureca.png"
  },
  {
    id: 3,
    title: "Finalist UI Studentpreneurs Business Model Canvas Competition",
    issuer: "UI Studentpreneurs",
    date: "Feb 2026",
    logo: "/assets/awards/studentpreneur.png"
  },
  {
    id: 4,
    title: "Semi-Finalist (Top 11) AIPRENEUR AI Business Model Canvas Competition",
    issuer: "AIPRENEUR by College Copilot & Competition Realms",
    date: "Dec 2025",
    logo: "/assets/awards/aipreneur.png"
  }
];

export default function Awards() {
  return (
    <section id="awards" className="w-full py-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Awards</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {awards.map((award) => (
            <div key={award.id} className="flex flex-col bg-foreground/5 rounded-3xl transition-all duration-500 hover:bg-foreground/10 border border-foreground/10 group h-full overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/5">
              
              {/* Cover Image */}
              {award.logo && (
                <div className="relative w-full h-48 md:h-64 overflow-hidden bg-foreground/10 shrink-0 border-b border-foreground/10">
                  <Image 
                    src={award.logo} 
                    alt={award.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Subtle inner overlay that darkens slightly on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
