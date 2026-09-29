import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, MenuItem } from '../data/restaurantData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  selectedItem?: MenuItem | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = 'General Enquiry',
  selectedItem = null
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(initialType);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setType('Food / Item Order');
      setNotes(`Interested in ordering/enquiring about: ${selectedItem.name} (${selectedItem.category})`);
    } else {
      setType(initialType);
    }
    setIsSuccess(false);
  }, [isOpen, selectedItem, initialType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Juice Maall Salem,
Enquiry Details:
- Name: ${name}
- Phone: ${phone}
- Type: ${type}
- Preferred Date/Time: ${date || 'Immediate / Flexible'}
- Notes: ${notes || 'No extra notes'}

Please assist me.`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-serif-display mb-2">
              Enquiry Received
            </h3>
            <p className="text-sm text-zinc-300 mb-6">
              Thank you, <span className="font-semibold text-white">{name}</span>. We have noted your request for <span className="text-amber-400 font-semibold">{type}</span>.
            </p>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppForward}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl text-xs text-zinc-400 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Enquiry</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-serif-display mb-1">
              Connect with Juice Maall
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Quickly enquire about menu items, cake orders, table dining, or party hall celebrations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 placeholder-zinc-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 096003 20001"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 placeholder-zinc-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Enquiry Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Table / Dining Enquiry">Table / Dining</option>
                    <option value="Cake Enquiry">Cake Enquiry</option>
                    <option value="Party Hall Enquiry">Party Hall Booking</option>
                    <option value="Food / Item Order">Food / Item Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Message / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you're looking for..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#141720] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 placeholder-zinc-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
