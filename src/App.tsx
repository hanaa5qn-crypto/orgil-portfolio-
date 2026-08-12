/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StudioWorkflowsSection } from './components/StudioWorkflowsSection';
import { WorkGallerySection } from './components/WorkGallerySection';
import { JournalSection } from './components/JournalSection';
import { Footer } from './components/Footer';

import { InquiryModal } from './components/InquiryModal';
import { StoryboardModal } from './components/StoryboardModal';
import { AnalysisModal } from './components/AnalysisModal';
import { CapsuleModal } from './components/CapsuleModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modal States
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isStoryboardOpen, setIsStoryboardOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isCapsuleOpen, setIsCapsuleOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#e6e2df] font-sans relative selection:bg-[#fbf7e4] selection:text-[#323124]">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection onJoinLab={() => setIsInquiryOpen(true)} />
        <AboutSection />
        <StudioWorkflowsSection
          onOpenStoryboard={() => setIsStoryboardOpen(true)}
          onOpenAnalysis={() => setIsAnalysisOpen(true)}
          onOpenCapsule={() => setIsCapsuleOpen(true)}
        />
        <WorkGallerySection />
        <JournalSection />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      <StoryboardModal
        isOpen={isStoryboardOpen}
        onClose={() => setIsStoryboardOpen(false)}
      />

      <AnalysisModal
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
      />

      <CapsuleModal
        isOpen={isCapsuleOpen}
        onClose={() => setIsCapsuleOpen(false)}
      />
    </div>
  );
}
