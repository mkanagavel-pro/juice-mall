import React from 'react';
import { PartyPopper, Calendar, MessageSquare, Sparkles, Check, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface PartyHallSectionProps {
  onOpenEnquiry: (type?: string) => void;
}

export const PartyHallSection: React.FC<PartyHallSectionProps> = ({ onOpenEnquiry }) => {
  const celebrationTypes = [
    'Birthday Parties & Kids Celebrations',
    'Family Get-Togethers & Reunions',
    'Anniversary Celebrations',
    'Pre-Wedding & Ring Ceremonies',
    'Farewells, Office & Milestone Events'
  ];

  return (
    <section id="party-hall" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <PartyPopper className="w-4 h-4 text-purple-400" />
            <span>Celebrations in Salem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display text-balance">
            Your Celebration. Your Space.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Planning a birthday, family gathering or special occasion? Explore the party hall experience and enquire about availability.
          </p>
        </div>

        {/* Cinematic Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl glass-panel p-6 sm:p-10 border border-purple-500/20 shadow-2xl relative">
          
          {/* Left Column: Cinematic Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 group shadow-xl">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src="/src/assets/images/party_hall_space_1790665583341.jpg"
                  alt="Juice Maall celebration party hall with fairy lights and festive seating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Celebration badge */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-semibold text-purple-300 border border-purple-500/20">
                  Hall & Dining Integrated
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                    Moments Made Special
                  </p>
                  <p className="text-lg font-bold text-white font-serif-display">
                    Delicious Food, Juices & Memorable Ambience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Enquiries */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                  Bookings & Enquiries Open
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white font-serif-display mb-4">
                Celebrate with Family & Friends
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Host your loved ones in a warm, festive hall environment paired with our complete cafe and dining menu, signature mocktails, and customized celebration cakes.
              </p>

              {/* Types of celebrations */}
              <div className="space-y-2.5 mb-6">
                {celebrationTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>

              {/* Strict Notice: Details available on enquiry */}
              <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 flex items-start gap-2.5 mb-6">
                <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Hall Capacity & Custom Menus:</span>
                  <span className="text-zinc-300">Details available on enquiry. Contact our hospitality team for exact slots and tailored arrangements.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEnquiry('Party Hall Enquiry')}
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-purple-500/20 active:scale-98 transition-all cursor-pointer"
              >
                Enquire About Party Hall
              </button>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to enquire about Party Hall availability and arrangements for a celebration in Salem.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl glass-card text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
