import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, FlaskConical, Award } from 'lucide-react';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[90vh] overflow-hidden bg-white flex items-center justify-center">

      {/* ── Background Decorative Elements ── */}

      {/* Soft pink blob - top left */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl animate-pulse"
        style={{ background: '#FDE7F3', animationDuration: '7s' }}
      />

      {/* Soft pink blob - bottom right */}
      <div
        className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-pulse"
        style={{ background: '#F48FB1', animationDuration: '9s' }}
      />

      {/* Purple gradient circle - top right */}
      <div
        className="absolute top-16 right-[10%] w-[250px] h-[250px] rounded-full opacity-15 blur-2xl"
        style={{ background: 'radial-gradient(circle, #C9A6E8, transparent 70%)' }}
      />

      {/* Purple gradient circle - bottom left */}
      <div
        className="absolute bottom-20 left-[8%] w-[200px] h-[200px] rounded-full opacity-20 blur-2xl animate-pulse"
        style={{ background: 'radial-gradient(circle, #8E5FBF, transparent 70%)', animationDuration: '8s' }}
      />

      {/* Small pink accent blob - mid right */}
      <div
        className="absolute top-1/2 right-[5%] w-[120px] h-[120px] rounded-full opacity-20 blur-xl"
        style={{ background: '#F48FB1' }}
      />

      {/* ── Floral Line Art SVGs ── */}

      {/* Floral element - top right */}
      <svg
        className="absolute top-12 right-12 w-40 h-40 opacity-[0.07] text-brand-500"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M100 20 C120 50, 150 60, 180 50 C160 80, 150 110, 160 140 C130 130, 110 140, 100 170 C90 140, 70 130, 40 140 C50 110, 40 80, 20 50 C50 60, 80 50, 100 20Z" />
        <circle cx="100" cy="95" r="15" />
        <path d="M100 60 Q110 80, 100 95 Q90 80, 100 60" />
        <path d="M130 75 Q115 85, 100 95 Q115 95, 130 75" />
        <path d="M125 120 Q115 105, 100 95 Q110 110, 125 120" />
        <path d="M75 120 Q85 105, 100 95 Q90 110, 75 120" />
        <path d="M70 75 Q85 85, 100 95 Q85 95, 70 75" />
      </svg>

      {/* Floral element - bottom left */}
      <svg
        className="absolute bottom-16 left-12 w-36 h-36 opacity-[0.06] text-brand-400"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M100 30 Q130 60, 160 50 Q140 90, 160 130 Q120 120, 100 160 Q80 120, 40 130 Q60 90, 40 50 Q70 60, 100 30Z" />
        <circle cx="100" cy="95" r="12" />
        <path d="M100 10 C100 10, 95 50, 100 95" />
        <path d="M100 180 C100 180, 105 140, 100 95" />
        <path d="M20 95 C20 95, 60 90, 100 95" />
        <path d="M180 95 C180 95, 140 100, 100 95" />
      </svg>

      {/* Vine / leaf line art - left side */}
      <svg
        className="absolute top-1/3 left-4 w-16 h-64 opacity-[0.06] text-brand-300"
        viewBox="0 0 60 250"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M30 250 C30 200, 25 180, 30 150 C35 120, 25 100, 30 70 C35 40, 30 20, 30 0" />
        <path d="M30 200 C15 190, 8 175, 10 160" />
        <path d="M30 160 C45 150, 52 135, 50 120" />
        <path d="M30 120 C15 110, 8 95, 10 80" />
        <path d="M30 80 C45 70, 52 55, 50 40" />
      </svg>

      {/* Vine / leaf line art - right side */}
      <svg
        className="absolute top-1/4 right-4 w-16 h-64 opacity-[0.06] text-brand-300"
        viewBox="0 0 60 250"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M30 250 C30 200, 35 180, 30 150 C25 120, 35 100, 30 70 C25 40, 30 20, 30 0" />
        <path d="M30 210 C45 200, 52 185, 50 170" />
        <path d="M30 170 C15 160, 8 145, 10 130" />
        <path d="M30 130 C45 120, 52 105, 50 90" />
        <path d="M30 90 C15 80, 8 65, 10 50" />
      </svg>

      {/* ── Main Content (Centered) ── */}
      <div className={`
        relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-4 sm:px-6 py-20
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>

        {/* Logo */}
        <div className="mb-6">
          <img
            src="/logo.png"
            alt="IgorotaPepGlow"
            className="h-24 sm:h-28 md:h-32 w-auto object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-charcoal-900 mb-4 leading-tight tracking-tight">
          IgorotaPepGlow
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-charcoal-500 mb-10 leading-relaxed font-light max-w-lg">
          Beauty and wellness inspired by culture and nature.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            style={{ background: 'linear-gradient(135deg, #F48FB1, #8E5FBF)' }}
          >
            Shop Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-300 text-brand-500 hover:bg-brand-50 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 border-t border-charcoal-100 pt-8 w-full">
          {[
            { icon: Shield, label: '99% Purity Guaranteed' },
            { icon: FlaskConical, label: 'Lab Tested' },
            { icon: Award, label: 'Premium Grade' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm font-medium text-charcoal-500">
              <item.icon className="w-4 h-4 text-brand-400" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
