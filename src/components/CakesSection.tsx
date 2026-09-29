import React, { useState } from 'react';
import { Cake, Calendar, MessageSquare, Send, Sparkles, AlertCircle } from 'lucide-react';
import { CAKE_SHOWCASE, BUSINESS_INFO } from '../data/restaurantData';

interface CakesSectionProps {
  onOpenEnquiry: (type?: string) => void;
}

export const CakesSection: React.FC<CakesSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCakeType, setSelectedCakeType] = useState('Black Forest Cake');
  const [occasion, setOccasion] = useState('Birthday Celebration');
  const [preferredDate, setPreferredDate] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [weight, setWeight] = useState('1 Kg');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const cakeTypes = [
    'Black Forest Cake',
    'Royal Dutch Truffle',
    'Red Velvet Cream Cheese',
    'Custom Milestone Tier Cake',
    'Fresh Fruit Pastry Cake',
    'Custom Photo Cake'
  ];

  const occasions = [
    'Birthday Celebration',
    'Anniversary',
    'Family Gathering',
    'Kid\'s Milestone',
    'Office / Corporate Event',
    'Other Celebration'
  ];

  const weights = ['0.5 Kg', '1 Kg', '2 Kg', '3 Kg+'];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Juice Maall Salem!
I would like to enquire about a cake:
- Cake Type: ${selectedCakeType}
- Size / Weight: ${weight}
- Occasion: ${occasion}
- Preferred Date: ${preferredDate || 'To be decided'}
- Message on Cake: ${customMessage || 'None specified'}

Please confirm availability and details.`;

    const encoded = encodeURIComponent(text);
    setSubmittedFeedback(true);
    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    }, 400);
  };

  return (
    <section id="cakes" className="py-16 md:py-24 relative bg-[#0e1015] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
            <Cake className="w-4 h-4" />
            <span>Celebration Bakery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display text-balance">
            Make Your Celebration Sweeter.
          </h2>

          <p className="mt-4 text-base text-zinc-300">
            Handcrafted celebration cakes for birthdays, anniversaries, and family milestones in Salem.
          </p>

          {/* Mandatory Demo Showcase Disclaimer */}
          <div className="inline-flex items-center gap-1.5 mt-3 text-xs text-zinc-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Demo showcase — availability subject to confirmation.</span>
          </div>
        </div>

        {/* Cake Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CAKE_SHOWCASE.map((cake) => (
            <div
              key={cake.id}
              className="glass-card hover:glass-panel-warm rounded-2xl overflow-hidden border border-white/10 hover:border-rose-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-rose-300 border border-rose-500/20">
                  {cake.badge}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between text-left">
                <div>
                  <span className="text-[11px] font-medium text-rose-400 block mb-1">
                    {cake.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif-display group-hover:text-rose-300 transition-colors mb-2">
                    {cake.name}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                    {cake.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedCakeType(cake.name);
                    const formEl = document.getElementById('cake-enquiry-form');
                    formEl?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500 text-rose-300 hover:text-white text-xs font-semibold transition-all text-center cursor-pointer border border-rose-500/20"
                >
                  Select for Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Cake Enquiry Flow Form */}
        <div id="cake-enquiry-form" className="max-w-3xl mx-auto rounded-3xl glass-panel p-6 sm:p-10 border border-rose-500/20 shadow-2xl relative">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white font-serif-display">
                Quick Cake Enquiry on WhatsApp
              </h3>
              <p className="text-xs text-zinc-400">
                Choose your preferences and send an instant prefilled enquiry directly to 096003 20001.
              </p>
            </div>
          </div>

          <form onSubmit={handleWhatsAppSend} className="space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Cake Type */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Cake Flavour / Type
                </label>
                <select
                  value={selectedCakeType}
                  onChange={(e) => setSelectedCakeType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
                >
                  {cakeTypes.map((t) => (
                    <option key={t} value={t} className="bg-zinc-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Weight */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Preferred Size / Weight
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {weights.map((w) => (
                    <button
                      type="button"
                      key={w}
                      onClick={() => setWeight(w)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        weight === w
                          ? 'bg-rose-500 text-white border-rose-400 shadow-sm'
                          : 'bg-[#141720] border-white/10 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
                >
                  {occasions.map((o) => (
                    <option key={o} value={o} className="bg-zinc-900 text-white">
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

            </div>

            {/* Custom Message on Cake */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Message / Text on Cake (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Happy 25th Anniversary Mom & Dad! or Name"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-rose-400"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Cake Enquiry on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenEnquiry('Cake Enquiry')}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl glass-card text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                Regular Enquiry
              </button>
            </div>

            {submittedFeedback && (
              <div className="p-3 rounded-lg bg-emerald-950/70 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <Send className="w-4 h-4 shrink-0" />
                <span>Opening WhatsApp with your cake enquiry...</span>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};
