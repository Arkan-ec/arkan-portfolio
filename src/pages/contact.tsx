import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified title animation
      gsap.fromTo(
        ".contact-title",
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

      // Simplified form animation
      gsap.fromTo(
        ".contact-form",
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

      // Simplified info cards animation
      const cards = contactRef.current?.querySelectorAll(".info-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            delay: 0.3,
            ease: "power2.out",
          }
        );
      }
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    setSubmitStatus("Thank you! I'll get back to you soon.");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("");
    }, 3000);
  };

  return (
    <div
      ref={contactRef}
      className="min-h-screen bg-[#1a1a1a] pt-32 pb-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="contact-title text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h1>
          <p className="contact-title text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white mb-2 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 bg-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff6b00] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff8533] transition-all hover:scale-105 transform"
              >
                Send Message
              </button>
              {submitStatus && (
                <p className="text-green-400 text-center font-medium animate-pulse">
                  {submitStatus}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="info-card bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333333] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-[#ff6b00] text-3xl mt-1 group-hover:scale-110 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:aldulaimiarkan@gmail.com"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    aldulaimiarkan@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="info-card bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333333] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-[#ff6b00] text-3xl mt-1 group-hover:scale-110 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+46736931160"
                    className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                  >
                    +46 736 931 160
                  </a>
                </div>
              </div>
            </div>

            <div className="info-card bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333333] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="text-[#ff6b00] text-3xl mt-1 group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Location
                  </h3>
                  <p className="text-gray-400">Västerås, Sweden</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Available for remote & hybrid work
                  </p>
                </div>
              </div>
            </div>

            <div className="info-card bg-[#2a2a2a] rounded-xl p-6 hover:bg-[#333333] transition-all duration-300">
              <h3 className="text-white font-semibold text-lg mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/arkan-aldulaimi-b2b264198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#ff6b00] flex items-center justify-center hover:bg-[#ff8533] transition-all hover:scale-110"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a
                  href="https://github.com/Arkan-ec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#ff6b00] flex items-center justify-center hover:bg-[#ff8533] transition-all hover:scale-110"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#ff6b00] opacity-5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Contact;
