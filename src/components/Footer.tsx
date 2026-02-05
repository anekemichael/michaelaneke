import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/aneke-michael-19718a1a4/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/d1_codes", label: "Twitter" },
    { icon: Github, href: "https://github.com/anekemichael", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/d1_codes/", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@geekybuds", label: "YouTube" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Aneke Michael{" "}
            <span className="gradient-text font-medium">#WAGMI ✌️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
