import React from 'react';
import { Truck, FlaskConical, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 pt-16 pb-8 border-t border-charcoal-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/logo.png"
              alt="BIORICH"
              className="h-14 w-auto object-contain bg-white/10 rounded-lg p-2"
            />
            <p className="text-charcoal-400 text-sm max-w-xs text-center md:text-left">
              Advanced peptide solutions designed for innovation and research. Lab-tested, high-purity formulations you can trust.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</h3>
            <a
              href="mailto:Reechsendin@gmail.com"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              Reechsendin@gmail.com
            </a>
            <div className="text-charcoal-300 flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4" />
              Marilao, Bulacan
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Quick Links</h3>
            <a
              href="#"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm"
            >
              <FlaskConical className="w-4 h-4" />
              Products
            </a>
            <a
              href="/track-order"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm"
            >
              <Truck className="w-4 h-4" />
              Track Order
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-charcoal-800 mb-6" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-xs text-charcoal-500 flex items-center justify-center gap-1">
            Made with
            © {currentYear} BIORICH.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
