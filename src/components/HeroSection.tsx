import { motion } from "framer-motion";
import heroImage from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fell-navy/80 via-fell-navy/60 to-fell-navy/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-fell-sky font-body text-sm tracking-[0.3em] uppercase mb-6">
            Data & AI Consultancy
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-tight">
            Four Fells
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Turning complex data into clear, actionable insight. Over 20 years of experience
            across Microsoft Azure, Fabric, Power BI, and enterprise data platforms.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#expertise"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
