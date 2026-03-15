import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart, Truck, HelpCircle, FileText, BookOpen } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onMenuClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="backdrop-blur-sm sticky top-0 z-50 border-b border-brand-200" style={{ background: 'linear-gradient(135deg, rgba(255,240,245,0.97), rgba(255,250,252,0.97))' }}>
        {/* Top ribbon strip */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #FFB6C8, #E8739B, #FF85A2, #FFB6C8)' }} />
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo / Brand Name */}
            <button
              onClick={() => { onMenuClick(); setMobileMenuOpen(false); }}
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-brand-500" fill="currentColor" />
              <span className="font-heading text-xl sm:text-2xl font-semibold tracking-tight">
                <span className="text-charcoal-800">VR</span>{' '}
                <span className="text-brand-500">Jonina</span>
              </span>
            </button>

            {/* Right Side Navigation */}
            <div className="flex items-center gap-2 md:gap-6 ml-auto">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                <button
                  onClick={onMenuClick}
                  className="text-sm font-medium text-charcoal-600 hover:text-brand-600 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 font-cute"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Products
                </button>
                <a
                  href="/track-order"
                  className="text-sm font-medium text-charcoal-600 hover:text-brand-600 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 font-cute"
                >
                  <Truck className="w-4 h-4" />
                  Track Order
                </a>
                <a
                  href="/faq"
                  className="text-sm font-medium text-charcoal-600 hover:text-brand-600 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 font-cute"
                >
                  <HelpCircle className="w-4 h-4" />
                  FAQ
                </a>
                <a
                  href="/coa"
                  className="text-sm font-medium text-charcoal-600 hover:text-brand-600 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 font-cute"
                >
                  <FileText className="w-4 h-4" />
                  COA
                </a>
                <a
                  href="/protocols"
                  className="text-sm font-medium text-charcoal-600 hover:text-brand-600 px-4 py-2 rounded-xl transition-colors flex items-center gap-2 font-cute"
                >
                  <BookOpen className="w-4 h-4" />
                  Protocols
                </a>
              </nav>

              {/* Cart Button */}
              <button
                onClick={onCartClick}
                className="relative p-2.5 text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1" style={{ background: 'linear-gradient(135deg, #FF85A2, #E8739B)' }}>
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-brand-900/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar Drawer */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[300px] shadow-2xl border-l border-brand-200 flex flex-col"
            style={{ background: 'linear-gradient(180deg, #FFF0F5, #FFFFFF)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-brand-200">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-500" fill="currentColor" />
                <span className="font-heading text-lg font-semibold">
                  <span className="text-charcoal-800">VR</span>{' '}
                  <span className="text-brand-500">Jonina</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal-400 hover:text-brand-500 transition-colors rounded-xl hover:bg-brand-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => {
                    onMenuClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-charcoal-700 hover:bg-brand-50 transition-colors font-cute"
                >
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-500">
                    <Heart className="w-[18px] h-[18px]" fill="currentColor" />
                  </div>
                  Products
                </button>

                <a
                  href="/track-order"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-charcoal-700 hover:bg-brand-50 transition-colors font-cute"
                >
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-500">
                    <Truck className="w-[18px] h-[18px]" />
                  </div>
                  Track Order
                </a>

                <a
                  href="/faq"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-charcoal-700 hover:bg-brand-50 transition-colors font-cute"
                >
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-500">
                    <HelpCircle className="w-[18px] h-[18px]" />
                  </div>
                  FAQ
                </a>

                <a
                  href="/coa"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-charcoal-700 hover:bg-brand-50 transition-colors font-cute"
                >
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-500">
                    <FileText className="w-[18px] h-[18px]" />
                  </div>
                  Certificate of Analysis
                </a>

                <a
                  href="/protocols"
                  className="flex items-center gap-3 p-4 rounded-xl text-left font-medium text-charcoal-700 hover:bg-brand-50 transition-colors font-cute"
                >
                  <div className="p-2 rounded-xl bg-brand-50 text-brand-500">
                    <BookOpen className="w-[18px] h-[18px]" />
                  </div>
                  Protocols
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
