import React from 'react';
import { ArrowUpRight, Mail, Instagram, Video } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  return (
    <footer id="contact" className="bg-[#141312] border-t border-[#48473f]/20 py-16 px-4 md:px-16 text-[#e6e2df] relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Contact Hero CTA */}
        <div className="mb-16 pb-12 border-b border-[#48473f]/20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
              04 / Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-medium text-[#fbf7e4] font-headline tracking-tight max-w-xl">
              Let's craft something timeless.
            </h2>
          </div>

          <button
            onClick={onOpenInquiry}
            className="px-8 py-4 bg-[#fbf7e4] text-[#323124] rounded-full text-xs uppercase font-semibold tracking-widest hover:bg-[#dedbc8] hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-2xl flex items-center gap-2"
          >
            <span>Start an Inquiry</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Footer Navigation Bar matching exact design screenshot */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[#c9c6bc] font-body">
          <span className="font-serif text-3xl text-[#fbf7e4]">Prisma</span>

          <div className="flex flex-wrap gap-6 text-xs">
            <a href="#" className="text-[#474746] hover:text-[#fbf7e4] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#474746] hover:text-[#fbf7e4] transition-colors">
              Terms of Service
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#474746] hover:text-[#fbf7e4] transition-colors">
              Instagram
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="text-[#474746] hover:text-[#fbf7e4] transition-colors">
              Vimeo
            </a>
          </div>

          <p className="text-[#939187]">© 2024 Prisma Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
