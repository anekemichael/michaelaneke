import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 glass-card border-b border-border/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold font-display gradient-text"
          >
            Michael<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-6 animate-slide-up">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-border/50">
                <Button
                  asChild
                  className="w-full btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Hire Me
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
