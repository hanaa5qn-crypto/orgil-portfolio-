import React from 'react';
import { COMMUNITIES, COMMUNITIES_INTRO, PARTNER } from '../data/content';
import { Community } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CommunitiesSectionProps {
  /** Opens the inquiry form preselected to a community — used when it has no external CTA yet. */
  onApply: (community: Community) => void;
}

// No card imagery: the only assets available were AI Studio placeholders showing an
// unrelated product UI (they read "Prisma Studio"). Text-only cards until Orgil supplies real art.

export const CommunitiesSection: React.FC<CommunitiesSectionProps> = ({ onApply }) => {
  return (
    <section id="communities" className="py-24 md:py-32 px-4 md:px-16 bg-[#141312] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
            {COMMUNITIES_INTRO.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-[#fbf7e4] font-headline tracking-tight max-w-2xl">
            {COMMUNITIES_INTRO.heading}
          </h2>
        </div>

        {/* Three equal community cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITIES.map((community) => {
            const ctaClassName =
              'w-full py-3 rounded-full bg-[#fbf7e4] text-[#323124] text-xs uppercase font-semibold tracking-widest hover:bg-[#dedbc8] transition-colors cursor-pointer flex items-center justify-center gap-2';
            return (
              <div
                key={community.id}
                className="rounded-xl overflow-hidden bg-[#201f1e] border border-[#fbf7e4]/10 hover:border-[#fbf7e4]/30 hover:-translate-y-1 transition-all duration-500 relative flex flex-col group shadow-2xl"
              >
                <div className="noise-overlay opacity-[0.04]"></div>

                {/* Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3
                      className="text-3xl font-medium font-headline"
                      style={{ color: community.accent }}
                    >
                      {community.name}
                    </h3>
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

        {/* Partner offer — one quiet card, subordinate to the three communities */}
        <div className="mt-6 bg-[#1c1b1a] border border-[#48473f]/25 rounded-xl p-6 md:p-8">
          <span className="text-[10px] uppercase tracking-widest text-[#939187] font-body block mb-4">
            {PARTNER.label}
          </span>
          <p className="text-base md:text-lg text-[#e6e2df] font-body leading-relaxed max-w-3xl">
            {PARTNER.body}
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6">
            <span className="text-xs md:text-sm text-[#c9c6bc] font-body flex items-center gap-2">
              {PARTNER.linkLabel}
              <a
                href={PARTNER.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fbf7e4] hover:underline"
              >
                {PARTNER.link}
              </a>
            </span>
            <span className="text-xs md:text-sm text-[#c9c6bc] font-body flex items-center gap-2">
              {PARTNER.codeLabel}
              <span className="font-mono bg-[#201f1e] border border-[#48473f]/40 rounded-md px-3 py-1.5 text-[#fbf7e4] tracking-wider">
                {PARTNER.code}
              </span>
            </span>
          </div>
          <p className="text-[11px] text-[#939187] font-body mt-6">{PARTNER.risk}</p>
        </div>
      </div>
    </section>
  );
};
