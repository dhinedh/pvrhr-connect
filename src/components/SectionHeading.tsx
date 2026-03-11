import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : "text-left"}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground dark:text-white leading-[1.1] tracking-tight mb-4 text-balance"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`text-lg md:text-xl font-light text-foreground leading-relaxed max-w-3xl text-balance ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
        className={`mt-8 h-1 rounded-full bg-gradient-to-r from-primary via-primary-light to-accent ${centered ? "mx-auto" : ""}`} 
      />
    </div>
  );
};

export default SectionHeading;
