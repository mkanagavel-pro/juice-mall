import React from 'react';
import { ShoppingBag, Phone, ArrowUpRight, Bike, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const OrderOnlineSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 relative bg-gradient-to-b from-[#0c0d10] via-[#14120e] to-[#0c0d10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel-warm p-8 sm:p-12 lg:p-16 border border-amber-500/30 overflow-hidden shadow-2xl text-center">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
              <Bike className="w-3.5 h-3.5 text-amber-400" />
              <span>Doorstep Delivery & Takeaway Available</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display mb-4">
              Craving Something?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed">
              Enjoy Juice Maall from wherever you are. Hot pizzas, chilled faloodas, refreshing fruit juices, and decadent cakes delivered fresh.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={BUSINESS_INFO.swiggySearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Online</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>

              <a
                href={BUSINESS_INFO.phoneDial}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card text-zinc-200 hover:text-white hover:border-amber-400 text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Delivery highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No-Contact Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Freshly Prepared to Order</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bike className="w-4 h-4 text-cyan-400" />
                <span>Available on Swiggy</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
