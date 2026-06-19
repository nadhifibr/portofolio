import Link from "next/link";

const certifications = [
  {
    id: 1,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "/assets/certification/Belajar Dasar AI.pdf"
  },
  {
    id: 2,
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    date: "2025",
    link: "/assets/certification/Prompt Engineering untuk Software Developer.pdf"
  },
  {
    id: 3,
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    date: "2026",
    link: "/assets/certification/Spec-Driven Development dengan Kiro.pdf"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certifications.map((cert) => (
            <Link 
              key={cert.id} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-foreground/5 rounded-3xl transition-all duration-500 hover:bg-foreground/10 border border-foreground/10 group h-full overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-foreground/5 p-6 md:p-8"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium px-4 py-1.5 bg-background rounded-full text-foreground/80 shadow-sm border border-foreground/5">
                  {cert.date}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-foreground/40 group-hover:text-foreground/80 transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 leading-snug flex-grow transition-colors duration-300 group-hover:text-foreground/80">
                {cert.title}
              </h3>
              
              <h4 className="text-sm text-foreground/60 font-medium mt-auto border-t border-foreground/10 pt-4">
                Issued by {cert.issuer}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
