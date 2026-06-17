"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Website", "Mobile App", "UI/UX", "Game"];

// Dummy data for now. You can replace this later when you provide the 8 projects.
const initialProjects = [
  { id: 1, title: "Project One", category: "Website", image: "/assets/auav.png" },
  { id: 2, title: "Project Two", category: "Mobile App", image: "/assets/bem.png" },
  { id: 3, title: "Project Three", category: "UI/UX", image: "/assets/hsil.png" },
  { id: 4, title: "Project Four", category: "Game", image: "/assets/studentpreneur.png" },
  { id: 5, title: "Project Five", category: "Website", image: "/assets/auav.png" },
  { id: 6, title: "Project Six", category: "Mobile App", image: "/assets/bem.png" },
  { id: 7, title: "Project Seven", category: "UI/UX", image: "/assets/hsil.png" },
  { id: 8, title: "Project Eight", category: "Game", image: "/assets/studentpreneur.png" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category === activeCategory);

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
              className="group relative rounded-2xl overflow-hidden bg-foreground/5 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Image 
                src={project.image} 
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
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State if filter returns nothing (just in case) */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-foreground/60 py-12">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
