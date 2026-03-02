import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-fell-navy relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--fell-sky)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-fell-sky font-body text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
            Whether you need a data strategy, cloud migration, Power BI deployment, 
            or AI integration — I'd love to hear about your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <a
              href="mailto:gareth@fourfells.co.uk"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/gareth-hill-9443139/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md border border-primary-foreground/20 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/50 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Cumbria, United Kingdom</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
