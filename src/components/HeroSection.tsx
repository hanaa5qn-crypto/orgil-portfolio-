import React, { useEffect, useState } from 'react';
import { HERO_VIDEO } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onJoinLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinLab }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const letters = [
    { char: 'P', delay: '0.1s' },
    { char: 'r', delay: '0.15s' },
    { char: 'i', delay: '0.2s' },
    { char: 's', delay: '0.25s' },
    { char: 'm', delay: '0.3s' },
    { char: 'a', delay: '0.35s' },
  ];

  return (
    <section id="hero" className="relative h-screen w-full p-4 md:p-16 box-border flex flex-col justify-end select-none">
      <div className="absolute inset-4 md:inset-12 rounded-xl overflow-hidden -z-20 border border-[#48473f]/20 shadow-2xl">
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
          {letters.map((item, idx) => (
            <span
              key={idx}
              className={`word-pull-up ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: item.delay }}
            >
              {item.char}
            </span>
          ))}
          <sup className={`text-[0.4em] align-top text-[#dedbc8] word-pull-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            *
          </sup>
        </h1>

        <button
          onClick={onJoinLab}
          className="mt-6 md:mt-8 flex items-center gap-2 bg-[#fbf7e4] text-[#323124] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#dedbc8] hover:scale-105 transition-all pointer-events-auto cursor-pointer shadow-lg group"
        >
          <span>Join the lab</span>
          <span className="w-6 h-6 rounded-full bg-[#323124] text-[#fbf7e4] flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
            <ArrowRight size={14} />
          </span>
        </button>
      </div>
    </section>
  );
};
