import React from 'react';
import { Phone, MapPin, ShoppingBag, ExternalLink, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080a] border-t border-white/10 pt-16 pb-28 md:pb-16 text-zinc-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-amber-500/20">
                JM
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-serif-display block">
                  JUICE MAALL
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  {BUSINESS_INFO.tamilName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Cafe • Cakes & Party Hall. A family-friendly food and celebration destination located at 110, Trichy Main Rd, Gugai, Salem.
            </p>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300">
                ⭐ {BUSINESS_INFO.googleRating} Google Rating ({BUSINESS_INFO.reviewCount})
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-300">
                {BUSINESS_INFO.priceRange}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#cakes" className="hover:text-amber-400 transition-colors">Cakes</a>
              </li>
              <li>
                <a href="#party-hall" className="hover:text-amber-400 transition-colors">Party Hall</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  110, Trichy Main Rd, Gugai, Salem, Tamil Nadu 636006
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={BUSINESS_INFO.phoneDial} className="text-white hover:text-amber-400 font-semibold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <p className="text-zinc-500 pt-1">
                Hours: 10:00 AM – 11:00 PM Daily
              </p>
            </div>
          </div>

          {/* Online Ordering */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Ordering
            </h4>
            <div className="space-y-3">
              <a
                href={BUSINESS_INFO.swiggySearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-orange-950/30 border border-orange-500/20 text-orange-300 hover:text-white hover:bg-orange-950/50 transition-all text-xs font-semibold group"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-orange-400" />
                  <span>Order on Swiggy</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to order food for takeaway.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 hover:text-white hover:bg-emerald-950/50 transition-all text-xs font-semibold"
              >
                <span>Takeaway via WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar with Mandatory Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Mandatory Demo Disclaimer */}
          <div className="text-xs text-amber-300/80 font-medium">
            “Concept website demo by KEAGROW — Not the official website.”
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span>Juice Maall • Gugai, Salem</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
