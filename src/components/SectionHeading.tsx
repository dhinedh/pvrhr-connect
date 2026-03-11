interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-foreground leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-5 divider-gradient ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
