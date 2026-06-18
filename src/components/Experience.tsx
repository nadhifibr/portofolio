import Image from "next/image";

const experiences = [
  {
    id: 1,
    role: "Developer Staff",
    company: "BEM UI",
    period: "2026 - Present",
    description: [
      "Maintained and supported an integrated internal web-based information system.",
      "Developed an open recruitment web system for BEM UI work programs and external university initiatives.",
      "Collaborated with team members in implementing and improving system features."
    ],
    logo: ""
  },
  {
    id: 2,
    role: "Programming Vice Lead",
    company: "FW AUAV UI",
    period: "2025 - Present",
    description: [
      "Conducted UAV mission planning and autonomous flight configuration using Mission Planner.",
      "Explored aerial mapping and photogrammetry workflows using Agisoft Metashape and WebODM.",
      "Implemented object detection using YOLO for computer vision applications.",
      "Managed Raspberry Pi integration, including Tailscale networking and video streaming setup."
    ],
    logo: ""
  },
  {
    id: 3,
    role: "Visual Design Staff",
    company: "COMPFEST",
    period: "2025",
    description: [
      "Designed promotional visual assets for social media and event publications.",
      "Created merchandise designs tailored to event-related needs."
    ],
    logo: ""
  },
  {
    id: 4,
    role: "Visual Design Expert Staff",
    company: "Open House Fasilkom UI",
    period: "2025",
    description: [
      "Designed promotional visual assets for social media and event publications.",
      "Created merchandise designs tailored to event-related needs."
    ],
    logo: ""
  },
  {
    id: 5,
    role: "Education Mentor & Marketing Communication",
    company: "Dasar-Dasar Pemrograman UI",
    period: "2025",
    description: [
      "Instructed and mentored freshmen in Python programming fundamentals.",
      "Managed social media marketing campaigns to promote events.",
      "Assisted in the sales of event merchandise."
    ],
    logo: ""
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
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-4">
                <div className="flex items-center gap-4">
                  {exp.logo && (
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden bg-foreground/5 shrink-0 border border-foreground/10 shadow-sm">
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain p-2" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold transition-colors duration-300 group-hover:text-foreground/70 mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-foreground/60">{exp.company}</h4>
                  </div>
                </div>
                <span className="text-sm font-medium px-4 py-1.5 bg-foreground/5 rounded-full w-fit text-foreground/80 whitespace-nowrap mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <ul className="text-foreground/80 leading-relaxed max-w-3xl text-left list-disc list-outside ml-4 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
