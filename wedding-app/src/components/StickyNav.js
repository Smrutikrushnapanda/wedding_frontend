'use client';

import React, { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Welcome', icon: '💍' },
  { id: 'video', label: 'Live Stream', icon: '🎥' },
  { id: 'countdown', label: 'Big Day', icon: '⏳' },
  { id: 'story', label: 'Our Story', icon: '📖' },
  { id: 'celebrations', label: 'Celebrations', icon: '🎉' },
  { id: 'families', label: 'Families', icon: '👥' },
  { id: 'memories', label: 'Memories', icon: '📸' },
  { id: 'rituals', label: 'Rituals', icon: '🪔' },
  { id: 'journey', label: 'Journey', icon: '💫' },
  { id: 'dress-code', label: 'Dress Code', icon: '👗' },
  { id: 'venue', label: 'Venue & Reach', icon: '📍' },
  { id: 'share', label: 'Video Wishes', icon: '🎬' },
  { id: 'rsvp', label: 'RSVP', icon: '💌' },
];

export default function StickyNav() {
  // Closed by default per user request
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');
  const [isInteracting, setIsInteracting] = useState(false);
  const fadeTimerRef = useRef(null);

  // Briefly illuminate on touch/hover, then fade back to semi-invisible liquid glass
  const handleActivity = () => {
    setIsInteracting(true);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2800);
  };

  useEffect(() => {
    const container = typeof document !== 'undefined' ? document.getElementById('phone-screen') : null;
    const scrollTarget = container || window;

    const handleScroll = () => {
      handleActivity();
      const currentScroll = container ? container.scrollTop : window.scrollY;
      const scrollPos = currentScroll + 200;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      aria-label="Section Navigation"
      onMouseEnter={handleActivity}
      onTouchStart={handleActivity}
      className="fixed left-2 sm:left-[max(10px,calc(50%-215px-48px))] top-1/2 -translate-y-1/2 z-40 transition-all duration-300"
    >
      {isOpen ? (
        // Expanded liquid glass morphism dock
        <div
          className={`backdrop-blur-xl bg-white/20 p-1.5 rounded-full border border-white/50 shadow-[0_8px_32px_rgba(217,72,108,0.12),inset_0_1px_2px_rgba(255,255,255,0.6)] flex flex-col items-center gap-1.5 max-h-[82vh] overflow-y-auto no-scrollbar transition-opacity duration-700 ease-out ${
            isInteracting ? 'opacity-95' : 'opacity-30 hover:opacity-95'
          }`}
        >
          {/* Close Nav Button */}
          <button
            onClick={() => {
              setIsOpen(false);
              handleActivity();
            }}
            title="Close navigation"
            aria-label="Close navigation"
            className="w-8 h-8 rounded-full backdrop-blur-md bg-white/35 hover:bg-white/60 text-[#8b233a] flex items-center justify-center text-[12px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer border border-white/50"
          >
            ✕
          </button>

          {/* Liquid Glass Section Circle Buttons */}
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div key={item.id} className="relative group flex items-center">
                <button
                  onClick={() => {
                    scrollTo(item.id);
                    handleActivity();
                  }}
                  onTouchStart={handleActivity}
                  aria-label={`Scroll to ${item.label}`}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[14px] transition-all duration-300 cursor-pointer active:scale-90 ${
                    isActive
                      ? 'bg-gradient-to-br from-[#c82d56]/90 to-[#e44d75]/90 text-white shadow-[0_2px_12px_rgba(200,45,86,0.45)] ring-2 ring-white/80 scale-110'
                      : 'backdrop-blur-md bg-white/30 text-[#6c1d2e] border border-white/50 hover:bg-white/70 hover:scale-105 shadow-[0_1px_4px_rgba(255,255,255,0.3)]'
                  }`}
                >
                  <span className="leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
                    {item.icon}
                  </span>
                </button>

                {/* Floating Tooltip Label */}
                <div className="absolute left-full ml-2 px-2.5 py-1 rounded-md bg-[#6c1d2e]/90 backdrop-blur-md text-white text-[11px] font-serif shadow-[0_3px_10px_rgba(0,0,0,0.2)] whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-white/20">
                  {item.label}
                  <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#6c1d2e]/90" />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Collapsed trigger circle: almost invisible transparent liquid glass, glows on touch/hover
        <button
          onClick={() => {
            setIsOpen(true);
            handleActivity();
          }}
          onTouchStart={handleActivity}
          onMouseEnter={handleActivity}
          title="Open Section Navigation"
          aria-label="Open Section Navigation"
          className={`w-10 h-10 rounded-full backdrop-blur-xl bg-white/20 border border-white/50 text-[#8b233a] shadow-[0_4px_20px_rgba(255,255,255,0.3),inset_0_1px_2px_rgba(255,255,255,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-700 cursor-pointer group ${
            isInteracting ? 'opacity-95 scale-105' : 'opacity-25 hover:opacity-95'
          }`}
        >
          <svg
            className="w-5 h-5 text-[#8b233a] transition-transform duration-300 group-hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="#8b233a" />
          </svg>
          <span className="absolute left-full ml-2 px-2.5 py-1 rounded-md bg-[#6c1d2e]/90 backdrop-blur-md text-white text-[11px] font-serif shadow-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-white/20">
            Open Menu
          </span>
        </button>
      )}
    </aside>
  );
}
