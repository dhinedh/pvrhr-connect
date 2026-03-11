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
    <div className="min-h-screen pt-20">
      <section className="hero-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Our Hiring Process</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A structured approach to finding and placing the right talent
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeading title="Recruitment Process" subtitle="Our proven 4-step process ensures quality placements every time" />
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full stat-gradient flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-primary/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-heading font-bold text-primary">Step {step.number}</span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringProcess;
