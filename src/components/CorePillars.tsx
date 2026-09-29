import React from 'react';
import { ArrowRight, Utensils, Cake, PartyPopper } from 'lucide-react';

interface CorePillarsProps {
  onOpenEnquiry: (type?: string) => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ onOpenEnquiry }) => {
  const pillars = [
    {
      index: "01",
      title: "Cafe & Food",
      category: "Dine-in & Bites",
      description: "Enjoy a variety of food, quick bites and refreshing beverages in a comfortable family-friendly setting.",
      cta: "Explore Menu",
      href: "#menu",
      isAnchor: true,
      image: "/src/assets/images/hero_juice_spread_1790665542301.jpg",
      icon: Utensils,
      color: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400"
    },
    {
      index: "02",
      title: "Cakes & Desserts",
      category: "Celebration Bakery",
      description: "Make every celebration sweeter with cakes and indulgent desserts freshly prepared for your occasions.",
      cta: "Explore Cakes",
      href: "#cakes",
      isAnchor: true,
      image: "/src/assets/images/celebration_cakes_1790665570904.jpg",
      icon: Cake,
      color: "from-rose-500/20 to-rose-600/10 border-rose-500/30 text-rose-400"
    },
    {
      index: "03",
      title: "Party Hall",
      category: "Celebrations & Gatherings",
      description: "Bring your family and friends together for memorable celebrations in our dedicated event hall space.",
      cta: "Enquire for Party Hall",
      href: "#party-hall",
      isAnchor: true,
      image: "/src/assets/images/party_hall_space_1790665583341.jpg",
      icon: PartyPopper,
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative bg-[#0e1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            The Three Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display text-balance">
            Everything Under One Roof.
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            From casual conversations over fresh juice to large family milestones, experience the complete hospitality destination.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-3xl overflow-hidden glass-card hover:glass-panel-warm transition-all duration-300 flex flex-col justify-between border border-white/10 hover:border-amber-500/40 hover:-translate-y-1 shadow-lg shadow-black/40"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-transparent pointer-events-none" />
                  
                  {/* Pillar Index */}
                  <div className="absolute top-4 left-4 font-mono font-bold text-sm tracking-wider px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-amber-400 border border-white/10">
                    {pillar.index}
                  </div>

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between text-left">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400/90 block mb-1">
                      {pillar.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-display mb-3 group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <a
                    href={pillar.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors pt-3 border-t border-white/10"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
