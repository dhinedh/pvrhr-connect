import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Cinematic Header */}
      <section className="relative min-h-[45vh] pt-32 flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-[var(--hero-bg-light)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsla(var(--primary),0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsla(var(--primary),0.05),transparent_40%)]" />
          <div className="absolute inset-0 bg-background/40 dark:bg-background/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight text-foreground dark:text-white">
              Strategic <br />
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent italic">Briefing Room</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
              Let's discuss how PVRHR can engineer your industrial workforce strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding relative">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information Cards */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeading title="Operational Nodes" centered={false} />
                <p className="text-foreground/50 text-xl font-light leading-relaxed mb-10">
                  Our strategic presence ensures seamless support for your industrial requirements. Reach out through our dedicated communication channels.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: MapPin, title: "Headquarters", content: "No.23, V.M Nagar, Thiruvallur, Tamil Nadu – 602001", color: "text-primary" },
                  { icon: Phone, title: "Direct Contact", content: "+91 90800 22346 / +91 63817 71477", color: "text-accent", link: "tel:+919080022346" },
                  { icon: Mail, title: "Official Correspondence", content: "admoffice.pvrhrs@gmail.com", color: "text-primary-light", link: "mailto:admoffice.pvrhrs@gmail.com" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative p-12 rounded-[3.5rem] bg-card/70 border border-border/10 overflow-hidden hover:shadow-premium transition-all duration-700 shadow-sm"
                  >
                    <div className="flex gap-6 items-center">
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-primary/60 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-xl font-medium text-foreground dark:text-white hover:text-primary transition-colors">{item.content}</a>
                        ) : (
                          <p className="text-xl font-medium text-foreground dark:text-white">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Geographic Verification */}
              <div className="rounded-[2.5rem] overflow-hidden border border-border/10 shadow-2xl h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.2!2d79.9!3d13.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDEwJzQ4LjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  title="PVRHR Solutions Location"
                />
              </div>
            </div>

            {/* Strategic Communication Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-12 rounded-[3.5rem] bg-card/60 border border-border/10 backdrop-blur-xl shadow-xl"
            >
              <div className="absolute top-0 right-0 p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              <h2 className="text-3xl font-heading font-extrabold text-foreground dark:text-white mb-2">Initiate Strategy</h2>
              <p className="text-foreground/50 text-lg font-light mb-10">Briefly outline your requirements and our experts will reach out.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Full Name</label>
                    <Input
                      placeholder="e.g. Alexander Pierce"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Corporate Email</label>
                    <Input
                      placeholder="e.g. alex@industry.com"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Connectivity Number</label>
                  <Input
                    placeholder="e.g. +91 90000 00000"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-card/50 border-border/10 h-14 rounded-2xl focus:ring-primary focus:border-primary text-foreground dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Strategic Brief</label>
                  <Textarea
                    placeholder="Describe your workforce requirements or service inquiry..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="bg-card/50 border-border/10 rounded-3xl focus:ring-primary focus:border-primary text-foreground dark:text-white resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-16 rounded-2xl bg-primary hover:bg-primary-dark text-primary-foreground font-black text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Deploy Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
