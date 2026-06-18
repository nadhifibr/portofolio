import Image from "next/image";

const skills = [
  { name: "Python", src: "/assets/skills/python.png" },
  { name: "Java", src: "/assets/skills/java.png" },
  { name: "HTML", src: "/assets/skills/html.png" },
  { name: "CSS", src: "/assets/skills/CSS.png" },
  { name: "JavaScript", src: "/assets/skills/JavaScript.png" },
  { name: "TypeScript", src: "/assets/skills/TypeScript.png" },
  { name: "PostgreSQL", src: "/assets/skills/PostgreSQL.png" },
  { name: "C++", src: "/assets/skills/C++.png" },
  { name: "PHP", src: "/assets/skills/PHP.svg" },
  { name: "Spring Boot", src: "/assets/skills/Spring Boot.png" },
  { name: "ExpressJS", src: "/assets/skills/ExpressJS.png" },
  { name: "NextJS", src: "/assets/skills/NextJS.png" },
  { name: "Laravel", src: "/assets/skills/Laravel.png" },
  { name: "Figma", src: "/assets/skills/Figma.svg" },
  { name: "Canva", src: "/assets/skills/Canva.jpg" },
  { name: "Postman", src: "/assets/skills/Postman.png" }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 bg-background text-foreground transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-start mb-12">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Skills & Tools</h2>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group py-4">
        {/* Gradient Fades for left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee space-x-4 md:space-x-8 group-hover:[animation-play-state:paused]">
          {/* We duplicate the skills array to create a seamless infinite loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-foreground/5 rounded-3xl border border-foreground/10 shadow-sm hover:scale-105 hover:bg-foreground/10 hover:shadow-md transition-all duration-300 cursor-default group/item overflow-hidden"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover/item:-translate-y-3 group-hover/item:scale-110">
                <Image 
                  src={skill.src} 
                  alt={skill.name} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-y-0">
                <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full text-foreground/90 shadow-sm border border-foreground/5">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
