import React, { useEffect, useState } from 'react';
import { HERO_VIDEO } from '../data/portfolioData';
import { HERO } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onJoin: () => void;
  onReadStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoin, onReadStory }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const letters = HERO.wordmark.split('');

  return (
    <section id="hero" className="relative h-screen w-full p-4 md:p-16 box-border flex flex-col justify-end select-none">
      {/* Full-bleed: inset/rounded/border here made the video read as a framed panel
          rather than filling the viewport.
          z-0, not -z-20: a negative z-index paints the video behind App's opaque bg-[#141312],
          because neither #hero nor App's root div establishes a stacking context. */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        <div className="noise-overlay"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center pb-8 md:pb-12 text-center pointer-events-none">
        <h1 className="font-serif text-[18vw] md:text-[15vw] leading-none text-[#fbf7e4] tracking-tighter w-full overflow-hidden">
          {letters.map((char, idx) => (
            <span
              key={idx}
              className={`word-pull-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + idx * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p
          className={`mt-2 text-xs md:text-sm uppercase tracking-[0.3em] text-[#dedbc8] font-body word-pull-up ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.45s' }}
        >
          {HERO.role}
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onJoin}
            className="flex items-center gap-2 bg-[#fbf7e4] text-[#323124] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#dedbc8] hover:scale-105 transition-all pointer-events-auto cursor-pointer shadow-lg group"
          >
            <span>{HERO.cta}</span>
            <span className="w-6 h-6 rounded-full bg-[#323124] text-[#fbf7e4] flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={14} />
            </span>
          </button>

          <button
            onClick={onReadStory}
            className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-[#fbf7e4] border border-[#fbf7e4]/30 hover:border-[#fbf7e4] hover:bg-[#fbf7e4]/10 transition-all pointer-events-auto cursor-pointer"
          >
            {HERO.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};
