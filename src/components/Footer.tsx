import React from 'react';
import { Truck, Heart, HelpCircle, FileText, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 border-t border-brand-200" style={{ background: 'linear-gradient(180deg, #4A3040, #3E2835)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-7 h-7 text-brand-400" fill="currentColor" />
              <span className="font-heading text-2xl font-semibold">
                <span className="text-white">VR</span>{' '}
                <span className="text-brand-400">Jonina</span>
              </span>
            </div>
            <p className="text-charcoal-300 text-sm max-w-xs text-center md:text-left font-cute">
              Your trusted peptide partner. Premium sets curated with love, quality you can count on.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2 font-cute">Quick Links</h3>
            <a
              href="#"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm font-cute"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Products
            </a>
            <a
              href="/track-order"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm font-cute"
            >
              <Truck className="w-4 h-4" />
              Track Order
            </a>
            <a
              href="/faq"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm font-cute"
            >
              <HelpCircle className="w-4 h-4" />
              FAQ
            </a>
            <a
              href="/coa"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm font-cute"
            >
              <FileText className="w-4 h-4" />
              Certificate of Analysis
            </a>
            <a
              href="/protocols"
              className="text-charcoal-300 hover:text-brand-400 transition-colors flex items-center gap-2 text-sm font-cute"
            >
              <BookOpen className="w-4 h-4" />
              Protocols
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, #E8739B, transparent)' }} />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-xs text-charcoal-400 flex items-center justify-center gap-1 font-cute">
            Made with <Heart className="w-3 h-3 text-brand-400 inline" fill="currentColor" /> &copy; {currentYear} VR Jonina.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
