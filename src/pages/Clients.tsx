import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const clients = [
  { name: "Avary Tech India Pvt Ltd", industry: "Electronics Manufacturing", services: "Manpower Supply, Recruitment" },
  { name: "Steel Strips Wheels Pvt Ltd", industry: "Automobile Manufacturing", services: "Industrial Staffing, HR Compliance" },
  { name: "Nifco South India Manufacturing Pvt Ltd", industry: "Car AC Parts Manufacturing", services: "Manpower Supply, Payroll" },
  { name: "Jangone Foam Products India Pvt Ltd", industry: "Foam Manufacturing", services: "Recruitment, HR Administration" },
  { name: "Duckwoo Auto Parts India Pvt Ltd", industry: "Automobile Parts", services: "Manpower Supply, Compliance" },
  { name: "GH India Auto Parts India Pvt Ltd", industry: "Metal Components", services: "Industrial Staffing, Recruitment" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Clients = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[45vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <div className="absolute inset-0 animate-liquid opacity-20" />
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsla(var(--primary),0.15),transparent_50%)]" 
          />
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
              Strategic <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic drop-shadow-sm">Client Alliances</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              We empower Tamil Nadu's industrial titans with the workforce backbone they demand.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Tier-1 Partnerships" subtitle="Trusted by the architects of modern manufacturing and electronics." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-card/60 border border-border/10 overflow-hidden hover:bg-card/80 transition-all duration-700 hover:-translate-y-2 text-center shadow-sm"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 text-primary shadow-2xl group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-3 group-hover:text-primary transition-colors">{client.name}</h3>
                <p className="text-sm text-primary/60 font-black uppercase tracking-widest mb-4 italic">{client.industry}</p>
                <p className="text-foreground/40 text-lg font-light leading-snug">{client.services}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
