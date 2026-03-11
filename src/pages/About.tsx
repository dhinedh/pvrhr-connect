import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, CheckCircle } from "lucide-react";

const timeline = [
  { year: "2017", title: "Started as PVR Enterprises", desc: "Began providing HR services to local industries." },
  { year: "2023", title: "PVRHR Solutions Pvt Ltd", desc: "Established as a Private Limited company with expanded services." },
  { year: "2025", title: "11+ Clients & Growing", desc: "Serving multiple industries across Tamil Nadu." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="hero-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">About Us</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Professional HR services, customized solutions, and high-quality manpower supply focused on client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Company Overview" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              PVRHR Solutions and Services Pvt Ltd is a professional recruitment and HR services company based in Thiruvallur, Tamil Nadu. We specialize in providing skilled manpower to manufacturing, automobile, and electronics industries. Our comprehensive HR solutions include payroll management, statutory compliance, talent management, and end-to-end recruitment services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a dedicated team and a client-first approach, we have built strong relationships with leading companies, deploying over 2,300 employees and completing 5,000+ successful placements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-gradient">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Our Journey" subtitle="From humble beginnings to a trusted HR solutions provider" />
          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-20 shrink-0 text-right">
                  <span className="text-2xl font-heading font-bold text-primary">{item.year}</span>
                </div>
                <div className="w-px bg-primary/30 self-stretch relative">
                  <div className="absolute top-1 -left-1.5 w-4 h-4 rounded-full bg-primary" />
                </div>
                <div className="pb-8">
                  <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-lg p-8 card-elevated border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">To become one of the most trusted HR and manpower solution providers in India, setting industry benchmarks in quality and reliability.</p>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-card rounded-lg p-8 card-elevated border border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
              <ul className="space-y-2">
                {[
                  "Deliver skilled manpower to industries",
                  "Provide efficient HR management",
                  "Build long-term client relationships",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
