"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type MediaType = "image" | "video";

interface MediaItem {
  type: MediaType;
  url: string;
}

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: string;
  title: string;
  categories: string[];
  techStack: string;
  description: string;
  bullets: string[];
  links: ProjectLink[];
  coverMedia: string;
  gallery: MediaItem[];
}

const categories = ["All", "Website", "Mobile App", "UI/UX"];

const projectsData: Project[] = [
  {
    id: "seapedia",
    title: "Seapedia",
    categories: ["Website", "Mobile App", "UI/UX"],
    techStack: "Django, Next.js",
    description: "Seapedia is a marine-focused ecommerce platform that offers fishing gear, diving equipment, marine essentials, and ocean lifestyle products. It helps users easily discover and purchase quality products for every ocean adventure.",
    bullets: [
      "Designed the complete UI/UX of the application, ensuring an intuitive and engaging user experience for browsing and purchasing marine-related products.",
      "Developed the Frontend using Next.js to build a highly responsive e-commerce platform with distinct interfaces for web and mobile.",
      "Engineered the Backend architecture with Django, implementing robust product management, catalog display, search filtering, and secure APIs."
    ],
    links: [
      { label: "Backend", url: "https://github.com/nadhifibr/seapedia-backend" },
      { label: "Frontend", url: "https://github.com/nadhifibr/seapedia-frontend" },
      { label: "Deployment", url: "https://seapedia.online" }
    ],
    coverMedia: "/assets/projects/seapedia/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/seapedia/1.png" },
      { type: "image", url: "/assets/projects/seapedia/2.jpg" },
      { type: "image", url: "/assets/projects/seapedia/3.jpg" },
      { type: "image", url: "/assets/projects/seapedia/4.jpg" },
      { type: "image", url: "/assets/projects/seapedia/5.jpg" }
    ]
  },
  {
    id: "mira",
    title: "MIRA",
    categories: ["Website", "Mobile App", "UI/UX"],
    techStack: "Python, Next.js",
    description: "Mira is an AI-based mental health application designed as an interactive chatbot that helps users manage their emotions and thoughts in daily life. It also offers self-help modules, an emergency feature for crisis situations, and access to professional psychologists.",
    bullets: [
      "Developed an AI-based chatbot application to support emotional management and daily self-reflection through conversational interaction.",
      "Implemented the chatbot system using a large language model integration and developed supporting frontend interfaces.",
      "Designed user interface components and application flow to improve user interaction experience."
    ],
    links: [
      { label: "GitHub", url: "https://github.com/nadhifibr/mira" },
      { label: "Figma", url: "https://www.figma.com/design/ay5EdBG4aSWGkDjvSMWfp5/Portfolio?m=auto&t=McTSDGYWmP4ilRzu-1" }
    ],
    coverMedia: "/assets/projects/mira/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/mira/1.png" },
      { type: "image", url: "/assets/projects/mira/MacBook Pro 14_ - 1.png" },
      { type: "video", url: "/assets/projects/mira/Screen Recording 2026-04-11 061718.mp4" },
      { type: "image", url: "/assets/projects/mira/iPhone 16 - 24.svg" },
      { type: "image", url: "/assets/projects/mira/iPhone 16 - 25.png" },
      { type: "image", url: "/assets/projects/mira/iPhone 16 - 26.png" },
      { type: "image", url: "/assets/projects/mira/iPhone 16 - 29.svg" },
      { type: "image", url: "/assets/projects/mira/iPhone 16 - 39.svg" },
      { type: "image", url: "/assets/projects/mira/Login.png" }
    ]
  },
  {
    id: "playserve",
    title: "PlayServe",
    categories: ["Website", "Mobile App"],
    techStack: "Django, Flutter",
    description: "PlayServe is a gamified tennis app that allows users to connect with other players, compete through a ranking system, and track their progress. It also offers community features for users to join and engage with fellow tennis enthusiasts, along with tools like court booking and court reviews, making it easier to manage and enjoy tennis activities in one platform.",
    bullets: [
      "Developed a gamified tennis application that enables users to connect, compete, and track their progress through ranking and community features.",
      "Implemented matchmaking functionality to connect users based on competitive gameplay requirements.",
      "Contributed to user authentication and user management features to support application workflows."
    ],
    links: [
      { label: "Repo Web", url: "https://github.com/C10-2025/playserve" },
      { label: "Repo Mobile", url: "https://github.com/C10-2025/playserve-mobile" }
    ],
    coverMedia: "/assets/projects/playserve/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/playserve/1.png" },
      { type: "video", url: "/assets/projects/playserve/video.mp4" }
    ]
  },
  {
    id: "yomu",
    title: "Yomu",
    categories: ["Website"],
    techStack: "Spring Boot, NextJS, PostgreSQL",
    description: "Yomu is a gamified learning application designed to improve information literacy by encouraging users to read, understand, and evaluate texts more carefully. The application provides reading materials, quizzes, daily missions, achievements, and social features such as clans and leagues to motivate users. Yomu aims to build a habit of critical reading and help users process information accurately while reducing the spread of misinformation.",
    bullets: [
      "Developed a gamified learning platform that encourages users to improve information literacy through reading activities, quizzes, missions, and social features.",
      "Implemented authentication and user management modules using Spring Boot backend services.",
      "Applied software engineering practices including CI/CD pipeline implementation, automated testing, code quality analysis, and cloud deployment using AWS.",
      "Worked with microservice architecture principles and applied clean code practices to improve system maintainability."
    ],
    links: [
      { label: "Repository", url: "https://github.com/orgs/advprog-2026-B14-project/repositories" }
    ],
    coverMedia: "/assets/projects/yomu/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/yomu/1.png" }
    ]
  },
  {
    id: "perpustakaandigital",
    title: "PerpustakaanDigital",
    categories: ["Website"],
    techStack: "Django, NextJS",
    description: "PerpustakaanDigital is a digital library management application designed to provide an organized platform for managing library activities and resources. The application allows users to browse book collections, manage borrowing activities, access digital resources, and handle library operations efficiently. It supports different user roles to ensure that each user can access features based on their responsibilities.",
    bullets: [
      "Developed a digital library management system that supports book management, borrowing workflows, and role-based user access.",
      "Implemented security mechanisms including CSRF protection to improve application security.",
      "Conducted unit testing and security testing through penetration testing practices to identify and mitigate vulnerabilities."
    ],
    links: [
      { label: "GitLab", url: "https://gitlab.cs.ui.ac.id/pkpl26/67-chiikawalovers67/pkpl26_67_chiikawalovers67" }
    ],
    coverMedia: "/assets/projects/perpustakaandigital/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/perpustakaandigital/1.png" }
    ]
  },
  {
    id: "spt",
    title: "SPT",
    categories: ["Website"],
    techStack: "NextJS, Hono, Prisma, PostgreSQL",
    description: "SPT is a digital recruitment management system designed to simplify the open recruitment process for various activities, work programs, and committees under BEM UI. The application integrates the entire recruitment workflow into a structured platform, making the registration process more efficient, organized, and well-documented.",
    bullets: [
      "Developed a recruitment management system for BEM UI to streamline the open recruitment process for events, work programs, and committees.",
      "Implemented full-stack features for event and division management, including frontend interfaces and backend APIs.",
      "Designed and integrated database operations using Prisma and PostgreSQL to support structured recruitment data management."
    ],
    links: [
      { label: "Repository", url: "https://github.com/Badan-Eksekutif-Mahasiswa" }
    ],
    coverMedia: "/assets/projects/spt/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/spt/1.png" },
      { type: "image", url: "/assets/projects/spt/crud.png" }
    ]
  },
  {
    id: "bantuin",
    title: "Bantuin",
    categories: ["Website", "Mobile App", "UI/UX"],
    techStack: "MongoDB, ExpressJS, ReactJS, NodeJS",
    description: "Bantuin is a service marketplace application that allows users to both offer and find help across a wide range of needs. Users can list or hire services freely, with categories such as education, household tasks, and more to make discovery easier.",
    bullets: [
      "Under development"
    ],
    links: [],
    coverMedia: "/assets/projects/bantuin/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/bantuin/1.png" }
    ]
  },
  {
    id: "aknowtome",
    title: "A Know To Me",
    categories: ["UI/UX"],
    techStack: "Figma",
    description: "A Know to Me is an interactive, game-based human anatomy learning application designed to help junior and senior high school students understand complex biological structures. It features 3D visualizations, animated simulations, real-time quizzes, class leaderboards, and profile avatar customization to enhance learning motivation. It also provides a comprehensive dashboard for biology teachers to seamlessly monitor student progress, analyze quiz score distributions, and manage collaborative group sessions.",
    bullets: [
      "Conducted user research and interviews with target students to define user personas and map actionable product requirements via the Requirement Exploration Canvas.",
      "Designed user flows, task analysis, and detailed user journey maps specifically focusing on the educational content delivery system.",
      "Developed wireframes, high-fidelity UI mockups, and clickable prototypes for the interactive anatomical content screens using Figma.",
      "Conducted usability testing sessions with target users to evaluate interaction issues and iterated on user experience enhancements based on user feedback."
    ],
    links: [],
    coverMedia: "/assets/projects/aknowtome/1.png",
    gallery: [
      { type: "image", url: "/assets/projects/aknowtome/1.png" },
      { type: "image", url: "/assets/projects/aknowtome/2.png" },
      { type: "image", url: "/assets/projects/aknowtome/3.png" },
      { type: "image", url: "/assets/projects/aknowtome/4.png" }
    ]
  }
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const activeMedia = project.gallery[activeMediaIndex];

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-[95%] md:w-full max-w-5xl max-h-[90vh] bg-background rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl z-10 animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 lg:top-4 lg:right-4 z-50 p-1.5 lg:p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors backdrop-blur-sm"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col bg-black overflow-hidden shrink-0 lg:shrink h-[35vh] lg:h-auto">
          {/* Active Media Container */}
          <div className="relative flex-1 flex items-center justify-center p-2 lg:p-4 min-h-0">
            {activeMedia.type === "video" ? (
              <video 
                src={activeMedia.url} 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image 
                  src={activeMedia.url} 
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Thumbnails Row */}
          {project.gallery.length > 1 && (
            <div className="flex gap-2 lg:gap-3 overflow-x-auto p-2 lg:p-4 bg-white/5 no-scrollbar border-t border-white/10 shrink-0">
              {project.gallery.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`relative w-16 h-12 md:w-20 md:h-14 lg:w-24 lg:h-16 shrink-0 rounded-lg overflow-hidden transition-all duration-200 border-2 ${
                    activeMediaIndex === idx ? "border-white scale-105 shadow-md" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  {media.type === "video" ? (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-white">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <Image src={media.url} alt="Thumbnail" fill className="object-cover" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-2/5 p-5 md:p-8 flex flex-col flex-1 overflow-y-auto lg:border-l border-t lg:border-t-0 border-foreground/10 min-h-[30vh]">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80">
              {project.categories.join(", ")}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-foreground/60 text-sm md:text-base font-medium">
              {project.techStack}
            </p>
          </div>

          <div className="prose prose-sm md:prose-base dark:prose-invert mb-8 flex-grow">
            <p className="text-foreground/80 leading-relaxed mb-6">
              {project.description}
            </p>
            {project.bullets.length > 0 && (
              <ul className="space-y-2">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-foreground/80">
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Links Section */}
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-foreground/10">
              {project.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-all shadow-sm hover:shadow-md"
                >
                  {link.label}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="w-full py-16 px-4 md:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        <h2 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight">My Projects</h2>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-start gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-foreground text-background shadow-md scale-105" 
                  : "bg-foreground/5 hover:bg-foreground/10 text-foreground/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 w-full">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-foreground/5 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Image 
                src={project.coverMedia} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-xl mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.categories.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-foreground/60 py-12 w-full">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
