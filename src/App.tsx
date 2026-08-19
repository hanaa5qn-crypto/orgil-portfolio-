/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CommunitiesSection } from './components/CommunitiesSection';
import { Footer } from './components/Footer';

import { InquiryModal } from './components/InquiryModal';

import { Community } from './types';
import { FORM } from './data/content';

// Which entry of FORM.options.communities a card's CTA preselects in the inquiry form.
const COMMUNITY_OPTION_INDEX: Record<Community['id'], number> = {
  crg: 0,
};

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modal States
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryCommunity, setInquiryCommunity] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'communities', 'contact'];
    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const mostVisibleSection = sectionIds.reduce((mostVisible, sectionId) =>
          (visibility.get(sectionId) ?? 0) > (visibility.get(mostVisible) ?? 0)
            ? sectionId
            : mostVisible
        );
        setActiveSection(mostVisibleSection);
      },
      { threshold: Array.from({ length: 101 }, (_, index) => index / 100) }
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openInquiry = (community?: Community) => {
    setInquiryCommunity(
      community ? FORM.options.communities[COMMUNITY_OPTION_INDEX[community.id]] : undefined
    );
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#e6e2df] font-sans relative selection:bg-[#fbf7e4] selection:text-[#323124]">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInquiry={() => openInquiry()}
      />

      {/* Main Page Sections */}
      <main>
        <HeroSection
          onJoin={() => handleNavigate('communities')}
          onReadStory={() => handleNavigate('about')}
        />
        <AboutSection />
        <CommunitiesSection onApply={openInquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => openInquiry()} />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        preselectedCommunity={inquiryCommunity}
      />
    </div>
  );
}
