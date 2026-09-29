import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-panel-warm border border-emerald-500/30 text-xs text-white shadow-xl animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Chat with us on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-zinc-400 hover:text-white"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to enquire about your cafe, cakes & celebrations in Salem.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (096003 20001)"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
};
