import React from 'react';
import { ArrowUpRight, Instagram, Youtube } from 'lucide-react';
import { CONTACT, HERO } from '../data/content';

interface FooterProps {
  onOpenInquiry: () => void;
}

// Icon by link label; unknown labels fall back to a plain arrow so an added
// channel never crashes.
/** XM's real mark, sized like the lucide icons the other cards use. */
const XmIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
  <img src="/logos/xm.svg" alt="" width={size * 1.4} height={size * 1.4} />
);

const LINK_ICONS: Record<string, React.ElementType> = {
  Instagram: Instagram,
  YouTube: Youtube,
  'XM Broker': XmIcon,
};

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer id="contact" className="bg-[#141312] border-t border-[#48473f]/20 py-16 px-4 md:px-16 text-[#e6e2df] relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Contact Hero CTA */}
        <div className="mb-16 pb-12 border-b border-[#48473f]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
              {CONTACT.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#fbf7e4] font-headline tracking-tight max-w-xl">
              {/* Label, not the raw address — clicking opens Gmail compose to Orgil. */}
              <a
                href={CONTACT.headingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-[#dedbc8] transition-colors"
              >
                {CONTACT.heading}
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-[#939187]" />
              </a>
            </h2>
          </div>

          <button
            onClick={onOpenInquiry}
            className="w-full md:w-auto px-8 py-4 bg-[#fbf7e4] text-[#323124] rounded-full text-xs uppercase font-semibold tracking-widest hover:bg-[#dedbc8] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-2xl flex items-center justify-center gap-2"
          >
            <span>{CONTACT.cta}</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {CONTACT.links.map((link) => {
            const Icon = LINK_ICONS[link.label] ?? ArrowUpRight;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#48473f]/30 bg-[#1c1b1a] p-6 md:p-8 min-h-[104px] flex items-center justify-between gap-4 hover:-translate-y-1 hover:border-[#fbf7e4]/50 hover:bg-[#201f1e] transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fbf7e4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141312]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#fbf7e4]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative flex items-center gap-4 min-w-0">
                  <span className="w-12 h-12 rounded-full bg-[#201f1e] border border-[#48473f]/40 flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-[10px] tracking-widest uppercase text-[#939187]">{link.label}</span>
                    <span className="text-xl md:text-2xl font-medium text-[#fbf7e4] truncate">{link.handle}</span>
                  </span>
                </div>

                <span className="relative w-10 h-10 rounded-full border border-[#48473f]/40 flex items-center justify-center shrink-0 group-hover:bg-[#fbf7e4] group-hover:text-[#323124] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all motion-reduce:transform-none motion-reduce:transition-none">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            );
          })}
        </div>

        {/* Footer bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#c9c6bc] font-body">
          <span className="font-serif text-3xl text-[#fbf7e4]">{HERO.wordmark}</span>
          <p className="text-[#939187]">{CONTACT.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
