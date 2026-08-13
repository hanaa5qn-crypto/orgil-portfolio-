import React, { useEffect, useState } from 'react';
import { InquiryFormData } from '../types';
import { CONTACT, FORM } from '../data/content';
import { X, Send, CheckCircle2 } from 'lucide-react';

/**
 * FormSubmit.co relays the POST to Orgil's inbox — no backend needed.
 * One-time setup: the first-ever submission emails him an activation link he must click.
 */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT.email}`;

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCommunity?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedCommunity,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    community: FORM.options.communities[0],
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (isOpen && preselectedCommunity) {
      setFormData((prev) => ({ ...prev, community: preselectedCommunity }));
    }
  }, [isOpen, preselectedCommunity]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`formsubmit ${res.status}`);
    } catch {
      // Relay down → open Gmail compose prefilled with what they typed, so nothing is lost.
      const body = (Object.keys(FORM.labels) as (keyof InquiryFormData)[])
        .map((key) => `${FORM.labels[key]}: ${formData[key]}`)
        .join('\n');
      window.open(
        `${CONTACT.headingHref}&body=${encodeURIComponent(body)}`,
        '_blank',
        'noopener,noreferrer',
      );
    }
    setSending(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={FORM.heading}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#101010] border border-[#fbf7e4]/20 rounded-2xl max-w-2xl w-full p-6 md:p-10 shadow-2xl relative overflow-hidden"
      >
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
            <p className="text-sm md:text-base text-[#c9c6bc] max-w-md mx-auto font-body leading-relaxed">
              {FORM.success}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-[#fbf7e4] font-headline">
                {FORM.heading}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                    {FORM.labels.name} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                    {FORM.labels.email} *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                  {FORM.labels.community}
                </label>
                <select
                  value={formData.community}
                  onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                  className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors"
                >
                  {FORM.options.communities.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-[#939187] block mb-1">
                  {FORM.labels.details}
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#1c1b1a] border-b border-[#48473f]/40 focus:border-[#fbf7e4] text-sm text-[#fbf7e4] py-2 px-3 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 bg-[#fbf7e4] text-[#323124] rounded-full text-xs uppercase font-semibold tracking-widest hover:bg-[#dedbc8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl mt-4 disabled:opacity-60 disabled:cursor-wait"
              >
                <span>{FORM.submit}</span>
                <Send size={14} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
