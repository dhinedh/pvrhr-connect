import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container-narrow mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-extrabold text-primary-foreground mb-4">PVRHR</h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Leading recruitment and manpower solutions provider for modern industries across Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Clients", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {["Recruitment", "Manpower Supply", "HR Administration", "Payroll Management", "Compliance"].map((s) => (
                <li key={s} className="text-sm text-primary-foreground/60">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-primary-foreground/40 mb-5">Contact Us</h4>
            <div className="space-y-4 text-sm text-primary-foreground/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-foreground/40" />
                <span>No.23, V.M Nagar, Thiruvallur – 602001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-primary-foreground/40" />
                <a href="tel:+919080022346" className="hover:text-primary-foreground transition-colors">+91 90800 22346</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-primary-foreground/40" />
                <a href="mailto:admoffice.pvrhrs@gmail.com" className="hover:text-primary-foreground transition-colors">admoffice.pvrhrs@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} PVRHR Solutions and Services Pvt Ltd</p>
          <p>Designed with care in Tamil Nadu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
