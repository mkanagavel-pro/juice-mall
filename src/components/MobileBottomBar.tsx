import React from 'react';
import { Phone, MessageSquare, UtensilsCrossed, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface MobileBottomBarProps {
  onOpenMenu: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenMenu }) => {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0c0d10]/95 backdrop-blur-lg border-t border-white/10 px-2 py-2">
      <div className="grid grid-cols-4 gap-1.5 items-center max-w-md mx-auto">
        
        {/* Call Now */}
        <a
          href={BUSINESS_INFO.phoneDial}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-semibold mt-1">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to enquire about your cafe in Salem.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-emerald-400 hover:bg-emerald-950/30 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] font-semibold mt-1">WhatsApp</span>
        </a>

        {/* Menu Anchor */}
        <a
          href="#menu"
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
        >
          <UtensilsCrossed className="w-4 h-4 text-amber-400" />
          <span className="text-[10px] font-semibold mt-1">Menu</span>
        </a>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 text-blue-400" />
          <span className="text-[10px] font-semibold mt-1">Directions</span>
        </a>

      </div>
    </aside>
  );
};
