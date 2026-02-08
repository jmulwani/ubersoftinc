import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-hero-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <p className="text-primary-foreground/70 leading-relaxed">
              Ready to improve your organization's performance? We'd love to hear from you.
              Reach out and let's discuss how we can help transform your IT infrastructure.
            </p>
            <div className="space-y-6">
              {[
                { icon: Mail, text: "info@ubersoftinc.com", href: "mailto:info@ubersoftinc.com" },
                { icon: Phone, text: "+1 647-899-0032", href: "tel:+16478990032" },
                { icon: MapPin, text: "2391 Erin Centre Blvd, Mississauga, ON L5M5B2, Canada", href: "#" },
              ].map((item) => (
                <a 
                  key={item.text} 
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 border border-gold/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-section-dark transition-colors" />
                  </div>
                  <span className="text-primary-foreground/80 group-hover:text-gold transition-colors pt-3">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-primary-foreground/50 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-primary-foreground/60 hover:text-gold text-sm transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Name *"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition"
            />
            <textarea
              placeholder="Message *"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-4 bg-white/5 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition resize-none"
            />
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-gold text-section-dark font-semibold py-4 hover:bg-gold/90 transition-colors text-sm uppercase tracking-wider disabled:opacity-70"
            >
              {submitted ? "Message Sent!" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
