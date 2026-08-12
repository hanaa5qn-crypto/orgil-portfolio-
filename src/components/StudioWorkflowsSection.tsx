import React, { useState } from 'react';
import {
  FEATURE_MOTION_VIDEO,
  FEATURE_STORYBOARD_IMG,
  FEATURE_ANALYSIS_IMG,
  FEATURE_CAPSULE_IMG,
  COLOR_PRESETS,
} from '../data/portfolioData';
import { Sliders, Layout, BarChart3, Maximize2, ArrowUpRight, Check } from 'lucide-react';

interface StudioWorkflowsSectionProps {
  onOpenStoryboard: () => void;
  onOpenAnalysis: () => void;
  onOpenCapsule: () => void;
}

export const StudioWorkflowsSection: React.FC<StudioWorkflowsSectionProps> = ({
  onOpenStoryboard,
  onOpenAnalysis,
  onOpenCapsule,
}) => {
  const [activePresetId, setActivePresetId] = useState<string>('nordic-monolith');
  const [showColorControls, setShowColorControls] = useState<boolean>(false);

  const selectedPreset = COLOR_PRESETS.find((p) => p.id === activePresetId) || COLOR_PRESETS[0];

  return (
    <section id="studio" className="py-24 md:py-32 px-4 md:px-16 bg-[#141312] relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
              02 / Workflows
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-[#fbf7e4] font-headline tracking-tight">
              Studio-grade workflows...
            </h2>
          </div>
          <p className="text-xs md:text-sm text-[#c9c6bc] max-w-sm font-body leading-relaxed">
            Integrated tools designed for high-end cinematic post-production, color management, and pacing rhythm.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Feature 1: Motion / Cinematic Grading (col-span-8) */}
          <div className="col-span-1 md:col-span-8 rounded-xl overflow-hidden bg-[#212121] border border-[#fbf7e4]/10 relative min-h-[420px] md:min-h-[580px] group flex flex-col justify-between shadow-2xl transition-all duration-500">
            {/* Top Bar */}
            <div className="p-4 md:p-6 z-20 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[#fbf7e4] border border-[#fbf7e4]/20">
                MOTION
              </span>

              <button
                onClick={() => setShowColorControls(!showColorControls)}
                className="flex items-center gap-2 bg-black/60 backdrop-blur-md hover:bg-black/80 px-3.5 py-1.5 rounded-full text-xs text-[#fbf7e4] border border-[#fbf7e4]/20 transition-all cursor-pointer"
              >
                <Sliders size={14} />
                <span>LUT Grade: {selectedPreset.name}</span>
              </button>
            </div>

            {/* Video Canvas with real-time filter styling */}
            <div className="absolute inset-0 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{ filter: selectedPreset.filterStyle }}
                className="w-full h-full object-cover scale-105 transition-all duration-700 group-hover:scale-110"
              >
                <source src={FEATURE_MOTION_VIDEO} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none"></div>
            </div>

            {/* Interactive Color Preset Panel Overlay */}
            {showColorControls && (
              <div className="absolute top-16 right-4 z-30 bg-[#1a1918]/95 backdrop-blur-xl border border-[#48473f]/40 p-4 rounded-xl max-w-xs shadow-2xl animate-fadeIn">
                <div className="flex items-center justify-between mb-3 border-b border-[#48473f]/30 pb-2">
                  <span className="text-xs font-bold uppercase text-[#fbf7e4]">
                    Real-time LUT Engine
                  </span>
                  <button
                    onClick={() => setShowColorControls(false)}
                    className="text-xs text-[#c9c6bc] hover:text-[#fbf7e4]"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-2">
                  {COLOR_PRESETS.map((preset) => {
                    const isSelected = preset.id === activePresetId;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => setActivePresetId(preset.id)}
                        className={`w-full text-left p-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#2b2a28] text-[#fbf7e4] border border-[#fbf7e4]/30'
                            : 'text-[#c9c6bc] hover:bg-[#201f1e] hover:text-[#fbf7e4]'
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{preset.name}</div>
                          <div className="text-[10px] text-[#939187] line-clamp-1">
                            {preset.description}
                          </div>
                        </div>
                        {isSelected && <Check size={14} className="text-[#fbf7e4]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Details */}
            <div className="p-6 md:p-8 z-20 relative">
              <h3 className="text-2xl md:text-3xl font-medium text-[#fbf7e4] mb-2 font-headline">
                Cinematic Grading
              </h3>
              <p className="text-xs md:text-sm text-[#c9c6bc] font-body max-w-lg leading-relaxed">
                Real-time color manipulation engine operating in ACEScg space with organic grain transforms.
              </p>
            </div>
          </div>

          {/* Side Features Container (col-span-4) */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
            {/* Feature 2: Project Storyboard */}
            <div
              onClick={onOpenStoryboard}
              className="flex-1 rounded-xl bg-[#212121] border border-[#fbf7e4]/10 p-6 relative overflow-hidden group cursor-pointer hover:border-[#fbf7e4]/30 transition-all shadow-xl min-h-[220px]"
            >
              <div className="noise-overlay opacity-[0.04]"></div>

              <div className="flex items-start justify-between mb-6 relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#c9c6bc] font-semibold">
                  01 / Storyboard
                </span>
                <div className="w-9 h-9 rounded-full bg-[#363533] flex items-center justify-center text-[#fbf7e4] group-hover:scale-110 transition-transform">
                  <Layout size={16} />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-medium text-[#fbf7e4] mb-1 font-headline">
                  Project Storyboard
                </h3>
                <p className="text-xs text-[#c9c6bc] font-body leading-relaxed max-w-[85%]">
                  Seamless visual planning with drag-and-drop scene organization.
                </p>
              </div>

              <img
                src={FEATURE_STORYBOARD_IMG}
                alt="Storyboard Interface"
                className="absolute -right-8 -bottom-8 w-44 opacity-40 mix-blend-screen group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 pointer-events-none rounded-lg"
              />
            </div>

            {/* Feature 3: Smart Critiques */}
            <div
              onClick={onOpenAnalysis}
              className="flex-1 rounded-xl bg-[#212121] border border-[#fbf7e4]/10 p-6 relative overflow-hidden group cursor-pointer hover:border-[#fbf7e4]/30 transition-all shadow-xl min-h-[220px]"
            >
              <div className="noise-overlay opacity-[0.04]"></div>

              <div className="flex items-start justify-between mb-6 relative z-10">
                <span className="text-xs uppercase tracking-widest text-[#c9c6bc] font-semibold">
                  02 / Analysis
                </span>
                <div className="w-9 h-9 rounded-full bg-[#363533] flex items-center justify-center text-[#fbf7e4] group-hover:scale-110 transition-transform">
                  <BarChart3 size={16} />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-medium text-[#fbf7e4] mb-1 font-headline">
                  Smart Critiques
                </h3>
                <p className="text-xs text-[#c9c6bc] font-body leading-relaxed max-w-[85%]">
                  AI-driven compositional and pacing analysis with real-time feedback.
                </p>
              </div>

              <img
                src={FEATURE_ANALYSIS_IMG}
                alt="AI Analysis Interface"
                className="absolute -right-8 -bottom-8 w-44 opacity-40 mix-blend-screen group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 pointer-events-none rounded-lg"
              />
            </div>
          </div>

          {/* Feature 4: Immersion Capsule (col-span-12) */}
          <div className="col-span-1 md:col-span-12 rounded-xl bg-[#212121] border border-[#fbf7e4]/10 p-8 md:p-12 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="noise-overlay opacity-[0.04]"></div>

            <div className="z-10 md:w-1/2">
              <span className="text-xs uppercase tracking-widest text-[#c9c6bc] font-semibold mb-3 block">
                03 / Focus
              </span>
              <h3 className="text-3xl md:text-4xl font-medium text-[#fbf7e4] mb-4 font-headline">
                Immersion Capsule
              </h3>
              <p className="text-sm text-[#c9c6bc] font-body leading-relaxed max-w-md">
                Distraction-free editing environment designed for deep creative work. Everything fades away except your vision.
              </p>

              <button
                onClick={onOpenCapsule}
                className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest font-semibold text-[#fbf7e4] border-b border-[#fbf7e4]/30 hover:border-[#fbf7e4] pb-1 transition-all cursor-pointer group-hover:text-[#dedbc8]"
              >
                <span>Explore Capsule</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            <div
              onClick={onOpenCapsule}
              className="z-10 md:w-1/2 flex justify-end cursor-pointer group/img"
            >
              <div className="relative overflow-hidden rounded-lg border border-[#48473f]/30">
                <img
                  src={FEATURE_CAPSULE_IMG}
                  alt="Immersion Interface"
                  className="w-full max-w-md rounded-lg opacity-85 mix-blend-lighten group-hover/img:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-black/80 backdrop-blur-md rounded-full text-xs font-semibold text-[#fbf7e4] flex items-center gap-2 border border-[#fbf7e4]/30">
                    <Maximize2 size={14} /> Launch Fullscreen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
