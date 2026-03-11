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
    <div className="min-h-screen pt-20">
      <section className="hero-gradient section-padding">
        <div className="container-narrow mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Careers</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Join our growing workforce and build your career with leading industries
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <div>
              <SectionHeading title="Submit Your Resume" centered={false} subtitle="Fill in your details and we'll match you with the right opportunity" />
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-card"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="bg-card"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-card"
                />
                <Input
                  placeholder="Qualification"
                  value={form.qualification}
                  onChange={(e) => setForm({ ...form, qualification: e.target.value })}
                  required
                  className="bg-card"
                />
                <Input
                  placeholder="Years of Experience"
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  className="bg-card"
                />
                <Button type="submit" size="lg" className="w-full">Submit Application</Button>
              </form>
            </div>

            {/* Job Openings */}
            <div>
              <SectionHeading title="Current Openings" centered={false} subtitle="Explore available positions" />
              <div className="space-y-4">
                {openings.map((job) => (
                  <div key={job.title} className="bg-card rounded-lg p-6 card-elevated border border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{job.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                          <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
