import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Play, Camera, Film, Layers, X, Sparkles } from 'lucide-react';

export const WorkGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Narrative', 'Commercial', 'Color Grade', 'Music Video'];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 md:py-32 px-4 md:px-16 bg-[#0f0e0d] relative border-t border-[#48473f]/20">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#48473f]/20 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#939187] mb-2 block font-body">
              01 / Selected Works
            </span>
            <h2 className="text-3xl md:text-5xl font-medium text-[#fbf7e4] font-headline">
              Selected Direction & Color
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#fbf7e4] text-[#323124]'
                      : 'bg-[#201f1e] text-[#c9c6bc] hover:text-[#fbf7e4] hover:bg-[#2b2a28]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-[#1c1b1a] rounded-xl border border-[#48473f]/20 overflow-hidden group cursor-pointer hover:border-[#fbf7e4]/30 transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-[#fbf7e4] px-3 py-1 rounded-full border border-[#fbf7e4]/20">
                    {project.category}
                  </span>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                  <div className="w-12 h-12 rounded-full bg-[#fbf7e4] text-[#323124] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                    <Play size={20} fill="#323124" className="ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-[10px] text-[#c9c6bc] bg-black/60 px-2.5 py-1 rounded-md border border-[#48473f]/30">
                  {project.year}
                </div>
              </div>

              {/* Content Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl md:text-2xl font-medium text-[#fbf7e4] font-headline">
                      {project.title}
                    </h3>
                    <span className="text-xs text-[#939187] font-body">
                      {project.role}
                    </span>
                  </div>
                  {project.client && (
                    <p className="text-xs text-[#dedbc8] mb-3 font-semibold uppercase tracking-wider">
                      Client: {project.client}
                    </p>
                  )}
                  <p className="text-xs text-[#c9c6bc] font-body line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#48473f]/20">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-[#939187] bg-[#201f1e] px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1c1b1a] border border-[#fbf7e4]/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 text-[#fbf7e4] hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Video / Reel Player */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden rounded-t-2xl">
              {selectedProject.videoUrl ? (
                <video
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#48473f]/30 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase text-[#dedbc8] tracking-widest">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-medium text-[#fbf7e4] font-headline mt-1">
                    {selectedProject.title}
                  </h2>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-xs text-[#939187]">Role</div>
                  <div className="text-sm font-semibold text-[#fbf7e4]">
                    {selectedProject.role}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#e6e2df] font-body leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Specs Breakdown Grid */}
              <div className="bg-[#141312] p-5 rounded-xl border border-[#48473f]/30 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-[10px] font-semibold text-[#939187] uppercase flex items-center gap-1">
                    <Camera size={12} /> Camera
                  </div>
                  <div className="text-xs text-[#fbf7e4] font-semibold mt-1">
                    {selectedProject.specs.camera}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#939187] uppercase flex items-center gap-1">
                    <Film size={12} /> Lenses
                  </div>
                  <div className="text-xs text-[#fbf7e4] font-semibold mt-1">
                    {selectedProject.specs.lens}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#939187] uppercase flex items-center gap-1">
                    <Sparkles size={12} /> Color Space
                  </div>
                  <div className="text-xs text-[#fbf7e4] font-semibold mt-1">
                    {selectedProject.specs.colorSpace}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#939187] uppercase flex items-center gap-1">
                    <Layers size={12} /> Aspect Ratio
                  </div>
                  <div className="text-xs text-[#fbf7e4] font-semibold mt-1">
                    {selectedProject.specs.aspectRatio}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
