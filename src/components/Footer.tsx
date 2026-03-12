import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white/40 dark:bg-black/80 pt-24 pb-12 overflow-hidden border-t border-white/20 dark:border-white/5 backdrop-blur-xl">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <h3 className="text-4xl font-heading font-black text-foreground dark:text-white tracking-tighter transition-transform group-hover:scale-105">
                PVRHR<span className="text-primary italic">.</span>
              </h3>
            </Link>
            <p className="text-foreground/60 text-lg leading-relaxed font-medium max-w-sm">
              Architecting the future of industrial talent with precision, innovation, and strategic excellence.
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Strategic Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["About", "Services", "Clients", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-foreground/60 hover:text-primary dark:hover:text-primary transition-all duration-300 text-[15px] font-bold flex items-center group/link"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-all -translate-y-1 translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industry Verticals */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-primary mb-8">Specializations</h4>
            <ul className="space-y-4 text-foreground/60 text-[15px] font-bold">
              {[
                "Industrial Recruitment",
                "Workforce Logistics",
                "Strategic HR Audits",
                "Compliance Engineering",
                "Technical Staffing"
              ].map((s) => (
                <li key={s} className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary/30" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-[0.2em] text-primary mb-8">Headquarters</h4>
            <div className="space-y-6 text-foreground/60 text-[15px] font-bold">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="leading-relaxed font-medium">No.23, V.M Nagar, Thiruvallur, <br />Tamil Nadu – 602001</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919080022346" className="hover:text-primary transition-colors">+91 90800 22346</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:admoffice.pvrhrs@gmail.com" className="hover:text-primary transition-colors">admoffice.pvrhrs@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Attribution */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-foreground/30 text-sm font-light">
            © {new Date().getFullYear()} PVRHR Solutions and Services Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-foreground/40 text-sm font-medium tracking-wide">
              Crafted with Excellence in <span className="text-primary italic font-bold">Tamil Nadu</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
