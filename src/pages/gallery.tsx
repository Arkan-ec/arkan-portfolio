import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth GSAP animations, dynamic routing, and a clean, professional design showcasing my work and skills.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "GSAP"],
    image: "/portfolio-preview.jpg",
    liveLink: "http://localhost:3000",
    githubLink: "https://github.com/Arkan-ec/arkan-portfolio",
    featured: true,
  },
  {
    id: 2,
    title: "Next.js E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, checkout process, and order confirmation. Built with Next.js for optimal performance and SEO. Includes responsive design, smooth animations, and state management.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
    ],
    image: "/ecommerce-preview.jpg",
    liveLink: "http://localhost:3001",
    githubLink: "https://github.com/Arkan-ec/nextjs-ecommerce",
    featured: true,
  },
  {
    id: 3,
    title: "Angular Social Media Dashboard",
    description:
      "A modern social media platform featuring posts, stories, notifications, and user profiles. Built with Angular standalone components, showcasing advanced TypeScript patterns, RxJS for state management, and modern UI/UX design principles.",
    technologies: [
      "Angular 18",
      "TypeScript",
      "RxJS",
      "Tailwind CSS",
      "Signals",
    ],
    image: "/taskmanager-preview.jpg",
    liveLink: "http://localhost:4200",
    githubLink: "https://github.com/Arkan-ec/angular-task-manager",
    featured: true,
  },
];

const Gallery = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified title animation
      gsap.fromTo(
        ".gallery-title",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      // Simplified project cards animation
      const cards = galleryRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={galleryRef}
      className="min-h-screen bg-[#1a1a1a] pt-32 pb-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="gallery-title text-5xl font-bold text-white mb-4">
            Featured Projects
          </h1>
          <p className="gallery-title text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web
            development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-[#2a2a2a] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-transparent hover:border-[#ff6b00]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-[#ff6b00] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl text-[#ff6b00] mb-4">
                      {project.id === 1 && "💼"}
                      {project.id === 2 && "🛒"}
                      {project.id === 3 && "📱"}
                    </div>
                    <p className="text-gray-500 text-sm">
                      Live Project Screenshot
                    </p>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 bg-[#ff6b00] bg-opacity-80 transition-opacity duration-300 flex items-center justify-center ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="space-x-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-white text-[#ff6b00] rounded-full font-medium hover:bg-opacity-90 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1a1a1a] text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#ff6b00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ff8533] transition-all hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Gallery;
