import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "All Services", href: "/programs" },
  { name: "Exercise", href: "/exercise" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Body Composition", href: "/body-composition" },
  { name: "Corporate", href: "/corporate" },
  { name: "About Us", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsVisible(true);
  }, [location.pathname]);



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state for background
      setIsScrolled(currentScrollY > 20);

      // Visibility state for hiding on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !isMobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }


      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };


  const handleNavClick = (href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      // Same page scroll
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}


      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
        : "bg-transparent"
        }`}
    >

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2">
              <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Medically<span className="text-primary">Fit</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isExternalOrHash = link.href.startsWith("/#") || !link.href.startsWith("/");

              return (
                <Button
                  key={link.name}
                  variant={active ? "secondary" : "ghost"}
                  size="sm"
                  asChild
                  className={`rounded-full px-5 ${active ? "shadow-sm" : "text-foreground/80"}`}
                >
                  {isExternalOrHash ? (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (location.pathname === "/" && link.href.startsWith("/#")) {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href}>
                      {link.name}
                    </Link>
                  )}
                </Button>
              );
            })}
          </nav>


          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="secondary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                const isExternalOrHash = link.href.startsWith("/#") || !link.href.startsWith("/");

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Button
                      variant={active ? "secondary" : "ghost"}
                      className="w-full justify-start text-sm font-medium h-12 rounded-xl mb-1"
                      asChild
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {isExternalOrHash ? (
                        <a href={link.href}>
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.href}>
                          {link.name}
                        </Link>
                      )}
                    </Button>
                  </motion.div>
                );
              })}

              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button variant="secondary" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
