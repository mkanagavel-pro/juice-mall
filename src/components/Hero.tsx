import React from 'react';
import { Star, MapPin, IndianRupee, ArrowRight, Sparkles, Utensils, Cake, PartyPopper } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenEnquiry: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Trust badge kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Salem’s Favourite Food & Celebration Landmark</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-serif-display leading-[1.15] mb-5 text-balance">
              More Than a Meal. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-300 to-amber-200">
                It’s a Moment.
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-xl">
              Fresh flavours, refreshing drinks, delicious cakes and memorable celebrations — all under one roof in Gugai, Salem.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm uppercase tracking-wide shadow-lg shadow-amber-500/25 active:scale-98 transition-all"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#party-hall"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl glass-card text-zinc-200 hover:text-white hover:border-amber-400/40 text-sm font-semibold transition-all"
              >
                <span>Plan Your Celebration</span>
              </a>
            </div>

            {/* Social Proof & Pricing Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Google Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold ml-1 text-white tabular-nums">
                    {BUSINESS_INFO.googleRating}
                  </span>
                </div>
                <span className="text-xs text-zinc-400">
                  {BUSINESS_INFO.reviewCount} Google Reviews
                </span>
              </div>

              {/* Price range */}
              <div className="flex flex-col border-l border-white/10 pl-4">
                <div className="flex items-center gap-1 text-zinc-200 font-bold text-sm tabular-nums">
                  <IndianRupee className="w-3.5 h-3.5 text-amber-400" />
                  <span>200–400</span>
                </div>
                <span className="text-xs text-zinc-400">per person average</span>
              </div>

              {/* Location pin */}
              <div className="flex flex-col border-l border-white/10 pl-4 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1 text-zinc-200 font-medium text-xs truncate">
                  <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span className="truncate">Gugai, Salem</span>
                </div>
                <span className="text-xs text-zinc-400">Trichy Main Road</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 md:p-3 shadow-2xl shadow-black/80 group">
              {/* Image Frame with Overlay Scrim */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src="/src/assets/images/hero_juice_spread_1790665542301.jpg"
                  alt="Juice Maall fresh juices, food spread, falooda and cakes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Floating badge top right */}
                <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Dine-in • Takeaway • Delivery</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="text-left">
                    <p className="text-xs text-amber-400/90 font-medium">Signature Experience</p>
                    <p className="text-base sm:text-lg font-bold text-white font-serif-display">
                      Juices • Pizzas • Faloodas • Celebrations
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry('Table / Dining Enquiry')}
                    className="hidden sm:inline-flex px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors cursor-pointer"
                  >
                    Reserve Table
                  </button>
                </div>
              </div>
            </div>

            {/* Experience highlight pills underneath */}
            <div className="grid grid-cols-3 gap-2.5 mt-3">
              <a
                href="#menu"
                className="glass-card hover:glass-panel-warm p-2.5 rounded-xl flex items-center gap-2 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-zinc-200 block group-hover:text-amber-400">Cafe & Bites</span>
                  <span className="text-[10px] text-zinc-400">Popular tastes</span>
                </div>
              </a>

              <a
                href="#cakes"
                className="glass-card hover:glass-panel-warm p-2.5 rounded-xl flex items-center gap-2 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                  <Cake className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-zinc-200 block group-hover:text-rose-400">Fresh Cakes</span>
                  <span className="text-[10px] text-zinc-400">Custom orders</span>
                </div>
              </a>

              <a
                href="#party-hall"
                className="glass-card hover:glass-panel-warm p-2.5 rounded-xl flex items-center gap-2 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <PartyPopper className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-semibold text-zinc-200 block group-hover:text-indigo-400">Party Hall</span>
                  <span className="text-[10px] text-zinc-400">Family events</span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
