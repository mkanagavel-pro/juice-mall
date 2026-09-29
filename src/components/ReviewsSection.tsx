import React from 'react';
import { Star, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#0e1015] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Customer Praise in Salem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display">
            Loved by Thousands.
          </h2>

          <p className="mt-4 text-base text-zinc-300">
            Real dining experiences from local patrons and families visiting Juice Maall at Gugai.
          </p>

          {/* Large Trust Counter Lockup */}
          <div className="mt-8 inline-flex items-center gap-6 glass-panel px-6 py-4 rounded-2xl border border-amber-500/20 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-serif-display tabular-nums">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex flex-col text-left">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-400 font-medium">Out of 5 Stars</span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10" />

            <div className="text-left">
              <span className="text-2xl sm:text-3xl font-extrabold text-white block tabular-nums">
                {BUSINESS_INFO.reviewCount}
              </span>
              <span className="text-[11px] text-zinc-400 uppercase tracking-wide">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="glass-card hover:glass-panel-warm rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between text-left group shadow-lg"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-600 group-hover:text-amber-400/50 transition-colors" />
                </div>

                {/* Exact authentic review excerpt */}
                <p className="text-base sm:text-lg font-medium text-white font-serif-display leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">{review.author}</h4>
                  <span className="text-[11px] text-emerald-400">{review.date}</span>
                </div>
                <span className="text-[10px] text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews CTA */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-all border border-white/10"
          >
            <span>View More Reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
