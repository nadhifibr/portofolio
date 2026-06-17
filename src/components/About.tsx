export default function About() {
  return (
    <section id="about" className="w-full py-24 px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">About Me</h2>
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
      </div>
    </section>
  );
}
