import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/969e7166-4bcf-45a5-bdbf-1d211ed54479.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Electronics", to: "/electronics" },
  { label: "Furniture", to: "/furniture" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/"
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Anubhav Showroom" className="h-16 md:h-20" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${
                  isActive
                    ? "text-primary after:w-full"
                    : "text-muted-foreground hover:text-primary after:w-0"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
          <a
            href="tel:9653032205"
            className="bg-gold-gradient px-5 py-2.5 rounded-full text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-left py-2.5 transition-colors font-medium ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="tel:9653032205"
                className="bg-gold-gradient px-5 py-3 rounded-full text-primary-foreground font-semibold flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
