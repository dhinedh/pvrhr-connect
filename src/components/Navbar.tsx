import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Clients", path: "/clients" },
  { label: "Hiring Process", path: "/hiring-process" },
  { label: "Campus Drive", path: "/campus-drive" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] max-w-7xl rounded-full border border-glass-border ${
      scrolled 
        ? "bg-glass-bg backdrop-blur-2xl shadow-premium py-2" 
        : "bg-glass-bg/50 backdrop-blur-md py-4"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="PVRHR Solutions" className="h-8 md:h-10 w-auto transition-all duration-500 group-hover:brightness-125" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-[13px] font-bold font-heading transition-all duration-500 relative group overflow-hidden ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground dark:hover:text-white"
                }`}
              >
                <motion.span 
                  whileHover={{ y: -2 }}
                  className="relative z-10 block"
                >
                  {link.label}
                </motion.span>
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="active-nav"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" asChild className="rounded-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-6 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95">
              <a href="tel:+919080022346" className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-muted/80 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="lg:hidden flex items-center ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 pt-2 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium font-heading transition-all ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-30" />
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Button asChild className="w-full rounded-xl">
                    <a href="tel:+919080022346">
                      <Phone className="w-4 h-4" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
