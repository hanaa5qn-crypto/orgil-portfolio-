import React, { useState } from 'react';
import { STORYBOARD_SCENES } from '../data/portfolioData';
import { StoryboardScene } from '../types';
import { X, Plus, MoveUp, MoveDown, Image as ImageIcon } from 'lucide-react';

interface StoryboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryboardModal: React.FC<StoryboardModalProps> = ({ isOpen, onClose }) => {
  const [scenes, setScenes] = useState<StoryboardScene[]>(STORYBOARD_SCENES);
  const [selectedScene, setSelectedScene] = useState<StoryboardScene>(STORYBOARD_SCENES[0]);

  if (!isOpen) return null;

  const moveScene = (index: number, direction: 'up' | 'down') => {
    const newScenes = [...scenes];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newScenes.length) return;
    const temp = newScenes[index];
    newScenes[index] = newScenes[targetIdx];
    newScenes[targetIdx] = temp;
    setScenes(newScenes);
  };

  const handleAddScene = () => {
    const newScene: StoryboardScene = {
      id: `s-${Date.now()}`,
      sceneNumber: `SCENE 0${scenes.length + 1}`,
      title: 'New Scene Shot',
      description: 'Slow tracking motion through shadow into warm key light.',
      shotType: 'Close Up (CU)',
      cameraMovement: 'Subtle Steadicam Push',
      imageUrl: STORYBOARD_SCENES[scenes.length % STORYBOARD_SCENES.length].imageUrl,
      duration: '00:05',
    };
    setScenes([...scenes, newScene]);
    setSelectedScene(newScene);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#101010] border border-[#fbf7e4]/20 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#48473f]/30">
          <div>
            <span className="text-xs font-semibold uppercase text-[#dedbc8] tracking-widest">
              01 / Storyboard Planner
            </span>
            <h2 className="text-2xl md:text-3xl font-medium text-[#fbf7e4] font-headline mt-1">
              Project Storyboard
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#201f1e] text-[#fbf7e4] hover:bg-[#2b2a28] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Active Preview */}
          <div className="lg:col-span-7 bg-[#1c1b1a] p-5 rounded-xl border border-[#48473f]/30 flex flex-col justify-between">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-black mb-4">
              <img
                src={selectedScene.imageUrl}
                alt={selectedScene.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-bold text-[#fbf7e4]">
                {selectedScene.sceneNumber}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 px-2.5 py-1 rounded text-xs text-[#c9c6bc]">
                Duration: {selectedScene.duration}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-medium text-[#fbf7e4] font-headline">
                {selectedScene.title}
              </h3>
              <p className="text-xs text-[#c9c6bc] font-body leading-relaxed">
                {selectedScene.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#48473f]/30 text-xs">
                <div>
                  <span className="text-[#939187] block uppercase text-[10px]">Shot Type</span>
                  <span className="font-semibold text-[#fbf7e4]">{selectedScene.shotType}</span>
                </div>
                <div>
                  <span className="text-[#939187] block uppercase text-[10px]">Camera Motion</span>
                  <span className="font-semibold text-[#fbf7e4]">{selectedScene.cameraMovement}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scene List Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase text-[#939187]">
                Scene Sequence ({scenes.length})
              </span>
              <button
                onClick={handleAddScene}
                className="text-xs bg-[#fbf7e4] text-[#323124] px-3 py-1 rounded-full font-semibold uppercase flex items-center gap-1 hover:bg-[#dedbc8] transition-colors cursor-pointer"
              >
                <Plus size={12} /> Add Shot
              </button>
            </div>

            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
              {scenes.map((scene, idx) => {
                const isSelected = scene.id === selectedScene.id;
                return (
                  <div
                    key={scene.id}
                    onClick={() => setSelectedScene(scene)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#2b2a28] border-[#fbf7e4]/40 text-[#fbf7e4]'
                        : 'bg-[#1c1b1a] border-[#48473f]/30 text-[#c9c6bc] hover:bg-[#201f1e]'
                    }`}
                  >
                    <div className="w-12 h-12 rounded overflow-hidden bg-black flex-shrink-0">
                      <img
                        src={scene.imageUrl}
                        alt={scene.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase text-[#dedbc8]">
                        {scene.sceneNumber}
                      </div>
                      <div className="text-xs font-semibold truncate">{scene.title}</div>
                      <div className="text-[10px] text-[#939187]">{scene.shotType}</div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveScene(idx, 'up');
                        }}
                        disabled={idx === 0}
                        className="p-1 text-[#939187] hover:text-[#fbf7e4] disabled:opacity-30"
                      >
                        <MoveUp size={12} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveScene(idx, 'down');
                        }}
                        disabled={idx === scenes.length - 1}
                        className="p-1 text-[#939187] hover:text-[#fbf7e4] disabled:opacity-30"
                      >
                        <MoveDown size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
