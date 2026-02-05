import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Phone, label: "Call Me", value: "+2347067012822" },
    { icon: MapPin, label: "Location", value: "Enugu, Nigeria" },
    { icon: Mail, label: "Email Me", value: "anekemikeobiora2@gmail.com" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Have a Question?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display gradient-text">
            Contact Me Now
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl mb-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                  Your Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 xxx xxx xxxx"
                  className="bg-background/50 border-border/50 focus:border-primary rounded-xl h-12"
                />
              </div>
              <div className="space-y-2 md:row-span-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="bg-background/50 border-border/50 focus:border-primary rounded-xl min-h-[140px] resize-none"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto btn-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass-card p-6 rounded-2xl text-center group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-sm font-medium text-primary mb-2">
                  {info.label}
                </h4>
                <p className="font-display font-semibold text-foreground/90">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
