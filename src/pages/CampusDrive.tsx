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
    <div className="min-h-screen pt-20">
      <section className="hero-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Campus Drive</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Bridging the gap between education and industry through structured campus recruitment
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Campus Recruitment Programs" subtitle="Connecting fresh talent with industry opportunities" />
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card rounded-lg p-8 card-elevated border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="stat-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-4">Are You a Student?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Apply now and kickstart your career in manufacturing and industrial sectors.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/careers">Apply Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CampusDrive;
