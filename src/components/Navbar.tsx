import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "glass shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container-narrow mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="PVRHR Solutions" className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-muted/50 rounded-full px-1.5 py-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-full text-[13px] font-medium font-heading transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/60 hover:text-foreground hover:bg-card/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" asChild className="rounded-full gap-2">
              <a href="tel:+919080022346">
                <Phone className="w-3.5 h-3.5" />
                Call Now
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
