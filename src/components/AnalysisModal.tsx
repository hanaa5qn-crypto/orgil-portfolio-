import React from 'react';
import { CRITIQUE_ITEMS } from '../data/portfolioData';
import { X, CheckCircle, AlertTriangle, Sparkles, Sliders } from 'lucide-react';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalysisModal: React.FC<AnalysisModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#101010] border border-[#fbf7e4]/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
        <div className="noise-overlay opacity-[0.03]"></div>

        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#48473f]/30">
          <div>
            <span className="text-xs font-semibold uppercase text-[#dedbc8] tracking-widest flex items-center gap-1.5">
              <Sparkles size={14} /> 02 / AI Compositional Engine
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-[#fbf7e4] font-headline mt-1">
              Smart Critiques & Frame Analysis
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#201f1e] text-[#fbf7e4] hover:bg-[#2b2a28] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Summary Card */}
        <div className="bg-[#1c1b1a] p-5 rounded-xl border border-[#48473f]/30 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#dedbc8] uppercase tracking-wider">
              Overall Film Harmony Index
            </div>
            <div className="text-3xl font-medium text-[#fbf7e4] font-headline mt-1">
              95.4 / 100 <span className="text-xs text-[#939187] font-normal">(Optimal Balance)</span>
            </div>
          </div>
          <div className="flex gap-4 text-xs">
            <div className="bg-[#201f1e] px-3.5 py-2 rounded-lg border border-[#48473f]/30 text-center">
              <div className="text-[#939187] text-[10px] uppercase">Rule of Thirds</div>
              <div className="font-bold text-[#fbf7e4]">98%</div>
            </div>
            <div className="bg-[#201f1e] px-3.5 py-2 rounded-lg border border-[#48473f]/30 text-center">
              <div className="text-[#939187] text-[10px] uppercase">Luma Distribution</div>
              <div className="font-bold text-[#fbf7e4]">94%</div>
            </div>
            <div className="bg-[#201f1e] px-3.5 py-2 rounded-lg border border-[#48473f]/30 text-center">
              <div className="text-[#939187] text-[10px] uppercase">Skin Tone Vector</div>
              <div className="font-bold text-[#fbf7e4]">96%</div>
            </div>
          </div>
        </div>

        {/* Critiques List */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xs font-semibold uppercase text-[#939187] tracking-wider">
            Detailed Frame Feedback
          </h3>

          {CRITIQUE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#1c1b1a] p-5 rounded-xl border border-[#48473f]/30 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase bg-[#2b2a28] text-[#fbf7e4] px-2.5 py-0.5 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-[#939187]">Timecode: {item.timestamp}</span>
                </div>
                <div className="text-xs font-bold text-[#fbf7e4] flex items-center gap-1">
                  Score: {item.score}/100
                </div>
              </div>

              <h4 className="text-base font-semibold text-[#fbf7e4] font-body">{item.title}</h4>

              <p className="text-xs text-[#c9c6bc] font-body leading-relaxed">{item.feedback}</p>

              <div className="bg-[#141312] p-3 rounded-lg border border-[#48473f]/20 flex items-start gap-2 text-xs text-[#dedbc8]">
                <Sliders size={14} className="mt-0.5 flex-shrink-0 text-[#fbf7e4]" />
                <div>
                  <span className="font-bold text-[#fbf7e4]">AI Recommendation: </span>
                  {item.suggestion}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
