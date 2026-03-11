import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Building2, ClipboardCheck, DollarSign, Shield, GraduationCap, Factory, UserCheck, ArrowRight, Quote, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: UserCheck, title: "Recruitment Services", desc: "Finding the right candidates for your company with precision and speed." },
  { icon: Users, title: "Manpower Supply", desc: "Providing trained manpower to manufacturing and industrial sectors." },
  { icon: Building2, title: "HR Administration", desc: "Managing end-to-end HR operations for seamless business growth." },
  { icon: DollarSign, title: "Payroll Management", desc: "Accurate salary processing and employee record management." },
  { icon: Shield, title: "HR Compliance", desc: "PF, ESI, and all statutory compliance handled with expertise." },
  { icon: GraduationCap, title: "Talent Management", desc: "Hiring, training, and retention strategies for your workforce." },
  { icon: Factory, title: "Industrial Staffing", desc: "Specialized staffing for manufacturing and automobile industries." },
  { icon: ClipboardCheck, title: "Campus Recruitment", desc: "Connecting fresh talent with industry opportunities." },
];

const clients = [
  "Avary Tech India Pvt Ltd",
  "Steel Strips Wheels Pvt Ltd",
  "Nifco South India Manufacturing Pvt Ltd",
  "Jangone Foam Products India Pvt Ltd",
  "Duckwoo Auto Parts India Pvt Ltd",
  "GH India Auto Parts India Pvt Ltd",
];

const testimonials = [
  { name: "Rajesh Kumar", role: "HR Manager, Avary Tech", rating: 5, review: "PVRHR has been instrumental in providing skilled manpower for our electronics manufacturing unit. Their recruitment process is efficient and reliable." },
  { name: "Sundar Rajan", role: "Operations Head, Steel Strips Wheels", rating: 5, review: "We've partnered with PVRHR for over two years. Their understanding of automobile industry staffing needs is exceptional." },
  { name: "Priya Lakshmi", role: "Plant Manager, Nifco South India", rating: 4, review: "Quick turnaround times and quality candidates. PVRHR consistently delivers trained workforce that meets our production requirements." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

import SpotlightCard from "@/components/SpotlightCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Hero */}
      <section className="relative min-h-[95vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-[0.1] dark:opacity-40 scale-110" />
          <div className="absolute inset-0 animate-liquid opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(var(--primary),0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-background/20 dark:bg-background/60 backdrop-blur-[1px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-20 -left-20 w-[35rem] h-[35rem] bg-accent/5 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/40 backdrop-blur-xl border border-border/10 mb-8 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[13px] font-semibold tracking-[0.2em] text-foreground uppercase">Industrial Excellence Defined</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 leading-[1] tracking-tight text-foreground dark:text-white text-balance"
            >
              Architecting the <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic drop-shadow-sm">Industrial Future</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl text-foreground/60 mb-12 font-body max-w-3xl mx-auto leading-relaxed text-balance"
            >
              PVRHR Connect: Engineering the bridge between professional ambition and enterprise-grade industrial performance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-5 justify-center"
            >
              <Button size="lg" asChild className="rounded-full px-10 h-16 bg-primary hover:bg-primary-dark text-primary-foreground text-lg font-bold shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all hover:scale-105 active:scale-95 group relative overflow-hidden">
                <Link to="/services">
                  Our Expertise <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-10 h-16 backdrop-blur-xl border-border/10 bg-card/40 dark:border-white/10 hover:bg-card/60 text-lg font-bold transition-all hover:scale-105 active:scale-95 text-foreground dark:text-white shadow-sm">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
        </motion.div>
      </section>

      {/* Intro Section - Bento Grid Intro */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-narrow mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="lg:col-span-12 text-center"
            >
              <SectionHeading title="Pioneering Human Potential" subtitle="Strategic HR solutions for the modern industrial landscape." />
              <p className="text-foreground/60 leading-relaxed mb-10 text-xl max-w-4xl mx-auto font-light">
                PVRHR Solutions bridges the gap between industrial ambition and workforce capability. We don't just fill positions; we engineer growth through meticulous talent acquisition and management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section className="section-padding bg-primary/5 dark:bg-black/20">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Precision Services" subtitle="A multi-modal approach to industrial workforce management" />
          
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6"
          >
            {services.map((service, index) => (
              <SpotlightCard 
                key={service.title} 
                variants={fadeInUp} 
                tiltEffect={index === 0}
                className={`group relative overflow-hidden rounded-[2.5rem] p-10 border border-border/10 transition-all duration-700 hover:border-primary/40 ${
                  index === 0 ? "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent dark:from-primary/20" : 
                  "bg-card/70 backdrop-blur-xl"
                }`}
              >
                {/* Background Glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  index === 0 ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/40" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground shadow-sm"
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className={`font-heading font-bold mb-3 transition-colors ${
                  index === 0 ? "text-2xl md:text-3xl text-foreground dark:text-white" : "text-xl text-foreground/90 group-hover:text-primary dark:group-hover:text-white"
                }`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed transition-colors ${
                  index === 0 ? "text-lg text-foreground/70" : "text-[15px] text-foreground/50 group-hover:text-foreground/70"
                }`}>
                  {service.desc}
                </p>

                {index === 0 && (
                  <div className="mt-8">
                    <Button variant="link" className="text-primary p-0 h-auto font-bold group" asChild>
                      <Link to="/services">Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
                    </Button>
                  </div>
                )}
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,hsla(var(--primary),0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stats */}
            {/* Stats */}
            {/* Stats Cards */}
            {/* Stats Cards */}
            {/* Stats Cards */}
            {/* Stats Cards */}
            {/* Stats Cards */}
            {[
              { end: 2300, suffix: "+", label: "Talents Deployed", icon: UserCheck },
              { end: 9, suffix: "+", label: "Strategic Partners", icon: Building2 },
              { end: 5000, suffix: "+", label: "Successful Placements", icon: Sparkles },
            ].map((stat) => (
              <SpotlightCard 
                key={stat.label} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                tiltEffect={true}
                className="p-10 rounded-[3rem] bg-card/70 border border-border/10 backdrop-blur-xl group transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-2xl">
                  <stat.icon className="w-8 h-8" />
                </div>
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-foreground/50 font-heading font-semibold text-lg uppercase tracking-widest mt-2">{stat.label}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Layout */}
      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Industry Perspectives" subtitle="Voices of success from the leaders we serve" />
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <SpotlightCard 
                key={t.name} 
                variants={fadeInUp} 
                tiltEffect={true}
                className="relative p-12 rounded-[3.5rem] bg-card/70 border border-border/10 group transition-all duration-700"
              >
                <Quote className="w-20 h-20 text-primary opacity-[0.03] absolute top-8 right-8 transition-opacity group-hover:opacity-[0.1]" />
                
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-[1px]">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center shadow-inner">
                      <span className="text-primary font-heading font-bold text-xl">{t.name[0]}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground dark:text-white group-hover:text-primary transition-colors">{t.name}</h4>
                    <p className="text-sm text-primary/70 font-black uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-primary fill-primary" : "text-white/10"}`} />
                  ))}
                </div>

                <p className="text-foreground/70 text-lg leading-relaxed font-light italic relative">
                  "{t.review}"
                </p>
              </SpotlightCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Cinematic */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,hsla(var(--primary),0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)] opacity-50" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground dark:text-white mb-8 leading-[1.1]">
              Ready to Engineer Your <br />
              <span className="text-primary">Perfect Workforce?</span>
            </h2>
            <p className="text-foreground/50 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join the elite circle of industries powered by PVRHR precision. Let's discuss your strategic staffing requirements today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" asChild className="rounded-full px-12 h-16 bg-primary hover:bg-primary-dark text-primary-foreground text-xl font-bold shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all hover:scale-105 active:scale-95">
                <Link to="/contact">Claim Your Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-12 h-16 bg-card/60 border-border/10 text-xl font-semibold backdrop-blur-xl transition-all hover:bg-card/80 hover:scale-105 active:scale-95 text-foreground dark:text-white">
                <Link to="/about">Our Philosophy</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>
    </div>
  );
};

export default Index;
