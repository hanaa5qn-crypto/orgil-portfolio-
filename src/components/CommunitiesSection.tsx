import React, { useState } from 'react';
import { COMMUNITIES, COMMUNITIES_INTRO, PARTNER } from '../data/content';
import { Community } from '../types';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

interface CommunitiesSectionProps {
  /** Opens the inquiry form preselected to a community — used when it has no external CTA yet. */
  onApply: (community: Community) => void;
}

// No card imagery: the only assets available were AI Studio placeholders showing an
// unrelated product UI (they read "Prisma Studio"). Text-only cards until Orgil supplies real art.

/** The XM promo code as a click-to-copy chip. Feedback is icon-only (Copy → Check) so no copy strings are invented. */
const CopyCodeChip: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(PARTNER.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button
      onClick={copy}
      className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#201f1e]/80 border border-[#FF333C]/40 hover:border-[#FF333C] transition-colors cursor-pointer"
    >
      <span className="text-[10px] uppercase tracking-widest text-[#939187] font-body">{PARTNER.codeLabel}</span>
      <span className="font-mono text-lg md:text-xl text-[#fbf7e4] tracking-[0.2em]">{PARTNER.code}</span>
      {copied ? (
        <Check size={16} className="text-[#FF333C]" />
      ) : (
        <Copy size={16} className="text-[#939187] group-hover:text-[#fbf7e4] transition-colors" />
      )}
    </button>
  );
};

export const CommunitiesSection: React.FC<CommunitiesSectionProps> = ({ onApply }) => {
  return (
    <section id="communities" className="py-24 md:py-32 px-4 md:px-16 bg-[#141312] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
            {COMMUNITIES_INTRO.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-[#fbf7e4] font-headline tracking-tight md:whitespace-nowrap">
            {COMMUNITIES_INTRO.heading}
          </h2>
        </div>

        {/* CRG is the only active community card for now. */}
        <div className="grid grid-cols-1 gap-6">
          {COMMUNITIES.map((community) => {
            const isPrimary = community.id === 'crg';
            const ctaClassName =
              'w-full py-3 rounded-full bg-[#fbf7e4] text-[#323124] text-xs uppercase font-semibold tracking-widest hover:bg-[#dedbc8] transition-colors cursor-pointer flex items-center justify-center gap-2';
            return (
              <div
                key={community.id}
                className={`${isPrimary ? 'md:h-[640px]' : ''} rounded-xl overflow-hidden bg-[#201f1e] border border-[#fbf7e4]/10 hover:border-[#fbf7e4]/30 hover:-translate-y-1 transition-all duration-500 relative flex flex-col group shadow-2xl`}
              >
                <div className="noise-overlay opacity-[0.04]"></div>

                {/* Logo banner — the image carries the community name, so the h3 is skipped.
                    Logos ship on a baked-in black background; bg-black blends their edges. */}
                {community.logo && (
                  <div className={`${isPrimary ? 'h-[60%] min-h-[160px]' : 'h-40'} bg-black flex items-center justify-center relative z-10 border-b border-[#48473f]/30`}>
                    <img
                      src={community.logo}
                      alt={community.name}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    {!community.logo && (
                      <h3
                        className="text-3xl font-medium font-headline"
                        style={{ color: community.accent }}
                      >
                        {community.name}
                      </h3>
                    )}
                    {community.status && (
                      <span className="shrink-0 mt-1.5 uppercase text-[10px] tracking-widest px-2.5 py-1 rounded-full bg-[#fbf7e4]/10 text-[#fbf7e4] border border-[#fbf7e4]/25">
                        {community.status}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-[#939187] font-body block mb-4">
                    {community.kicker}
                  </span>

                  <p className="text-xs md:text-sm text-[#c9c6bc] font-body leading-relaxed mb-6">
                    {community.description}
                  </p>

                  {/* CTA pinned to the bottom */}
                  <div className="mt-auto pt-4 border-t border-[#48473f]/30">
                    {community.access && (
                      <span className="text-xs text-[#939187] font-body block mb-4">
                        {community.access}
                      </span>
                    )}
                    {community.ctaHref ? (
                      <a
                        href={community.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={ctaClassName}
                      >
                        <span>{community.ctaLabel}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <button
                        onClick={() => onApply(community)}
                        className={ctaClassName}
                      >
                        <span>{community.ctaLabel}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* XM partner ad — an affiliate promotion, deliberately loud: XM red, glow, big code. */}
        <div className="mt-6 relative overflow-hidden rounded-xl border border-[#FF333C]/30 bg-gradient-to-br from-[#1c1b1a] via-[#141312] to-[#2a1013] p-6 md:p-12">
          {/* Radial gradients, not blur() divs — blur-3xl under the navbar's backdrop-blur
              rendered as a hard red crescent on the nav pill while scrolling past. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-[radial-gradient(closest-side,rgba(255,51,60,0.15),transparent)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 w-80 h-80 bg-[radial-gradient(closest-side,rgba(255,51,60,0.07),transparent)]"
          />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <img
              src="/logos/xm.svg"
              alt="XM"
              className="w-20 h-20 md:w-28 md:h-28 shrink-0 drop-shadow-[0_0_24px_rgba(255,51,60,0.35)]"
              loading="lazy"
            />
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#FF333C] font-body font-semibold block mb-3">
                {PARTNER.label}
              </span>
              <p className="text-lg md:text-2xl text-[#fbf7e4] font-body leading-relaxed max-w-3xl">
                {PARTNER.body}
              </p>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center gap-4 mt-8 md:pl-[9.5rem]">
            <a
              href={PARTNER.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#FF333C] text-white text-xs uppercase font-semibold tracking-widest hover:bg-[#e42931] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,51,60,0.35)]"
            >
              <span>{PARTNER.link}</span>
              <ArrowUpRight size={14} />
            </a>
            <CopyCodeChip />
          </div>

          <p className="relative text-[11px] text-[#939187] font-body mt-8">{PARTNER.risk}</p>
        </div>
      </div>
    </section>
  );
};
