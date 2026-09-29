import React from 'react';
import { CalendarHeart, MessageCircleCode, UtensilsCrossed, Smile } from 'lucide-react';

export const CelebrationJourney: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Occasion",
      desc: "Whether a birthday, family anniversary, reunion, or milestone, pick your date and special theme.",
      icon: CalendarHeart,
      color: "from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30"
    },
    {
      number: "02",
      title: "Tell Us Your Requirements",
      desc: "Connect via WhatsApp or enquiry form with your approximate guest count and preferred timings.",
      icon: MessageCircleCode,
      color: "from-rose-500/20 to-rose-600/10 text-rose-400 border-rose-500/30"
    },
    {
      number: "03",
      title: "Plan Your Food & Celebration",
      desc: "Curate your preferred menu from our pizzas, shakes, bites, and custom designed celebration cake.",
      icon: UtensilsCrossed,
      color: "from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30"
    },
    {
      number: "04",
      title: "Enjoy Your Moment",
      desc: "Walk in with your guests, enjoy warm hospitality, delicious flavours, and create lasting memories.",
      icon: Smile,
      color: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/30"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0a0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            Seamless Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-display">
            How Celebrations Happen at Juice Maall
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Four simple steps from your initial thought to a memorable family gathering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="glass-card hover:glass-panel-warm rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between text-left group relative"
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-amber-400/80 group-hover:text-amber-300 transition-colors">
                    {step.number}
                  </span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} border flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-serif-display mb-2 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-zinc-400 font-medium">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
