import { motion } from "framer-motion";
import { Users, Building2, ClipboardCheck, DollarSign, Shield, GraduationCap, Factory, UserCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
    <div className="min-h-screen pt-20">
      <section className="hero-gradient section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container-narrow mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-5">Our Services</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive HR solutions tailored to your industry needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start gap-8 card-modern p-8 md:p-10 group ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="icon-badge shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
