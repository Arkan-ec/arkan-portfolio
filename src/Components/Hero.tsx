import { FaGithub, FaLinkedin, FaTiktok, FaBehance } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation sequence with more dynamic movement
      const textChars = textRef.current?.querySelectorAll(".char");
      if (textChars) {
        gsap.fromTo(
          textChars,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: "power2.out",
          }
        );
      }

      // Name animation
      gsap.fromTo(
        ".name",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
          ease: "power2.out",
        }
      );

      // Title animation
      gsap.fromTo(
        ".title",
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

      // Description animation
      gsap.fromTo(
        ".description",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
          ease: "power2.out",
        }
      );

      // Social icons animation
      gsap.fromTo(
        ".social-icon",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.5,
          ease: "back.out(1.5)",
        }
      );

      // Button animation
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.6,
            ease: "power2.out",
          }
        );
      }

      // Image animation
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
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }

      // Background gradient animation
      gsap.fromTo(
        ".gradient-bg",
        {
          opacity: 0,
        },
        {
          opacity: 0.05,
          duration: 1,
          ease: "power2.out",
        }
      );
    }, heroRef);

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

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-[#1a1a1a] flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-white z-10 md:w-1/2">
            <div className="text-5xl md:text-6xl font-bold mb-4">
              <div ref={textRef} className="flex">
                {Array.from("Hello, It's Me").map((char, index) => (
                  <span key={index} className="char inline-block mr-[0.1em]">
                    {char}
                  </span>
                ))}
              </div>
              <span className="name block mt-[0.2em]">Arkan</span>
            </div>
            <h2 className="title text-2xl mb-6">
              I'm a <span className="text-[#ff6b00]">Frontend Developer</span>
            </h2>
            <p className="description text-gray-300 mb-8 max-w-lg leading-relaxed">
              Passionate about crafting exceptional digital experiences through
              clean code and modern web technologies. Specializing in React,
              TypeScript, and responsive design.
            </p>

            {/* Social Media Icons */}
            <div ref={socialRef} className="flex space-x-4 mb-8">
              <a
                href="https://github.com/Arkan-ec"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 rounded-full bg-[#ff6b00] flex items-center justify-center hover:bg-[#ff8533] transition-colors"
              >
                <FaGithub className="text-white text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/arkan-aldulaimi-b2b264198"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 rounded-full bg-[#ff6b00] flex items-center justify-center hover:bg-[#ff8533] transition-colors"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full bg-[#ff6b00] flex items-center justify-center hover:bg-[#ff8533] transition-colors"
              >
                <FaTiktok className="text-white text-xl" />
              </a>
              <a
                href="#"
                className="social-icon w-10 h-10 rounded-full bg-[#ff6b00] flex items-center justify-center hover:bg-[#ff8533] transition-colors"
              >
                <FaBehance className="text-white text-xl" />
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="/gallery"
                ref={buttonRef}
                className="bg-[#ff6b00] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff8533] transition-all hover:scale-105 inline-block"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="border-2 border-[#ff6b00] text-[#ff6b00] px-8 py-3 rounded-full font-semibold hover:bg-[#ff6b00] hover:text-white transition-all hover:scale-105 inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            ref={imageRef}
            className="md:w-1/2 flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {/* Glowing ring animation */}
              <div className="absolute inset-0 rounded-full animate-glow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff8533] blur-lg opacity-70 animate-spin-slow"></div>
              </div>

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#ff6b00] relative z-10 bg-[#1a1a1a]">
                <img
                  src="/arkan-profile.jpg"
                  alt="Arkan"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
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

export default Hero;
