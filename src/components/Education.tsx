

const educations = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Universitas Indonesia",
    period: "Aug 2024 - Present",
    description: "Relevant coursework: Programming Foundation, Calculus, Discrete Math, Digital Systems, Linear Algebra, Computer Organization and Architecture, Database, Platform Based Programming, Operating System, Probability and Statistics, Data Structure and Algorithm, AI and Data Science, Software Security, Advance Programming, Human Computer Interaction, and Theory of Computation and Automata.",
    logo: "/assets/education.png"
  }
];

export default function Education() {
  return (
    <section id="education" className="w-full py-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Education</h2>
        
        <div className="relative border-l-2 border-foreground/10 ml-3 md:ml-4 space-y-12 pb-4 w-full">
          {educations.map((edu) => (
            <div key={edu.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-foreground rounded-full -left-[9px] top-1.5 ring-4 ring-background transition-transform duration-300 group-hover:scale-150" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-semibold transition-colors duration-300 group-hover:text-foreground/70">
                  {edu.degree}
                </h3>
                <span className="text-sm font-medium px-4 py-1.5 bg-foreground/5 rounded-full w-fit text-foreground/80">
                  {edu.period}
                </span>
              </div>
              
              <h4 className="text-lg text-foreground/60 mb-4">{edu.institution}</h4>
              
              <p className="text-foreground/80 leading-relaxed max-w-3xl text-left">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
