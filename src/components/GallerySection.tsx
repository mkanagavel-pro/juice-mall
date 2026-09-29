import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles, Info } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Food', 'Drinks', 'Cakes', 'Ambience', 'Celebrations'];

  // Map gallery categories
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Drinks') return item.title.toLowerCase().includes('juice') || item.category === 'Food';
    return item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display">
              Moments & Flavours Gallery
            </h2>
            <p className="mt-3 text-sm text-zinc-300 max-w-xl">
              Glimpse into our refreshing drinks, fresh bakery creations, dining spaces, and celebration hall setups.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 self-start md:self-auto">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Concept demo imagery shown for presentation.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                  : 'glass-card text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-12 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`${item.aspect} rounded-2xl overflow-hidden glass-card p-1.5 group cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              <div className="w-full h-full relative rounded-xl overflow-hidden bg-zinc-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" />

                {/* Always-visible subtle category chip */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-amber-300 border border-white/10">
                  {item.category} • Demo Showcase
                </div>

                {/* Hover overlay content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="self-end">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif-display drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 drop-shadow">
                      Click to expand in full lightbox
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-panel p-3 sm:p-4 rounded-3xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black mb-3">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="flex items-center justify-between px-2 pt-1 text-left">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                  {selectedImage.category} Showcase
                </span>
                <h4 className="text-lg font-bold text-white font-serif-display">
                  {selectedImage.title}
                </h4>
              </div>
              <span className="text-xs text-zinc-400 bg-white/10 px-3 py-1.5 rounded-md">
                Juice Maall Salem
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
