import React, { useEffect, useRef, useState } from 'react';
import { Film, Eye, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhilosophy, setActivePhilosophy] = useState<number | null>(null);

  const fullQuote = `"The essence of cinematic minimalism lies not in what you remove, but in the intentionality of what remains. It is the delicate balance between the void and the subject, where silence speaks louder than action, and shadow defines light. In this space, every frame must earn its right to exist."`;

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const startReveal = viewHeight * 0.85;
      const endReveal = viewHeight * 0.35;

      if (rect.top < startReveal && rect.bottom > 0) {
        const progress = 1 - Math.max(0, Math.min(1, (rect.top - endReveal) / (startReveal - endReveal)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalChars = fullQuote.length;
  const revealedCharsCount = Math.floor(scrollProgress * totalChars);

  const pillars = [
    {
      title: 'Frame Intentionality',
      icon: Eye,
      text: 'Every focal plane, shadow edge, and color temperature is chosen to serve narrative resonance.',
    },
    {
      title: 'Tactile Color Science',
      icon: Sparkles,
      text: 'Custom film transforms in ACEScg space preserving organic grain and soft tungsten highlights.',
    },
    {
      title: 'Minimalist Grammar',
      icon: Film,
      text: 'Reducing visual noise so the spatial void amplifies emotion without decorative fluff.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-16 bg-black relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#101010] rounded-2xl p-8 md:p-16 border border-[#48473f]/20 relative overflow-hidden shadow-2xl">
          <div className="noise-overlay opacity-[0.03]"></div>

          <div className="max-w-4xl mx-auto text-center md:text-left relative z-10">
            <p className="text-2xl md:text-3xl lg:text-4xl text-[#e6e2df] font-body font-medium mb-8 leading-snug">
              I am Marcus Chen,{' '}
              <span className="font-serif italic text-[#fbf7e4] text-3xl md:text-5xl">
                a self-taught director.
              </span>{' '}
              I have skills in color grading...
            </p>

            {/* Character Reveal Quote */}
            <p
              ref={textRef}
              className="text-lg md:text-2xl text-[#c9c6bc] font-body leading-relaxed char-reveal select-none py-4 border-y border-[#48473f]/20 my-8"
            >
              {fullQuote.split('').map((char, index) => {
                const isRevealed = index < revealedCharsCount;
                return (
                  <span
                    key={index}
                    style={{
                      opacity: isRevealed ? 1 : 0.2,
                      color: isRevealed ? '#fbf7e4' : '#c9c6bc',
                      transition: 'opacity 0.15s ease, color 0.15s ease',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </p>

            {/* Interactive Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                const isHovered = activePhilosophy === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActivePhilosophy(idx)}
                    onMouseLeave={() => setActivePhilosophy(null)}
                    className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? 'bg-[#201f1e] border-[#fbf7e4]/40 -translate-y-1'
                        : 'bg-[#141312]/80 border-[#48473f]/20 hover:border-[#48473f]/40'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2b2a28] flex items-center justify-center text-[#fbf7e4] mb-4">
                      <IconComponent size={18} />
                    </div>
                    <h3 className="text-base font-semibold text-[#fbf7e4] mb-2 font-body">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#c9c6bc] font-body leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
