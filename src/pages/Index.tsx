import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Building2, ClipboardCheck, DollarSign, Shield, GraduationCap, Factory, UserCheck, ArrowRight, Quote, Star, Sparkles, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroBg from "@/assets/hero-bg.jpg";
import SpotlightCard from "@/components/SpotlightCard";

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

const EnquiryForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="w-full max-w-md mx-auto lg:mx-0 p-8 rounded-3xl bg-white/60 dark:bg-black/40 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-premium relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors duration-700" />
      
      <h3 className="text-2xl font-heading font-extrabold mb-2 text-foreground dark:text-white">Get Started Today</h3>
      <p className="text-foreground/60 text-sm mb-6">Leave your details and our experts will contact you within 24 hours.</p>
      
      <form className="space-y-4 relative z-10">
        <div className="space-y-4">
          <Input 
            placeholder="Your Name" 
            className="rounded-xl h-12 bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:ring-primary/20" 
          />
          <Input 
            type="email" 
            placeholder="Email Address" 
            className="rounded-xl h-12 bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:ring-primary/20" 
          />
          <Input 
            placeholder="Phone Number" 
            className="rounded-xl h-12 bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:ring-primary/20" 
          />
          <Textarea 
            placeholder="How can we help you?" 
            className="rounded-xl min-h-[100px] bg-white/50 dark:bg-black/20 border-white/20 dark:border-white/10 focus:ring-primary/20 resize-none" 
          />
        </div>
        
        <Button className="w-full h-14 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
          Submit Enquiry
          <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </Button>
        
        <div className="flex items-center justify-center gap-2 text-[11px] text-foreground/40 font-medium pt-2">
          <CheckCircle2 className="w-3 h-3 text-primary" />
          <span>Your data is secure and confidential.</span>
        </div>
      </form>
    </motion.div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Hero */}
      <section className="relative min-h-screen pt-40 pb-20 flex items-center justify-center overflow-hidden">
        {/* Advanced Background */}
        <div className="absolute inset-0 z-0">
          {/* Light Theme Specific Image Background */}
          <div className="absolute inset-0 block dark:hidden">
            <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40 scale-105" />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
          </div>
          
          {/* Dark Theme Specific Image Background */}
          <div className="absolute inset-0 hidden dark:block">
            <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 scale-105" />
            <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
          </div>

          <div className="absolute inset-0 animate-liquid opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(var(--primary),0.12),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(12,90,219,0.1),transparent_60%)]" />
        </div>

        {/* Floating circles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">Innovation in Human Resources</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl lg:text-7xl xl:text-8xl font-heading font-black mb-6 leading-[1] tracking-tight text-foreground dark:text-white"
                >
                  Empowering <br />
                  <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic">Global Talents</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-lg md:text-xl text-foreground/60 mb-10 font-body max-w-2xl leading-relaxed font-medium"
                >
                  PVRHR Solutions delivers strategic manpower and HR compliance services that drive industrial excellence and professional growth.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
              <Button size="lg" asChild className="rounded-xl px-10 h-16 bg-primary hover:bg-primary-dark text-primary-foreground text-lg font-bold shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 group">
                <Link to="/services">
                  Explore Services <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
                  <Button size="lg" variant="outline" asChild className="rounded-xl px-10 h-16 border-primary/20 bg-background/50 backdrop-blur-md hover:bg-background/80 text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-sm">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 pt-8 border-t border-border/10 flex flex-wrap gap-8 items-center"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/30">Trusted by Industry Leaders</p>
                <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                  {/* Mock small text logos or shapes if actual logos aren't available */}
                  {["AVARY", "NIFCO", "SSW", "JANGONE"].map(l => (
                    <span key={l} className="text-sm font-black tracking-tighter">{l}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <EnquiryForm />
            </div>
          </div>
        </div>
        
        {/* Decorative Scroll Lines */}
        <div className="absolute right-10 bottom-0 h-32 w-[1px] bg-gradient-to-b from-transparent via-primary/40 to-primary/0 hidden xl:block" />
        <div className="absolute right-14 bottom-0 h-48 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-primary/0 hidden xl:block" />
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
                className={`group relative overflow-hidden rounded-[2.5rem] p-8 border border-white/10 dark:border-white/5 transition-all duration-700 hover:border-primary/40 ${
                  index === 0 ? "md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent dark:from-primary/30" : 
                  "bg-white/40 dark:bg-black/40 backdrop-blur-2xl"
                }`}
              >
                {/* Background Glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  index === 0 ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/40" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground shadow-sm"
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                <h3 className={`font-heading font-black mb-3 transition-colors ${
                  index === 0 ? "text-2xl md:text-4xl text-foreground dark:text-white" : "text-xl text-foreground/90 group-hover:text-primary dark:group-hover:text-white"
                }`}>
                  {service.title}
                </h3>
                
                <p className={`leading-relaxed transition-colors font-medium ${
                  index === 0 ? "text-lg text-foreground/70" : "text-[15px] text-foreground/50 group-hover:text-foreground/70"
                }`}>
                  {service.desc}
                </p>

                {index === 0 && (
                  <div className="mt-10">
                    <Button variant="link" className="text-primary p-0 h-auto font-black group text-lg" asChild>
                      <Link to="/services" className="flex items-center">
                        Explore Full Capabilities 
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
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
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 shadow-2xl">
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
              <Button size="lg" asChild className="rounded-full px-12 h-16 bg-accent hover:bg-accent/90 text-accent-foreground text-xl font-bold shadow-2xl shadow-accent/30 transition-all hover:scale-105 active:scale-95">
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
