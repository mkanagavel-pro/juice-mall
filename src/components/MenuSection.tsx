import React, { useState } from 'react';
import { Search, Sparkles, MessageSquare, Utensils, Info } from 'lucide-react';
import { MENU_ITEMS, MenuItem, BUSINESS_INFO } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeTab, setActiveTab] = useState<string>('Popular');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);

  const categories = [
    'Popular',
    'Juices',
    'Milkshakes',
    'Falooda',
    'Pizza',
    'Quick Bites',
    'Desserts',
    'Cakes'
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    const categoryMatch =
      activeTab === 'Popular' ? item.isPopular : item.category === activeTab;

    // Search query
    const searchMatch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Veg filter
    const vegMatch = !vegOnly || item.isVeg;

    return categoryMatch && searchMatch && vegMatch;
  });

  return (
    <section id="menu" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Flavours of Juice Maall
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display">
              Curated Menu Showcase
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-xl">
              Freshly pressed exotic juices, thick shakes, royal faloodas, oven-baked pizzas, and savory quick bites.
            </p>
          </div>

          {/* Pricing compliance notice */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 self-start md:self-auto">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Exact prices confirmed on enquiry or at counter.</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Scrollable Category Segmented Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-[#141720] rounded-xl border border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === cat
                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Veg toggle */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search pizzas, shakes, bites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-lg bg-[#141720] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Veg toggle */}
            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                vegOnly
                  ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300'
                  : 'bg-[#141720] border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${vegOnly ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
              <span>Veg Only</span>
            </button>
          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card hover:glass-panel-warm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Image & veg/non-veg indicator */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141720] via-transparent to-transparent pointer-events-none" />

                  {/* Veg / Non-veg symbol */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md p-1.5 rounded-md border border-white/10 flex items-center gap-1.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                      }`}
                    />
                    <span className="text-[10px] text-zinc-300 font-medium">
                      {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
                    </span>
                  </div>

                  {item.isPopular && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-zinc-950 font-bold text-[10px] px-2.5 py-1 rounded-md shadow-md uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-medium text-amber-400">
                        {item.category}
                      </span>
                      <span className="text-xs text-zinc-400 italic">
                        {item.priceNote}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-serif-display group-hover:text-amber-300 transition-colors mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-amber-500/15 hover:bg-amber-500 text-amber-400 hover:text-zinc-950 text-xs font-semibold tracking-wide transition-all text-center cursor-pointer"
                    >
                      Enquire / Order
                    </button>
                    
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Juice Maall, I would like to order or enquire about ${item.name} (${item.category}).`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-400 transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label="Enquire about this item on WhatsApp"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl p-8 max-w-md mx-auto">
            <Utensils className="w-10 h-10 text-amber-400/50 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No items found</h4>
            <p className="text-xs text-zinc-400 mb-4">
              Try searching another dish or clear the filters.
            </p>
            <button
              onClick={() => {
                setActiveTab('Popular');
                setSearchQuery('');
                setVegOnly(false);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-zinc-950"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Full Menu Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel-warm border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-display">
              Looking for our complete dining menu?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">
              Visit our counter at Trichy Main Rd, Gugai, or chat with our team on WhatsApp for today’s fresh specials.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, please share your full menu and specials.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-amber-500/20 transition-all"
            >
              Get Full Menu on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
