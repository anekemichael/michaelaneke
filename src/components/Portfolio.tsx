import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Myshowroom App",
      description: "A modern showroom application with seamless user experience",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "https://myshowroomapp.com/",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "BoundlessPay",
      description: "Financial technology platform for seamless payments",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      link: "https://boundlesspay.com/",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Geosquaremeter Property",
      description: "Real estate platform with advanced property listings",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      link: "https://www.geosquaremeterproperty.com/",
      tags: ["React", "Redux", "Tailwind"],
    },
    {
      title: "Centric Swap",
      description: "Cryptocurrency exchange platform with real-time trading",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      link: "https://centric.com/",
      tags: ["React", "Web3", "Node.js"],
    },
    {
      title: "Zuri Website",
      description: "Educational platform clone with modern design",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "https://anekemichael.github.io/Zuri-Website-Clone/training.html",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Bezao Food",
      description: "Food delivery application with intuitive ordering system",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      link: "#",
      tags: ["React", "Node.js", "Express"],
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text mb-6">
            I Love What I Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building exceptional digital experiences.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                  <div className="p-4 rounded-full bg-background/20 backdrop-blur-sm">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
