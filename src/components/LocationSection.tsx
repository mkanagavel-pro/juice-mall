import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            Visit Our Cafe & Hall
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display">
            Find Us in Salem
          </h2>
          <p className="mt-3 text-sm text-zinc-300">
            Conveniently situated along Trichy Main Road in Gugai, Salem.
          </p>
        </div>

        {/* Location Details & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours & Action Buttons */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-start gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium mb-2">
                    {BUSINESS_INFO.tamilName}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    110, Trichy Main Rd, Gugai,<br />
                    Salem (M.Corp.),<br />
                    Tamil Nadu 636006
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 mb-6 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Opening Hours</h4>
                  <p className="text-xs text-zinc-300">{BUSINESS_INFO.hours}</p>
                  <span className="text-[11px] text-emerald-400 font-semibold mt-1 inline-block">
                    ● Open Today for Dine-in & Delivery
                  </span>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-3.5 mb-8 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Direct Line</h4>
                  <a
                    href={BUSINESS_INFO.phoneDial}
                    className="text-sm font-semibold text-amber-400 hover:underline block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-[11px] text-zinc-400">For table reservations & hall enquiries</span>
                </div>
              </div>
            </div>

            {/* Quick Action Trigger Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-white/10">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={BUSINESS_INFO.phoneDial}
                  className="py-3 px-3 rounded-xl glass-card hover:bg-white/10 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to visit or enquire about your cafe in Gugai, Salem.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl glass-card hover:bg-emerald-950/40 text-emerald-400 border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 glass-panel p-2.5 sm:p-3 rounded-3xl border border-white/10 flex flex-col min-h-[380px] shadow-xl">
            <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5">
              <iframe
                title="Juice Maall Salem Location Map"
                src="https://maps.google.com/maps?q=110%2C%20Trichy%20Main%20Rd%2C%20Gugai%2C%20Salem%2C%20Tamil%20Nadu%20636006&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-xl grayscale-[20%] contrast-[105%]"
              />

              {/* Floating map pin indicator */}
              <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-lg pointer-events-none flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Juice Maall • Gugai, Salem</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
