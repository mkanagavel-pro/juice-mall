import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenEnquiry: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Cakes', href: '#cakes' },
    { label: 'Party Hall', href: '#party-hall' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Subtle KEAGROW concept banner */}
      <aside aria-label="Demo notice" className="bg-[#12141a] border-b border-amber-500/15 py-1.5 px-4 text-center text-[11px] md:text-xs text-amber-300/80 font-medium">
        <span>Concept website demo by KEAGROW — Not the official website.</span>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel py-2.5 shadow-xl shadow-black/40'
            : 'bg-[#0c0d10]/90 backdrop-blur-md py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group focus-visible:outline-amber-400">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              JM
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-serif-display group-hover:text-amber-400 transition-colors">
                  JUICE MAALL
                </span>
                <span className="text-[12px] text-amber-400/90 font-medium hidden sm:inline">
                  {BUSINESS_INFO.tamilName}
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 tracking-wide font-medium">
                Cafe • Cakes & Party Hall
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors focus-visible:outline-amber-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to enquire about your cafe, cakes & party hall.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenEnquiry('General Enquiry')}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-amber-500 shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Order / Enquire
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEnquiry('General Enquiry')}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-amber-500 text-zinc-950 sm:hidden cursor-pointer"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md lg:hidden flex flex-col justify-between p-6 animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xl font-bold font-serif-display text-white">JUICE MAALL</span>
              <p className="text-xs text-amber-400">{BUSINESS_INFO.tamilName} • Salem</p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-zinc-800 text-zinc-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 my-auto py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-200 hover:text-amber-400 py-1 border-b border-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry('General Enquiry');
              }}
              className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-amber-500 text-zinc-950 font-medium"
            >
              Order / Enquire Now
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.phoneDial}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium rounded-lg bg-zinc-800 text-zinc-200"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to enquire about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-medium rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/40"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
