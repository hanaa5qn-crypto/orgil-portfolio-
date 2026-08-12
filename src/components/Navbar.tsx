import React from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenInquiry,
}) => {
  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'Studio' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 md:px-8 py-3 gap-8 pointer-events-none mt-4 md:mt-6">
      <div className="bg-[#141312]/75 backdrop-blur-xl rounded-full mx-auto w-fit border border-[#48473f]/30 shadow-2xl pointer-events-auto flex items-center px-5 md:px-6 py-2 gap-4 md:gap-6">
        <button 
          onClick={() => onNavigate('hero')}
          className="font-serif text-2xl md:text-3xl tracking-tighter text-[#fbf7e4] mr-2 md:mr-4 hover:opacity-80 transition-opacity"
        >
          Prisma
        </button>
        
        <div className="hidden md:flex items-center gap-6 text-xs tracking-widest uppercase font-semibold font-body">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? 'text-[#fbf7e4] font-bold border-b border-[#fbf7e4] pb-0.5'
                    : 'text-[#c9c6bc] hover:text-[#fbf7e4]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={onOpenInquiry}
          className="ml-2 md:ml-4 px-4 py-2 bg-[#fbf7e4] text-[#323124] rounded-full text-xs uppercase font-semibold tracking-wider hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md cursor-pointer"
        >
          Inquiry
        </button>
      </div>
    </nav>
  );
};
