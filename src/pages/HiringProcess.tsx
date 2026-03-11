import { motion } from "framer-motion";
import { MessageSquare, ListFilter, UserCheck, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: MessageSquare, number: "01", title: "Pre-Placement Talk", desc: "Understanding client requirements and job specifications through detailed discussions." },
  { icon: ListFilter, number: "02", title: "Shortlisting Candidates", desc: "Screening and shortlisting candidates based on qualifications, experience, and skills." },
  { icon: UserCheck, number: "03", title: "Formal Interview", desc: "Conducting structured interviews to assess candidate suitability and cultural fit." },
  { icon: Award, number: "04", title: "Appointment & Placement", desc: "Final selection, documentation, and seamless onboarding at the client's workplace." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HiringProcess = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[45vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <div className="absolute inset-0 animate-liquid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(var(--primary),0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-background/20 dark:bg-background/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground dark:text-white text-balance">
              Tactical <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic drop-shadow-sm">Deployment Workflow</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              Our precision-engineered process ensures the right talent is deployed to the right industrial front.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Recruitment Pipeline" subtitle="A structured 4-step framework for industrial talent acquisition." />
          <div className="max-w-4xl mx-auto relative mt-20">
            {/* Connection Line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent hidden md:block" />

            <div className="space-y-20">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-10 group"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-card/70 border border-border/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-premium"
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <div className="pb-10">
                    <span className="text-xs font-heading font-black tracking-[0.3em] text-primary/60 uppercase">Phase {step.number}</span>
                    <h3 className="text-2xl font-bold text-foreground dark:text-white mt-2 mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-foreground/50 text-lg font-light leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringProcess;
