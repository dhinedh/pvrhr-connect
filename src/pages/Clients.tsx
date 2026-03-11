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
    <div className="min-h-screen pt-20">
      <section className="hero-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Clients</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Trusted by leading manufacturing and industrial companies across Tamil Nadu
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Companies We Serve" subtitle="Building lasting partnerships with industry leaders" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 card-elevated border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{client.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">{client.industry}</p>
                <p className="text-xs text-muted-foreground">{client.services}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
