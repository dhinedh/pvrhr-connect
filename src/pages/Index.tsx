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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 hero-gradient opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        
        <div className="relative z-10 container-narrow mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">Tamil Nadu's Trusted HR Partner</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground mb-6 leading-[1.1] tracking-tight">
              Building Workforce
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Solutions</span> That Work
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 font-body max-w-2xl mx-auto leading-relaxed">
              Delivering skilled manpower and comprehensive HR solutions to manufacturing, automobile, and electronics industries across Tamil Nadu.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="hero" asChild className="rounded-full px-8 h-13">
                <Link to="/services">Hire Employees <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button size="lg" variant="hero-white" asChild className="rounded-full px-8 h-13">
                <Link to="/careers">Submit Resume</Link>
              </Button>
              <Button size="lg" variant="hero-outline" asChild className="rounded-full px-8 h-13">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* About Short */}
      <section className="section-padding section-gradient">
        <div className="container-narrow mx-auto">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <SectionHeading title="Who We Are" subtitle="Leading recruitment service provider in Tamil Nadu, delivering trained manpower and comprehensive HR solutions." />
            <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
              PVRHR Solutions and Services Pvt Ltd is a leading HR services company providing customized recruitment, manpower supply, payroll management, and compliance solutions. We focus on building long-term partnerships with our clients while ensuring quality talent acquisition for manufacturing, automobile, and electronics industries.
            </p>
            <Button asChild className="rounded-full px-6">
              <Link to="/about">Read More <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Our Services" subtitle="Comprehensive HR solutions tailored to your industry needs" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div key={service.title} variants={fadeInUp} className="card-modern p-7 group">
                <div className="icon-badge mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="stat-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container-narrow mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { end: 2300, suffix: "+", label: "Employees Deployed" },
              { end: 9, suffix: "+", label: "Trusted Clients" },
              { end: 5000, suffix: "+", label: "Total Hiring" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-3">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-primary-foreground/70 font-heading font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding section-gradient">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Our Clients" subtitle="Trusted by leading manufacturing and industrial companies" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <motion.div key={client} variants={fadeInUp} className="card-modern p-7 text-center group">
                <div className="icon-badge mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <p className="font-heading font-semibold text-foreground">{client}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading title="What Our Clients Say" subtitle="Trusted feedback from our valued partners" />
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeInUp} className="card-modern p-7 relative">
                <Quote className="w-10 h-10 text-primary/10 absolute top-5 right-5" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/10 flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-lg">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-accent fill-accent" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-muted-foreground text-[15px] leading-relaxed italic">"{t.review}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-5 leading-tight">
              Looking for Skilled Manpower?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Get reliable recruitment services today. We provide trained workforce for your industry needs.
            </p>
            <Button size="lg" variant="hero" asChild className="rounded-full px-8 h-13">
              <Link to="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
