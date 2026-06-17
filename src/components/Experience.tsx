const experiences = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "Tech Company",
    period: "Jun 2025 - Present",
    description: "Developing scalable web applications using React, Next.js, and Tailwind CSS. Collaborating with cross-functional teams to deliver high-quality software solutions and improving system performance."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Creative Agency",
    period: "Jan 2025 - May 2025",
    description: "Designed intuitive user interfaces for mobile and web platforms. Conducted user research, created wireframes, prototypes, and high-fidelity mockups that increased user engagement."
  },
  {
    id: 3,
    role: "Web Developer Freelance",
    company: "Self-employed",
    period: "2024 - 2025",
    description: "Built custom responsive websites for local businesses. Managed the full development lifecycle from client consultation and UI design to deployment and ongoing maintenance."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Experience</h2>
        
        <div className="relative border-l-2 border-foreground/10 ml-3 md:ml-4 space-y-12 pb-4 w-full">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-foreground rounded-full -left-[9px] top-1.5 ring-4 ring-background transition-transform duration-300 group-hover:scale-150" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-semibold transition-colors duration-300 group-hover:text-foreground/70">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium px-4 py-1.5 bg-foreground/5 rounded-full w-fit text-foreground/80">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg text-foreground/60 mb-4">{exp.company}</h4>
              
              <p className="text-foreground/80 leading-relaxed max-w-3xl text-left">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
