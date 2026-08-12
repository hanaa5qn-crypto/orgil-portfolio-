import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/portfolioData';
import { JournalArticle } from '../types';
import { BookOpen, ArrowUpRight, X, Clock } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="py-24 md:py-32 px-4 md:px-16 bg-[#141312] border-t border-[#48473f]/20 relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
            03 / Journal & Theory
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-[#fbf7e4] font-headline">
            Notes on Film Grammar
          </h2>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {JOURNAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="bg-[#1c1b1a] rounded-2xl p-6 md:p-8 border border-[#48473f]/20 hover:border-[#fbf7e4]/30 transition-all cursor-pointer group shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3 text-xs text-[#939187]">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-[#fbf7e4] font-headline group-hover:text-[#dedbc8] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs md:text-sm text-[#c9c6bc] font-body line-clamp-2 leading-relaxed">
                  {article.subtitle}
                </p>
                <div className="flex gap-2 pt-2">
                  {article.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] uppercase tracking-wider text-[#dedbc8] bg-[#2b2a28] px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="self-start md:self-center">
                <button className="w-10 h-10 rounded-full bg-[#2b2a28] text-[#fbf7e4] flex items-center justify-center group-hover:bg-[#fbf7e4] group-hover:text-[#323124] transition-all">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1c1b1a] border border-[#fbf7e4]/20 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-12 shadow-2xl relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#2b2a28] text-[#fbf7e4] hover:bg-[#363533] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="space-y-6">
              <div className="border-b border-[#48473f]/30 pb-6">
                <div className="flex items-center gap-2 text-xs text-[#dedbc8] uppercase font-semibold tracking-wider mb-2">
                  <BookOpen size={14} /> {activeArticle.date} • {activeArticle.readTime}
                </div>
                <h2 className="text-2xl md:text-4xl font-medium text-[#fbf7e4] font-headline mb-3">
                  {activeArticle.title}
                </h2>
                <p className="text-base text-[#c9c6bc] italic font-serif">
                  {activeArticle.subtitle}
                </p>
              </div>

              <div className="space-y-4 text-sm md:text-base text-[#e6e2df] font-body leading-relaxed">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#48473f]/30 flex flex-wrap gap-2">
                {activeArticle.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-[#dedbc8] bg-[#2b2a28] px-3 py-1 rounded-full font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
