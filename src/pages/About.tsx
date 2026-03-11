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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[60vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(var(--primary),0.12),transparent_50%)]" 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-background/40 dark:bg-background/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground dark:text-white">
              The Architecture of <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic">Industry Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
              We bridge the gap between industrial ambition and workforce capability with precision and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Narrative */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-narrow mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="lg:col-span-12 text-center"
            >
              <SectionHeading title="Precision Heritage" subtitle="Our journey from local service to industrial leader" />
              <div className="space-y-8 text-foreground/60 leading-relaxed text-xl max-w-4xl mx-auto font-light">
                <p>
                  PVRHR Solutions and Services Pvt Ltd represents the pinnacle of professional recruitment and HR administration in Thiruvallur. We serve as the strategic labor backbone for Tamil Nadu's heavyweights in manufacturing and electronics.
                </p>
                <p>
                  With a legacy built on technical excellence and trust, we've deployed over <span className="text-primary font-bold italic">2,300+ employees</span> and facilitated more than <span className="text-primary font-bold italic">5,000 placements</span>, each contributing to the state's industrial dominance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Timeline */}
      <section className="section-padding bg-primary/5 dark:bg-black/20 relative">
        <div className="container-narrow mx-auto relative z-10">
          <SectionHeading title="Our Evolution" subtitle="Engineering growth through the decades" />
          <div className="max-w-4xl mx-auto relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 w-full ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-heading font-black text-2xl mb-4 italic">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground dark:text-white mb-3">{item.title}</h3>
                    <p className="text-foreground/50 text-lg leading-relaxed font-light">{item.desc}</p>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="section-padding relative">
        <div className="container-narrow mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              whileHover={{ y: -8 }}
              className="relative p-12 rounded-[3.5rem] bg-card/70 border border-border/10 overflow-hidden group hover:shadow-premium transition-all duration-700"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-2xl group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-extrabold text-foreground dark:text-white mb-6">Our Vision</h3>
              <p className="text-foreground/50 leading-relaxed text-xl font-light italic">
                "To remain the most trusted architect of workforce solutions in India, defining the new gold standard for industrial reliability and quality."
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              whileHover={{ y: -8 }}
              className="relative p-12 rounded-[3.5rem] bg-card/70 border border-border/10 overflow-hidden group hover:shadow-premium transition-all duration-700"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent shadow-2xl group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-extrabold text-foreground dark:text-white mb-6">Strategic Mission</h3>
              <ul className="space-y-6">
                {[
                  "Engineer industrial success through elite manpower",
                  "Simplify complexities with unified HR frameworks",
                  "Forge enduring partnerships through relentless integrity",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-4 text-foreground/60 text-lg font-light leading-snug">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                    <span>{m}</span>
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
