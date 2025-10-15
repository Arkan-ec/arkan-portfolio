import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaBehance,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">
              Arkan Aldulaimi
            </h3>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Frontend Developer passionate about creating beautiful,
              responsive, and user-friendly web applications with modern
              technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Arkan-ec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff6b00] transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-white text-lg" />
              </a>
              <a
                href="https://linkedin.com/in/arkan-aldulaimi-b2b264198"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff6b00] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff6b00] transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok className="text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-[#ff6b00] transition-all hover:scale-110"
                aria-label="Behance"
              >
                <FaBehance className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:aldulaimiarkan@gmail.com"
                  className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                >
                  aldulaimiarkan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+46736931160"
                  className="text-gray-400 hover:text-[#ff6b00] transition-colors"
                >
                  +46 736 931 160
                </a>
              </li>
              <li className="text-gray-400">Västerås, Sweden</li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#ff6b00] hover:text-[#ff8533] transition-colors font-medium"
                >
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Arkan Aldulaimi. Made with{" "}
            <FaHeart className="text-[#ff6b00] animate-pulse" /> using React &
            TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
