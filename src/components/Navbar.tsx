import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/969e7166-4bcf-45a5-bdbf-1d211ed54479.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#electronics" },
  { label: "Furniture", href: "#furniture" },
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => handleClick("#hero")} className="shrink-0">
          <img src={logo} alt="Anubhav Showroom" className="h-12 md:h-14" />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </button>
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
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-muted-foreground hover:text-primary py-2.5 transition-colors font-medium"
                >
                  {link.label}
                </button>
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
