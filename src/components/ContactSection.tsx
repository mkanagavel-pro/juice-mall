import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface ContactSectionProps {
  initialEnquiryType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialEnquiryType = 'General Enquiry' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState(initialEnquiryType);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const enquiryTypes = [
    'General Enquiry',
    'Cake Enquiry',
    'Party Hall Enquiry',
    'Table / Dining Enquiry'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hello Juice Maall,
I would like to submit an enquiry:
- Name: ${name || 'Patron'}
- Phone: ${phone || 'Not provided'}
- Enquiry Type: ${enquiryType}
- Details: ${message || 'No additional message'}

Please get back to me.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0a0c10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Contact Direct Triggers */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-display leading-tight mb-6">
              Planning Something Special?
            </h2>

            <p className="text-base text-zinc-300 leading-relaxed mb-8">
              Whether you want to reserve a table for family dinner, order custom celebration cakes, or book the party hall for a private event in Salem, our team is here to assist.
            </p>

            {/* Quick contact methods */}
            <div className="space-y-4 mb-8">
              <a
                href={BUSINESS_INFO.phoneDial}
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:glass-panel-warm transition-all border border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-400 block">Call Directly</span>
                  <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Juice Maall, I would like to make an enquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:bg-emerald-950/30 transition-all border border-emerald-500/20 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 block">Instant WhatsApp</span>
                  <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 96003 20001
                  </span>
                </div>
              </a>
            </div>

            <div className="text-xs text-zinc-400">
              📍 110, Trichy Main Rd, Gugai, Salem, Tamil Nadu 636006
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative text-left">
              {submitted ? (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif-display mb-2">
                    Enquiry Received!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
                    Thank you, <span className="font-semibold text-white">{name}</span>. In this demo presentation, your enquiry for <span className="text-amber-400 font-semibold">{enquiryType}</span> has been logged.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl glass-card text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 placeholder-zinc-500"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 096003 20001"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 placeholder-zinc-500"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-zinc-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your event date, number of guests, or preferred items..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 placeholder-zinc-500 resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-98 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>
                    <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                      Instant response on WhatsApp or phone. No obligations.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
