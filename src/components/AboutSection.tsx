import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">About</p>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              Data-Driven Solutions, Human-Centred Approach
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Four Fells is a specialist data and AI consultancy led by Gareth Hill — a senior 
              multi-platform, multi-cloud data engineer with over 20 years of experience delivering 
              data solutions across manufacturing, electrical engineering, and enterprise industries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With deep expertise spanning the full Microsoft data stack — from Azure to Microsoft Fabric 
              and Power BI — alongside certifications in Databricks, Snowflake, and AWS, Four Fells 
              bridges the gap between complex data infrastructure and real business outcomes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Gareth also brings extensive experience with ERP and MES systems, particularly SAP, 
              enabling seamless integration of operational systems with modern analytics platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
