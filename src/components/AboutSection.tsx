import React from 'react';
import { Users, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Ambience Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden glass-card p-2 md:p-3 shadow-2xl group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src="/src/assets/images/cafe_ambience_1790665556821.jpg"
                  alt="Juice Maall family dining cafe ambience in Gugai, Salem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Ambient Tag */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Atmosphere</p>
                      <p className="text-sm font-bold text-white">Spacious, Relaxed Family Dining</p>
                    </div>
                    <span className="text-xs text-zinc-300 bg-white/10 px-2.5 py-1 rounded-md">
                      110, Trichy Main Rd
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Prose */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <span>About Juice Maall Salem</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display leading-tight mb-6 text-balance">
              A Place for Food, Family & Celebrations.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
              Juice Maall brings together a relaxed family dining experience, refreshing beverages, desserts, cakes and celebration spaces. Whether you’re dropping in for a quick treat, enjoying time with family or planning a special occasion, Juice Maall is designed to bring food and moments together.
            </p>

            {/* Core Authentic Services list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-2">
              {BUSINESS_INFO.services.map((service) => (
                <div key={service} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Quick Summary Pill Quote */}
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-zinc-300 italic">
                “Come for food. Come for drinks. Come for cakes. Come for celebrations.”
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
