import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified title animation
      gsap.fromTo(
        ".about-title",
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

      // Simplified profile image animation
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Simplified content section animation
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

      // Simplified skills animation
      if (skillsRef.current) {
        const skillTags = skillsRef.current.querySelectorAll(".skill-tag");
        gsap.fromTo(
          skillTags,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
            stagger: 0.03,
            delay: 0.5,
            ease: "power2.out",
          }
        );
      }
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  // Simplified image hover animation
  useEffect(() => {
    if (imageRef.current) {
      if (isHovered) {
        gsap.to(imageRef.current, {
          scale: 1.03,
          duration: 0.2,
          ease: "power2.out",
        });
      } else {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }
  }, [isHovered]);

  // Read more animation
  useEffect(() => {
    if (showMore) {
      gsap.to(".read-more-content", {
        maxHeight: 500,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(".read-more-content", {
        maxHeight: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [showMore]);

  return (
    <div
      ref={aboutRef}
      className="min-h-screen bg-[#1a1a1a] pt-32 pb-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex justify-center">
            <div
              ref={imageRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                {/* Glowing ring animation */}
                <div className="absolute inset-0 rounded-full animate-glow">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff8533] blur-lg opacity-70 animate-spin-slow"></div>
                </div>

                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#ff6b00] relative z-10 bg-[#1a1a1a]">
                  <img
                    src="/arkan-profile.jpg"
                    alt="Arkan"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="md:w-2/3">
            <h1 className="about-title text-5xl font-bold text-white mb-8">
              About Me
            </h1>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">
                  Frontend Developer & Problem Solver
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed text-lg">
                  Hi, I'm{" "}
                  <span className="text-white font-semibold">
                    Arkan Aldulaimi
                  </span>
                  , a passionate Frontend Developer with a strong foundation in
                  modern web technologies. I specialize in building responsive,
                  user-centric web applications that combine clean code with
                  exceptional user experiences.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My journey in web development has been driven by curiosity and
                  a genuine love for creating digital solutions that make a
                  difference. I'm constantly learning and adapting to new
                  technologies, always striving to write better, more efficient
                  code.
                </p>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-[#ff6b00] hover:text-[#ff8533] transition-colors mb-4 flex items-center gap-2"
                >
                  {showMore ? "Read Less" : "Read More"}
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      showMore ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="read-more-content overflow-hidden">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white mt-4">
                      What Drives Me
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I'm passionate about the React ecosystem and modern CSS
                      frameworks like Tailwind CSS. There's something incredibly
                      satisfying about transforming a design concept into a
                      fully functional, beautiful interface. I love the
                      challenge of solving complex UI problems and optimizing
                      for both performance and user experience.
                    </p>
                    <h3 className="text-xl font-semibold text-white mt-4">
                      Professional Approach
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I thrive in collaborative environments and bring
                      experience working across different industries. Whether
                      it's working on-site, hybrid, or remote, I'm adaptable and
                      committed to delivering high-quality work. I'm comfortable
                      with fast-paced environments, agile methodologies, and
                      always eager to learn new tools and technologies.
                    </p>
                    <h3 className="text-xl font-semibold text-white mt-4">
                      Beyond Code
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      When I'm not coding, I'm exploring the latest web
                      development trends, contributing to open-source projects,
                      or experimenting with new animation libraries. I believe
                      in continuous improvement and staying ahead in this
                      ever-evolving field.
                    </p>
                  </div>
                </div>
              </div>
              <div ref={skillsRef}>
                <h2 className="text-2xl font-bold text-[#ff6b00] mb-4">
                  Technical Skills & Expertise
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Frontend Development
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        React
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Angular
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Next.js
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Tailwind CSS
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        HTML5
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        CSS3
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Backend & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Express.js
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Git
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        VS Code
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        npm
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      Design & Methodology
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        UI Design
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        UX Design
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Figma
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Agile Methodology
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Scrum
                      </span>
                      <span className="skill-tag px-3 py-1 bg-[#2a2a2a] text-white rounded-full text-sm">
                        Responsive Design
                      </span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 p-6 bg-[#2a2a2a] rounded-xl border border-[#ff6b00]/20">
                    <h3 className="text-white font-semibold mb-3 text-lg">
                      Looking for opportunities
                    </h3>
                    <p className="text-gray-400 mb-4">
                      I'm currently seeking internship or junior developer
                      positions where I can contribute my skills and continue
                      growing as a developer.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-[#ff6b00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ff8533] transition-all hover:scale-105"
                    >
                      Let's Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="gradient-bg absolute top-0 right-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
      <div className="gradient-bg absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default About;
