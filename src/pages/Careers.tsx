import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, MapPin } from "lucide-react";
import { toast } from "sonner";

const openings = [
  { title: "Machine Operator", location: "Thiruvallur", type: "Full Time" },
  { title: "Production Worker", location: "Thiruvallur", type: "Full Time" },
  { title: "Quality Inspector", location: "Thiruvallur", type: "Full Time" },
  { title: "Warehouse Staff", location: "Thiruvallur", type: "Full Time" },
];

const Careers = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", qualification: "", experience: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your application has been submitted successfully! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", qualification: "", experience: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[45vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsla(var(--primary),0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-background/40 dark:bg-background/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground dark:text-white">
              Industrial <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic">Career Vanguard</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
              Join the ranks of the elite workforce driving Tamil Nadu's industrial dominance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-10 rounded-[3rem] bg-card/60 border border-border/10 backdrop-blur-xl shadow-sm"
            >
              <SectionHeading title="Initiate Candidacy" centered={false} subtitle="Submit your profile for tactical placement." />
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                  />
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                  />
                </div>
                <Input
                  placeholder="Highest Qualification"
                  value={form.qualification}
                  onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                  required
                  className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                />
                <Input
                  placeholder="Years of Operational Experience"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                />
                <Button type="submit" size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-primary-dark text-black font-black text-lg shadow-2xl transition-all">Submit Application</Button>
              </form>
            </motion.div>

            {/* Job Openings */}
            <div className="space-y-10">
              <SectionHeading title="Active Openings" centered={false} subtitle="Explore frontline opportunities." />
              <div className="grid gap-6">
                {openings.map((job, i) => (
                  <motion.div 
                    key={job.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative p-10 rounded-[2.5rem] bg-card/70 border border-border/10 overflow-hidden hover:shadow-premium transition-all duration-500 shadow-sm"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-2xl bg-card/70 border border-border/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-premium"
                    >
                      {/* Icon or other content for magnetic effect can go here */}
                    </motion.div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                        <div className="flex items-center gap-6 mt-4 text-foreground/40">
                          <span className="flex items-center gap-2 text-sm font-medium"><MapPin className="w-4 h-4 text-primary" />{job.location}</span>
                          <span className="flex items-center gap-2 text-sm font-medium"><Briefcase className="w-4 h-4 text-accent" />{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
