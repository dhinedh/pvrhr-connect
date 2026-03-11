import { motion } from "framer-motion";
import { GraduationCap, Building2, Users, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  { icon: GraduationCap, title: "Campus Hiring Programs", desc: "Structured campus recruitment drives connecting students with industry opportunities." },
  { icon: Users, title: "Fresher Recruitment", desc: "Dedicated programs for fresh graduates to start their careers in manufacturing and industrial sectors." },
  { icon: Building2, title: "College Partnerships", desc: "Long-term partnerships with engineering and polytechnic colleges across Tamil Nadu." },
  { icon: FileText, title: "Industrial Placements", desc: "Placement assistance for students seeking careers in manufacturing and automobile industries." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CampusDrive = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[45vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <div className="absolute inset-0 animate-liquid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsla(var(--primary),0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-background/20 dark:bg-background/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground dark:text-white text-balance">
              Cultivating <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic drop-shadow-sm">Future Talent</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              Synthesizing the gap between academic theory and industrial application.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Campus Synergy" subtitle="Connecting the next generation of engineers with industrial leaders." />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative p-12 rounded-[3.5rem] bg-card/70 border border-border/10 overflow-hidden hover:shadow-premium transition-all duration-700 text-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary shadow-2xl group-hover:scale-110 transition-transform">
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-4">{f.title}</h3>
                <p className="text-foreground/50 text-lg leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/5 -skew-y-3 translate-y-20 opacity-50 dark:opacity-100" />
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground dark:text-white mb-6">Are You a Student?</h2>
            <p className="text-xl text-foreground/50 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Accelerate your professional journey. Apply now and secure your position in the manufacturing and industrial vanguard.
            </p>
            <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary-dark text-black font-black text-lg transition-all hover:scale-105 shadow-[0_20px_50px_rgba(37,99,235,0.3)]" asChild>
              <Link to="/careers">Initiate Application</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CampusDrive;
