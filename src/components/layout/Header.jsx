import { useState, useEffect } from "react";
import { Home, User, BowArrow, Briefcase, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Início", href: "/", icon: <Home size={18} /> },
    { name: "Sobre", href: "/sobre-mim", icon: <User size={18} /> },
    { name: "Skills", href: "/habilidades", icon: <BowArrow size={18} /> },
    { name: "Projetos", href: "/projetos", icon: <Briefcase size={18} /> },
    { name: "Contato", href: "/contato", icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-purple-500 rounded-lg flex items-center justify-center font-bold text-white shadow-md group-hover:scale-110 transition">
            B
          </div>
          <span className="text-lg font-bold text-white group-hover:text-purple-400 transition">
            Bia.dev
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-purple-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-md px-6 pb-6 pt-4 space-y-3">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition ${
                isActive(item.href)
                  ? "bg-purple-500 text-white"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}