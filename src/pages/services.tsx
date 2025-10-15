import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaRocket,
  FaReact,
  FaFigma,
} from "react-icons/fa";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified title animation
      gsap.fromTo(
        ".services-title",
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

      // Simplified service cards animation
      const cards = servicesRef.current?.querySelectorAll(".service-card");
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
            stagger: 0.08,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const services: Service[] = [
    {
      icon: <FaCode className="text-5xl text-[#ff6b00]" />,
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with clean code and best practices. Specializing in React ecosystem and TypeScript for scalable solutions.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <FaReact className="text-5xl text-[#ff6b00]" />,
      title: "Single Page Applications",
      description:
        "Creating dynamic SPAs with seamless user experiences, state management, and optimized performance for fast, interactive web apps.",
      skills: ["React", "Angular", "Redux", "React Router"],
    },
    {
      icon: <FaPalette className="text-5xl text-[#ff6b00]" />,
      title: "UI/UX Implementation",
      description:
        "Transforming designs into pixel-perfect, accessible interfaces with attention to detail, animations, and user experience best practices.",
      skills: ["Figma to Code", "CSS Animations", "GSAP", "Responsive Design"],
    },
    {
      icon: <FaMobile className="text-5xl text-[#ff6b00]" />,
      title: "Responsive Design",
      description:
        "Ensuring your application looks stunning and works flawlessly across all devices - from mobile phones to large desktop screens.",
      skills: ["Mobile-First", "Cross-Browser", "Performance", "PWA"],
    },
    {
      icon: <FaFigma className="text-5xl text-[#ff6b00]" />,
      title: "Design Systems",
      description:
        "Building reusable component libraries and maintaining consistent design patterns for scalable and maintainable projects.",
      skills: [
        "Component Libraries",
        "Storybook",
        "Design Tokens",
        "Documentation",
      ],
    },
    {
      icon: <FaRocket className="text-5xl text-[#ff6b00]" />,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed and efficiency with code splitting, lazy loading, and modern best practices.",
      skills: ["Web Vitals", "Code Splitting", "SEO", "Optimization"],
    },
  ];

  return (
    <div
      ref={servicesRef}
      className="min-h-screen bg-[#1a1a1a] pt-32 pb-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="services-title text-5xl font-bold text-white mb-4">
            What I Offer
          </h1>
          <p className="services-title text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive frontend development services to bring your ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-[#2a2a2a] rounded-xl p-8 hover:bg-[#333333] transition-all duration-300 hover:transform hover:scale-105 cursor-pointer border border-transparent hover:border-[#ff6b00]"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff6b00] transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#ff6b00] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Services;
