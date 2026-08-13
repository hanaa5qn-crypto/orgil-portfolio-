import React, { useEffect, useRef, useState } from 'react';
import { ABOUT } from '../data/content';

export const AboutSection: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      // rAF-throttled: one measurement per frame instead of per scroll event.
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!textRef.current) return;
        const rect = textRef.current.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const startReveal = viewHeight * 0.85;
        const endReveal = viewHeight * 0.35;

        if (rect.top < startReveal && rect.bottom > 0) {
          const progress = 1 - Math.max(0, Math.min(1, (rect.top - endReveal) / (startReveal - endReveal)));
          setScrollProgress(progress);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalChars = ABOUT.body.length;
  const revealedCharsCount = Math.floor(scrollProgress * totalChars);

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-16 bg-black relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#101010] rounded-2xl p-8 md:p-16 border border-[#48473f]/20 relative overflow-hidden shadow-2xl">
          <div className="noise-overlay opacity-[0.03]"></div>

          <div className="max-w-4xl mr-auto text-left relative z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-4 block font-body">
              {ABOUT.eyebrow}
            </span>

            <p className="text-2xl md:text-3xl lg:text-4xl text-[#e6e2df] font-body font-medium mb-8 leading-snug">
              {ABOUT.intro}
            </p>

            {/* Character Reveal Paragraph.
                aria-label carries the whole sentence; the per-char spans are aria-hidden
                so screen readers don't announce it letter by letter. */}
            <p
              ref={textRef}
              aria-label={ABOUT.body}
              className="text-lg md:text-2xl text-[#c9c6bc] font-body leading-relaxed char-reveal py-4 border-y border-[#48473f]/20 my-8"
            >
              {ABOUT.body.split('').map((char, index) => {
                const isRevealed = index < revealedCharsCount;
                return (
                  <span
                    key={index}
                    aria-hidden="true"
                    style={{
                      // 0.2 left un-revealed Mongolian text unreadable; 0.55 keeps the
                      // reveal visible while the paragraph stays legible at any scroll position.
                      opacity: isRevealed ? 1 : 0.55,
                      color: isRevealed ? '#fbf7e4' : '#c9c6bc',
                      transition: 'opacity 0.15s ease, color 0.15s ease',
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
