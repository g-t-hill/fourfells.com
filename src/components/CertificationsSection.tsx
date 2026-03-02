import { motion } from "framer-motion";

type Certification = {
  name: string;
  code: string;
  level: "fundamentals" | "associate" | "expert" | "other";
  provider: "microsoft" | "databricks" | "snowflake" | "aws";
  badgeUrl?: string;
  verifyUrl?: string;
};

const certifications: Certification[] = [
  // Microsoft Expert
  {
    name: "Azure Solutions Architect Expert",
    code: "AZ-305",
    level: "expert",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-expert.svg",
  },
  // Microsoft Associate
  {
    name: "Azure Data Engineer Associate",
    code: "DP-203",
    level: "associate",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-associate.svg",
  },
  {
    name: "Fabric Analytics Engineer Associate",
    code: "DP-600",
    level: "associate",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-associate.svg",
  },
  {
    name: "Azure AI Engineer Associate",
    code: "AI-102",
    level: "associate",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-associate.svg",
  },
  {
    name: "Azure Developer Associate",
    code: "AZ-204",
    level: "associate",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-associate.svg",
  },
  {
    name: "Power BI Data Analyst Associate",
    code: "PL-300",
    level: "associate",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-associate.svg",
  },
  // Microsoft Fundamentals
  {
    name: "Azure Fundamentals",
    code: "AZ-900",
    level: "fundamentals",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-fundamentals.svg",
  },
  {
    name: "Azure AI Fundamentals",
    code: "AI-900",
    level: "fundamentals",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-fundamentals.svg",
  },
  {
    name: "Azure Data Fundamentals",
    code: "DP-900",
    level: "fundamentals",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-fundamentals.svg",
  },
  {
    name: "Power Platform Fundamentals",
    code: "PL-900",
    level: "fundamentals",
    provider: "microsoft",
    badgeUrl: "/images/certs/ms-fundamentals.svg",
  },
  // Other providers
  {
    name: "AWS Certified Data Engineer",
    code: "DEA-C01",
    level: "associate",
    provider: "aws",
  },
  {
    name: "Databricks Certified",
    code: "",
    level: "associate",
    provider: "databricks",
  },
  {
    name: "Snowflake Certified",
    code: "",
    level: "associate",
    provider: "snowflake",
  },
];

const providerColors: Record<string, string> = {
  microsoft: "bg-accent/10 text-accent border-accent/20",
  aws: "bg-fell-peak/10 text-fell-peak border-fell-peak/20",
  databricks: "bg-destructive/10 text-destructive border-destructive/20",
  snowflake: "bg-fell-sky/10 text-fell-sky border-fell-sky/20",
};

const levelLabels: Record<string, string> = {
  expert: "Expert",
  associate: "Associate",
  fundamentals: "Fundamentals",
  other: "",
};

const CertificationsSection = () => {
  const microsoftCerts = certifications.filter((c) => c.provider === "microsoft");
  const otherCerts = certifications.filter((c) => c.provider !== "microsoft");

  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-4">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Microsoft-focused with 309 badges and 92 trophies on Microsoft Learn, 
            complemented by certifications across Databricks, Snowflake, and AWS.
          </p>
        </motion.div>

        {/* Microsoft Certifications */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="font-display text-2xl text-foreground mb-6 flex items-center gap-3">
            <svg viewBox="0 0 23 23" className="w-6 h-6" fill="none">
              <rect width="11" height="11" fill="hsl(var(--accent))" />
              <rect x="12" width="11" height="11" fill="hsl(var(--accent))" opacity="0.8" />
              <rect y="12" width="11" height="11" fill="hsl(var(--accent))" opacity="0.8" />
              <rect x="12" y="12" width="11" height="11" fill="hsl(var(--accent))" opacity="0.6" />
            </svg>
            Microsoft Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {microsoftCerts.map((cert, index) => (
              <motion.div
                key={cert.code || cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                {cert.badgeUrl && (
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.name} badge`}
                    className="w-12 h-12 flex-shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <p className="font-medium text-sm text-foreground leading-snug">{cert.name}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {cert.code && (
                      <span className="text-xs font-medium text-muted-foreground">{cert.code}</span>
                    )}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${providerColors[cert.provider]}`}
                    >
                      {levelLabels[cert.level]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Platform Certifications */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display text-2xl text-foreground mb-6">
            Additional Platform Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherCerts.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${providerColors[cert.provider]}`}
                >
                  <span className="text-xs font-bold">
                    {cert.provider === "aws"
                      ? "AWS"
                      : cert.provider === "databricks"
                      ? "DB"
                      : "SF"}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{cert.name}</p>
                  {cert.code && (
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.code}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Microsoft Learn Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <a
            href="https://learn.microsoft.com/en-gb/users/garethhill-3849/credentials"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
          >
            View full credentials on Microsoft Learn →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
