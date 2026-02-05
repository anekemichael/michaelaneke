import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Michael", "a Software Engineer", "a Product Manager"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float delay-500" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card animate-slide-up">
            <span className="text-2xl">👋</span>
            <span className="text-sm font-medium text-muted-foreground">Hey there</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 animate-slide-up delay-100">
            I'm{" "}
            <span className="gradient-text">{displayText}</span>
            <span className="typing-cursor" />
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-200">
            A Senior Software Engineer with over a decade of experience crafting
            exceptional digital experiences. I transform ideas into elegant,
            scalable solutions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-300">
            <Button
              size="lg"
              className="btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl"
              asChild
            >
              <a href="#contact">
                Let's Talk
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-xl group"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                My Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 animate-slide-up delay-400">
            <a
              href="https://linkedin.com/in/aneke-michael-19718a1a4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/anekemichael"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://x.com/d1_codes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="p-3 rounded-full glass-card">
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
