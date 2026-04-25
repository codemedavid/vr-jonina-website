import React, { useEffect, useState } from 'react';
import { ArrowRight, Heart, Sparkles, Star } from 'lucide-react';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #FFF0F5 0%, #FFE4EE 30%, #FFF5F7 70%, #FFFFFF 100%)' }}>

      {/* ── Ribbon Decorations ── */}

      {/* Top left ribbon bow */}
      <svg className="absolute top-6 left-6 w-32 h-32 opacity-20 animate-ribbon-sway" viewBox="0 0 120 120" fill="none">
        <path d="M60 50 Q30 20 15 45 Q5 65 40 55 Z" fill="#FF85A2" />
        <path d="M60 50 Q90 20 105 45 Q115 65 80 55 Z" fill="#E8739B" />
        <path d="M55 50 Q60 70 65 50 Q60 55 55 50 Z" fill="#D4568A" />
        <path d="M50 55 Q60 90 70 55" stroke="#FF85A2" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M45 65 Q60 100 75 65" stroke="#FFB6C8" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      {/* Top right ribbon bow */}
      <svg className="absolute top-10 right-10 w-28 h-28 opacity-15" viewBox="0 0 120 120" fill="none">
        <path d="M60 50 Q30 20 15 45 Q5 65 40 55 Z" fill="#FFB6C8" />
        <path d="M60 50 Q90 20 105 45 Q115 65 80 55 Z" fill="#FF9BB4" />
        <path d="M55 50 Q60 70 65 50 Q60 55 55 50 Z" fill="#E8739B" />
        <path d="M50 55 Q60 85 70 55" stroke="#FFB6C8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Floating hearts */}
      <Heart className="absolute top-[15%] left-[15%] w-6 h-6 text-brand-300 opacity-30 animate-float" style={{ animationDelay: '0s' }} fill="currentColor" />
      <Heart className="absolute top-[25%] right-[20%] w-4 h-4 text-brand-400 opacity-25 animate-float" style={{ animationDelay: '1s' }} fill="currentColor" />
      <Heart className="absolute bottom-[30%] left-[10%] w-5 h-5 text-brand-200 opacity-35 animate-float" style={{ animationDelay: '2s' }} fill="currentColor" />
      <Heart className="absolute bottom-[20%] right-[15%] w-7 h-7 text-brand-300 opacity-20 animate-float" style={{ animationDelay: '3s' }} fill="currentColor" />
      <Heart className="absolute top-[40%] left-[5%] w-3 h-3 text-brand-400 opacity-30 animate-float" style={{ animationDelay: '1.5s' }} fill="currentColor" />

      {/* Sparkle decorations */}
      <Sparkles className="absolute top-[20%] right-[30%] w-5 h-5 text-brand-300 opacity-25 animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-[25%] left-[25%] w-4 h-4 text-brand-400 opacity-20 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      <Star className="absolute top-[35%] right-[8%] w-4 h-4 text-brand-200 opacity-25 animate-sparkle" style={{ animationDelay: '2.5s' }} fill="currentColor" />

      {/* Soft pink blobs */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl animate-pulse"
        style={{ background: '#FFB6C8', animationDuration: '7s' }}
      />
      <div
        className="absolute -bottom-32 -right-20 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ background: '#FFCDD8', animationDuration: '9s' }}
      />
      <div
        className="absolute bottom-20 left-[8%] w-[200px] h-[200px] rounded-full opacity-15 blur-2xl animate-pulse"
        style={{ background: 'radial-gradient(circle, #E8739B, transparent 70%)', animationDuration: '8s' }}
      />

      {/* Ribbon border top */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'linear-gradient(90deg, #FFB6C8, #E8739B, #FF85A2, #FFB6C8, #E8739B)' }} />

      {/* ── Main Content ── */}
      <div className={`
        relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-4 sm:px-6 py-20
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>

        {/* Ribbon Banner */}
        <div className="relative mb-6">
          <div className="px-6 py-2 rounded-full text-brand-700 text-xs font-semibold tracking-widest uppercase" style={{ background: 'linear-gradient(135deg, #FFE4EE, #FFB6C8)' }}>
            <span className="flex items-center gap-2">
              <Heart className="w-3 h-3" fill="currentColor" />
              Your Trusted Peptide Partner
              <Heart className="w-3 h-3" fill="currentColor" />
            </span>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold mb-4 leading-tight tracking-tight" style={{ color: '#4A3040' }}>
          VR <span style={{ color: '#E8739B' }}>Jonina</span>
        </h1>

        {/* Subtitle with ribbon divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-brand-300" />
          <Heart className="w-4 h-4 text-brand-400" fill="currentColor" />
          <div className="h-px w-12 bg-brand-300" />
        </div>

        <p className="text-lg md:text-xl text-charcoal-400 mb-10 leading-relaxed font-light max-w-lg font-cute">
          Premium peptide sets curated with love. Quality you can trust, prices you'll adore.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-8 py-4 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            style={{ background: 'linear-gradient(135deg, #FFB6C8, #E8739B)' }}
          >
            <Heart className="w-5 h-5" fill="currentColor" />
            Shop Our Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-300 text-brand-500 hover:bg-brand-50 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            View Sets
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 border-t border-brand-200 pt-8 w-full">
          {[
            { icon: Heart, label: 'Curated with Love' },
            { icon: Sparkles, label: 'Premium Quality' },
            { icon: Star, label: 'Trusted Reseller' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm font-medium text-charcoal-400 font-cute">
              <item.icon className="w-4 h-4 text-brand-400" fill={item.icon === Heart ? 'currentColor' : 'none'} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
