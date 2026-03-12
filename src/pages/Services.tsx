import { motion } from "framer-motion";
import { Users, Building2, ClipboardCheck, DollarSign, Shield, GraduationCap, Factory, UserCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import servicesBg from "@/assets/services-hero-bg.jpg";

const services = [
  { icon: UserCheck, title: "Recruitment Services", desc: "We specialize in finding the right candidates for your company through comprehensive screening, skill assessments, and background verification. Our recruitment team works closely with you to understand job requirements and deliver the best-fit talent." },
  { icon: Users, title: "Manpower Supply", desc: "We provide trained and skilled manpower to manufacturing, automobile, and electronics industries. Our workforce is thoroughly vetted and equipped with the skills needed for your production requirements." },
  { icon: Building2, title: "HR Administration", desc: "End-to-end HR operations management including employee onboarding, documentation, attendance management, and exit processes. We handle your HR operations so you can focus on your core business." },
  { icon: DollarSign, title: "Payroll Management", desc: "Accurate and timely salary processing, employee record management, tax calculations, and payslip generation. Our payroll services ensure compliance and transparency." },
  { icon: Shield, title: "HR Compliance", desc: "Complete statutory compliance management including PF, ESI, professional tax, and labor law compliance. We keep your business compliant with all regulatory requirements." },
  { icon: GraduationCap, title: "Talent Management", desc: "Strategic hiring, training programs, performance management, and employee retention strategies. We help you build and maintain a high-performing workforce." },
  { icon: ClipboardCheck, title: "Campus Recruitment", desc: "Connecting fresh graduates with industry opportunities through campus drives, pre-placement talks, and structured hiring programs. We bridge the gap between academia and industry." },
  { icon: Factory, title: "Industrial Staffing", desc: "Specialized staffing solutions for manufacturing plants, production units, and warehouses. We understand the unique requirements of industrial staffing." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[50vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)] dark:bg-transparent">
          {/* Light Theme Image Background */}
          <div className="absolute inset-0 block dark:hidden">
            <img src={servicesBg} alt="" className="w-full h-full object-cover opacity-40 scale-105 grayscale" />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" />
          </div>
          
          <div className="absolute inset-0 animate-liquid opacity-20 dark:opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(var(--primary),0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 hidden dark:block bg-background/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground dark:text-white text-balance">
              Industrial <br />
              <span className="bg-gradient-to-r from-accent via-accent/80 to-primary bg-clip-text text-transparent italic drop-shadow-sm">Operational Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed text-balance">
              Precision HR frameworks designed for the rigorous demands of modern manufacturing and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, i) => (
              <SpotlightCard
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                tiltEffect={true}
                className="group relative p-12 rounded-[3.5rem] bg-card/70 border border-border/10 overflow-hidden transition-all duration-700 shadow-sm"
              >
                {/* Background Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 text-accent shadow-2xl group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-foreground dark:text-white mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground/50 text-lg leading-relaxed font-light">
                  {service.desc}
                </p>

                <div className="mt-8 flex items-center text-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Detailed Scope <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
