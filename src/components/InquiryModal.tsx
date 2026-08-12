import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    serviceType: 'Film Direction',
    budget: '$25,000 - $50,000',
    timeline: '1-2 Months',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#101010] border border-[#fbf7e4]/20 rounded-2xl max-w-2xl w-full p-6 md:p-10 shadow-2xl relative overflow-hidden">
        <div className="noise-overlay opacity-[0.03]"></div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#201f1e] text-[#fbf7e4] hover:bg-[#2b2a28] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#fbf7e4] text-[#323124] mx-auto flex items-center justify-center shadow-2xl">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-[#fbf7e4] font-headline">
              Inquiry Received
            </h3>
            <p className="text-sm text-[#c9c6bc] max-w-md mx-auto font-body leading-relaxed">
              Thank you for reaching out to Prisma Studio. Marcus Chen and the team will review your project scope and respond within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#dedbc8]">
                Start a Conversation
              </span>
              <h2 className="text-2xl md:text-4xl font-medium text-[#fbf7e4] font-headline mt-1">
                Project Inquiry
              </h2>
              <p className="text-xs md:text-sm text-[#c9c6bc] font-body mt-2">
                Specify your production or color grading requirements below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@studio.com"
                    className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                    Primary Need
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                  >
                    <option value="Film Direction">Film Direction</option>
                    <option value="Color Grading">Color Grading (ACES)</option>
                    <option value="Commercial Post">Commercial Post-Production</option>
                    <option value="Full Studio Production">Full Studio Production</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                  >
                    <option value="<$25,000">Under $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                  Project Brief & Vision
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your film or brand concept, aesthetic references, and key deliverables..."
                  className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#fbf7e4] text-[#323124] rounded-full text-xs uppercase font-semibold tracking-widest hover:bg-[#dedbc8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-4"
              >
                <span>Submit Inquiry</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
