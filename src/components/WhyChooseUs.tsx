import React from 'react';
import { Users, GlassWater, Cake, PartyPopper } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Family Friendly",
      desc: "Warm and inviting seating designed for family meals, laughter, and relaxed dining together in Gugai.",
      icon: Users,
      color: "from-amber-500/20 to-amber-600/10 text-amber-400 border-amber-500/30"
    },
    {
      title: "Refreshing Drinks",
      desc: "Pure fruit juices, creamy milkshakes, and royal faloodas prepared fresh on every single order.",
      icon: GlassWater,
      color: "from-cyan-500/20 to-cyan-600/10 text-cyan-400 border-cyan-500/30"
    },
    {
      title: "Cakes & Desserts",
      desc: "Decadent cakes and celebratory desserts ready to add sweetness to birthdays and special moments.",
      icon: Cake,
      color: "from-rose-500/20 to-rose-600/10 text-rose-400 border-rose-500/30"
    },
    {
      title: "Celebration Space",
      desc: "Dedicated party hall venue for private birthdays, anniversaries, and memorable family reunions.",
      icon: PartyPopper,
      color: "from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/30"
    }
  ];

  return (
    <section className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            The Juice Maall Promise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-display">
            Why People Come Here
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card hover:glass-panel-warm rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col items-start text-left group"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif-display mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
