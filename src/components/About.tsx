import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full pt-32 pb-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Text Content */}
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed text-left">
            <p>
              Hi, I'm Nadhif, a Computer Science student at Universitas Indonesia with an interest in software engineering, web development, and emerging technologies.
            </p>
            <p>
              I enjoy building applications, exploring how systems work, and turning ideas into practical solutions. Throughout my journey, I have worked on various projects involving web development, mobile development, and AI, while continuously improving my technical and problem-solving skills.
            </p>
            <p>
              Beyond coding, I also enjoy exploring UI/UX and design to create experiences that are not only functional but also user-friendly. I am always looking for opportunities to learn, collaborate, and build impactful projects.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative aspect-square w-full max-w-md mx-auto lg:mr-0 lg:ml-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-foreground/10 hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 group">
            <Image 
              src="/assets/nadhif-jaket.jpg" 
              alt="Nadhif Ibrahim" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
