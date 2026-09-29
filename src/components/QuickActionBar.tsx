import React from 'react';
import { UtensilsCrossed, Cake, PartyPopper, MessageSquare, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface QuickActionBarProps {
  onOpenEnquiry: (type?: string) => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenEnquiry }) => {
  const actions = [
    {
      label: 'Explore Menu',
      sublabel: 'Food, Juices & Shakes',
      icon: UtensilsCrossed,
      href: '#menu',
      isAnchor: true,
      color: 'from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30'
    },
    {
      label: 'Order Cakes',
      sublabel: 'Birthday & Special',
      icon: Cake,
      href: '#cakes',
      isAnchor: true,
      color: 'from-rose-500/20 to-rose-600/10 text-rose-400 border-rose-500/30'
    },
    {
      label: 'Party Hall',
      sublabel: 'Celebrations & Events',
      icon: PartyPopper,
      href: '#party-hall',
      isAnchor: true,
      color: 'from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30'
    },
    {
      label: 'WhatsApp',
      sublabel: 'Instant Enquiry',
      icon: MessageSquare,
      href: `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to enquire about your menu, cakes and party hall in Salem.")}`,
      isExternal: true,
      color: 'from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30'
    },
    {
      label: 'Get Directions',
      sublabel: 'Gugai, Salem',
      icon: Navigation,
      href: BUSINESS_INFO.googleMapsUrl,
      isExternal: true,
      color: 'from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/30'
    }
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="glass-panel p-2.5 sm:p-3 rounded-2xl shadow-xl shadow-black/50 border border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {actions.map((act) => {
            const Icon = act.icon;
            const content = (
              <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-[#141720]/80 hover:bg-[#1a1e2a] border border-white/5 hover:border-amber-500/30 transition-all duration-200 group h-full">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${act.color} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left overflow-hidden">
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-300 block truncate">
                    {act.label}
                  </span>
                  <span className="text-[10px] text-zinc-400 block truncate">
                    {act.sublabel}
                  </span>
                </div>
              </div>
            );

            if (act.isExternal) {
              return (
                <a
                  key={act.label}
                  href={act.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus-visible:outline-amber-400"
                >
                  {content}
                </a>
              );
            }

            return (
              <a
                key={act.label}
                href={act.href}
                className="block focus-visible:outline-amber-400"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
