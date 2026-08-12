import React, { useState } from 'react';
import { FEATURE_MOTION_VIDEO, HERO_VIDEO, COLOR_PRESETS } from '../data/portfolioData';
import { X, Volume2, VolumeX, Maximize, Film, Sun, Sparkles } from 'lucide-react';

interface CapsuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapsuleModal: React.FC<CapsuleModalProps> = ({ isOpen, onClose }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [aspectRatio, setAspectRatio] = useState<'2.39:1' | '1.85:1' | '1:1'>('2.39:1');
  const [activeVideo, setActiveVideo] = useState<'reel' | 'feature'>('feature');
  const [ambientGlow, setAmbientGlow] = useState(true);

  if (!isOpen) return null;

  const currentVideo = activeVideo === 'feature' ? FEATURE_MOTION_VIDEO : HERO_VIDEO;

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '2.39:1':
        return 'aspect-[2.39/1] max-w-5xl';
      case '1.85:1':
        return 'aspect-[1.85/1] max-w-4xl';
      case '1:1':
        return 'aspect-square max-w-xl';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-between p-4 md:p-8 animate-fadeIn select-none">
      {/* Top Bar Controls */}
      <div className="flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl text-[#fbf7e4]">Prisma</span>
          <span className="text-xs uppercase tracking-widest bg-[#201f1e] text-[#dedbc8] px-3 py-1 rounded-full border border-[#48473f]/30">
            Immersion Capsule
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAmbientGlow(!ambientGlow)}
            className={`px-3 py-1.5 rounded-full text-xs uppercase font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              ambientGlow ? 'bg-[#fbf7e4] text-[#323124]' : 'bg-[#201f1e] text-[#c9c6bc]'
            }`}
          >
            <Sun size={14} /> Ambient Bias Light
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-9 h-9 rounded-full bg-[#201f1e] text-[#fbf7e4] hover:bg-[#2b2a28] flex items-center justify-center transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#fbf7e4] text-[#323124] hover:bg-[#dedbc8] flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Main Theater Display */}
      <div className="flex-1 flex items-center justify-center relative my-4">
        {/* Ambient Backlight Halo */}
        {ambientGlow && (
          <div className="absolute inset-12 bg-gradient-to-r from-[#dedbc8]/15 via-[#fbf7e4]/20 to-[#dedbc8]/15 blur-3xl rounded-full opacity-60 pointer-events-none transition-opacity duration-1000"></div>
        )}

        <div className={`w-full ${getAspectClass()} transition-all duration-500 relative rounded-lg overflow-hidden border border-[#48473f]/40 shadow-2xl bg-black`}>
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Bottom Floating Control Deck */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#141312]/90 backdrop-blur-xl border border-[#48473f]/30 p-4 rounded-2xl max-w-3xl mx-auto w-full z-20">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase text-[#939187] mr-2">Aspect Ratio:</span>
          {(['2.39:1', '1.85:1', '1:1'] as const).map((ratio) => (
            <button
              key={ratio}
              onClick={() => setAspectRatio(ratio)}
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                aspectRatio === ratio
                  ? 'bg-[#fbf7e4] text-[#323124]'
                  : 'bg-[#201f1e] text-[#c9c6bc] hover:text-[#fbf7e4]'
              }`}
            >
              {ratio}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase text-[#939187] mr-2">Source Reel:</span>
          <button
            onClick={() => setActiveVideo('feature')}
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              activeVideo === 'feature'
                ? 'bg-[#fbf7e4] text-[#323124]'
                : 'bg-[#201f1e] text-[#c9c6bc] hover:text-[#fbf7e4]'
            }`}
          >
            Feature Cut
          </button>
          <button
            onClick={() => setActiveVideo('reel')}
            className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
              activeVideo === 'reel'
                ? 'bg-[#fbf7e4] text-[#323124]'
                : 'bg-[#201f1e] text-[#c9c6bc] hover:text-[#fbf7e4]'
            }`}
          >
            Color Reel
          </button>
        </div>
      </div>
    </div>
  );
};
