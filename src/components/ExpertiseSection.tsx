import { motion } from "framer-motion";
import { Database, BarChart3, Brain, Cog, Cloud, Layers } from "lucide-react";

const expertiseItems = [
  {
    icon: Layers,
    title: "Microsoft Fabric",
    description:
      "End-to-end analytics platform expertise including lakehouses, data warehouses, real-time analytics, data engineering with Spark, and Data Factory pipelines.",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description:
      "Advanced data visualisation, DAX modelling, Power BI administration, governance, premium capacity management, and enterprise report deployments.",
  },
  {
    icon: Cloud,
    title: "Azure Data Platform",
    description:
      "Azure Synapse Analytics, Azure Data Lake, Azure ML, Azure AI Services, Azure OpenAI, Cosmos DB, and full cloud data architecture.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Azure AI services, computer vision, NLP, generative AI with Azure OpenAI, MLOps, and Copilot integration for intelligent automation.",
  },
  {
    icon: Cog,
    title: "ERP & MES Systems",
    description:
      "Deep SAP expertise with enterprise resource planning and manufacturing execution systems integration, bridging operational data with analytics.",
  },
  {
    icon: Database,
    title: "Multi-Cloud Data Engineering",
    description:
      "Databricks, Snowflake, and AWS certified — delivering platform-agnostic data solutions with modern lakehouse architectures and data mesh patterns.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-fell-mist">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">Expertise</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Areas of Specialisation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A Microsoft-first approach, complemented by multi-cloud capabilities across all major data platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-fell-ice flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
