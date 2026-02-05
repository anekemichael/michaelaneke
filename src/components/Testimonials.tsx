import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Osita Nwaigwe",
      role: "Product Designer 🥑",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Having worked with Michael, I can confidently say he's one of the most skilled developers I've ever collaborated with. He calmly tackles challenges, even under tight deadlines. Michael is incredibly driven.",
    },
    {
      name: "Gerald Odoh",
      role: "Software Engineer 👨🏽‍💻",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "Michael is a motivated and determined developer, he demonstrates superior technical ability and produces works of exceptional quality. He understands the scope of his project and this makes his work extraordinarily exceptional.",
    },
    {
      name: "Nnaemeka Light",
      role: "Artist 🎨",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Michael is an awesome developer whose technical prowess is top-notch. He possesses the skill and ability to work both calmly and under pressure. Well determined to achieve his goals, making his work his top priority.",
    },
    {
      name: "Nate Magnate",
      role: "Crypto Trader 📈",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      quote: "Just wow! What's more than phenomenal? I guess the word is 'Michael'.. techs and codes listens to this gem, a hardcore developer with diligence like him produces the unique work in his field as a developer.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text">
            What People Say
          </h2>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <div className="glass-card p-8 md:p-12 rounded-3xl text-center">
              {/* Quote icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-8">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/50"
                />
                <div className="text-left">
                  <h4 className="font-bold font-display text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r from-primary to-secondary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
