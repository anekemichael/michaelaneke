import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Palette, title: "I Design", description: "I value simple content structure, clean design patterns, and thoughtful interactions that create memorable experiences." },
    { icon: Code2, title: "I Develop", description: "I like to code things from scratch, and enjoy bringing ideas to life in the browser with clean, maintainable code." },
    { icon: Rocket, title: "I Scale", description: "I genuinely care about the products I develop and love helping them scale to reach their full potential in the market." },
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", 
    "Tailwind CSS", "Redux", "PostgreSQL", "MongoDB", "AWS"
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Now you're here...
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text">
            Get to Know Me
          </h2>
        </div>

        {/* About content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I am an experienced Software Developer with vast knowledge of{" "}
              <span className="text-primary font-medium">HTML, CSS, Tailwind, JavaScript, ReactJs, Redux, NextJs, TypeScript, Python,</span> and{" "}
              <span className="text-secondary font-medium">NodeJs</span>. 
              I have developed a wide range of web applications, from simple websites to complex enterprise solutions. 
              With a deep understanding of web development principles, I quickly implement solutions to complex problems 
              while maintaining a great eye for design. I'm experienced in creating responsive layouts and have a 
              solid understanding of accessibility standards.
            </p>
          </div>
        </div>

        {/* Skills cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group glass-card glow-border p-8 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <skill.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-4 gradient-text">
                {skill.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-xl font-semibold font-display mb-8 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
