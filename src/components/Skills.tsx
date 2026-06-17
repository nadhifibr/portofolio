const skills = [
  "React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", 
  "Figma", "UI/UX Design", "Python", "Git", "Framer Motion"
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
        <div className="flex w-max animate-marquee space-x-8 md:space-x-12 group-hover:[animation-play-state:paused]">
          {/* We duplicate the skills array to create a seamless infinite loop */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-8 py-4 bg-foreground/5 rounded-2xl whitespace-nowrap text-xl font-medium border border-foreground/10 shadow-sm hover:scale-105 hover:bg-foreground/10 transition-all duration-300 cursor-default"
            >
              {/* Nanti ganti text ini dengan tag <Image> untuk logo-logo kamu */}
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
