import { useState, useEffect } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-[#1a1a1a]/80 to-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl text-white hover:text-[#ff6b00] transition-colors duration-300"
          >
            <BiCodeAlt className="w-8 h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                  isActiveLink(item.href)
                    ? "text-[#ff6b00]"
                    : "text-white hover:text-[#ff6b00]"
                }`}
              >
                {item.name}
                {isActiveLink(item.href) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#ff6b00]"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#ff6b00]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-3 px-4 rounded-lg text-sm uppercase tracking-wider transition-all duration-300 ${
                  isActiveLink(item.href)
                    ? "bg-[#ff6b00] text-white"
                    : "text-white hover:bg-[#2a2a2a] hover:text-[#ff6b00]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
