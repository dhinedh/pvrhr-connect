import { motion } from "framer-motion";
import { Users, Building2, ClipboardCheck, DollarSign, Shield, GraduationCap, Factory, UserCheck } from "lucide-react";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="hero-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Services</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Comprehensive HR solutions tailored to your industry needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-6 bg-card rounded-lg p-8 card-elevated border border-border ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{service.title}</h3>
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
