import { useState, useEffect } from 'react';
import { Mail, X, Check, Sparkles } from 'lucide-react';
import posthog from 'posthog-js';

const BANNER_DISMISSED_KEY = 'biorich_banner_dismissed';

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(() => localStorage.getItem(BANNER_DISMISSED_KEY) === 'true');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  useEffect(() => {
    if (showConfirmPopup) {
      const timer = setTimeout(() => setShowConfirmPopup(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setShowConfirmPopup(true);
    // Only capture event — do NOT identify here to avoid cross-customer
    // identity merging when a different customer checks out later on the same device
    posthog.capture('vrjonina_promo_banner', { email: trimmed });
  };

  const close = () => {
    setDismissed(true);
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
  };

  if (dismissed) return null;

  return (
    <>
      {/* Banner */}
      <div className="w-full py-1.5 sm:py-2 px-3 sm:px-4 pr-8 sm:pr-10 relative" style={{ background: 'linear-gradient(135deg, #FFB6C8, #E8739B)' }}>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3">
          <span className="text-white text-[11px] sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Get notified about promos & discounts!
          </span>

          {status === 'success' ? (
            <span className="text-white text-[11px] sm:text-sm font-medium flex items-center gap-1 sm:gap-1.5">
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Subscribed!
            </span>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-1.5 sm:gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                placeholder="Enter your email"
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-sm bg-white/90 text-pink-800 placeholder-pink-300 border-2 focus:outline-none transition-colors w-40 sm:w-56 ${
                  status === 'error' ? 'border-red-400' : 'border-transparent focus:border-white/50'
                }`}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-sm font-semibold bg-white text-pink-600 hover:bg-pink-50 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>

        <button
          onClick={close}
          className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
        </button>
      </div>

      {/* Confirmation Popup */}
      {showConfirmPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={() => setShowConfirmPopup(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up"
            style={{ background: 'linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #FFB6C8, #E8739B, #FFB6C8)' }} />
            <div className="px-8 pt-8 pb-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center">
                  <Sparkles size={32} className="text-pink-500" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-pink-700 font-display mb-2">
                Thank You for Subscribing!
              </h2>
              <p className="text-pink-600/80 text-sm mb-6">
                You will now receive notifications about our latest promos & exclusive discounts. Stay tuned!
              </p>
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #FFB6C8, #E8739B)' }}
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
