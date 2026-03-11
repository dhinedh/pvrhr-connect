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
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-5">About Us</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
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
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              PVRHR Solutions and Services Pvt Ltd is a professional recruitment and HR services company based in Thiruvallur, Tamil Nadu. We specialize in providing skilled manpower to manufacturing, automobile, and electronics industries. Our comprehensive HR solutions include payroll management, statutory compliance, talent management, and end-to-end recruitment services.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a dedicated team and a client-first approach, we have built strong relationships with leading companies, deploying over 2,300 employees and completing 5,000+ successful placements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding section-gradient">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Our Journey" subtitle="From humble beginnings to a trusted HR solutions provider" />
          <div className="max-w-2xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="w-20 shrink-0 text-right pt-1">
                  <span className="text-2xl font-heading font-extrabold text-gradient">{item.year}</span>
                </div>
                <div className="relative flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent min-h-[80px]" />}
                </div>
                <div className="pb-12">
                  <h3 className="font-heading font-bold text-lg text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.desc}</p>
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
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-modern p-10 group">
              <div className="icon-badge mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To become one of the most trusted HR and manpower solution providers in India, setting industry benchmarks in quality and reliability.</p>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="card-modern p-10 group">
              <div className="icon-badge-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-foreground mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Deliver skilled manpower to industries",
                  "Provide efficient HR management",
                  "Build long-term client relationships",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-3 text-muted-foreground text-lg">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
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
