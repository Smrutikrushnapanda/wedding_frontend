'use client';

import React, { useState, useEffect } from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { HangerIcon } from './Icons';

const DRESS_CODES = [
  {
    event: 'Haldi',
    theme: 'Yellow & Warm Tones',
    menImg: '/images/Indian Wedding Haldi and Mehndi Outfits (1).png',
    womenImg: '/images/Indian Wedding Haldi and Mehndi Outfits (2).png',
    menDesc: 'Traditional / Ethnic Wear',
    womenDesc: 'Saree / Lehenga / Ethnic Wear',
  },
  {
    event: 'Mehndi',
    theme: 'Green & Floral Tones',
    menImg: '/images/Indian Wedding Haldi and Mehndi Outfits (3).png',
    womenImg: '/images/Indian Wedding Haldi and Mehndi Outfits (4).png',
    menDesc: 'Traditional / Ethnic Wear',
    womenDesc: 'Saree / Lehenga / Ethnic Wear',
  },
];

export default function DressCodeSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-loop alternating between Haldi and Mehndi outfits every 3.5s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % DRESS_CODES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = DRESS_CODES[activeIdx];

  return (
    <section
      id="dress-code"
      className="px-4 my-4 relative z-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
    >
      <SwirlHeader title="Dress Code" icon={<HangerIcon className="w-5 h-5 text-[#b8741a]" />} />

      {/* Event Selector Pills */}
      <div className="flex items-center justify-center gap-2 mt-1 mb-2">
        {DRESS_CODES.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`px-3 py-1 rounded-full text-[11px] font-serif font-medium transition-all cursor-pointer ${
              activeIdx === idx
                ? 'bg-gradient-to-r from-[#d93b68] to-[#ea537e] text-white shadow-[0_2px_8px_rgba(217,59,104,0.32)] scale-102'
                : 'bg-white/80 text-[#7a2c3a] border border-[#f5d6c6]'
            }`}
          >
            {item.event} Outfits
          </button>
        ))}
      </div>

      {/* Two Side-by-Side Cards matching screenshot */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* For Men Card */}
        <div className="wedding-card p-2.5 pr-2 rounded-[20px] bg-white/90 border border-[#f8dad0] shadow-[0_3px_12px_rgba(235,160,180,0.18)] flex items-center gap-2 min-h-[96px] transition-all duration-500">
          <div className="w-[46px] h-20 shrink-0 flex items-center justify-center">
            <SafeImage
              key={`men-${activeIdx}`}
              src={current.menImg}
              alt="Men Attire"
              className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)] transition-opacity duration-500"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-script text-[20px] sm:text-[21px] text-[#801c31] leading-tight">
              For Men
            </h4>
            <p className="font-serif text-[10px] text-[#3d1620] font-medium leading-tight mt-0.5">
              {current.menDesc}
            </p>
          </div>
        </div>

        {/* For Women Card */}
        <div className="wedding-card p-2.5 pr-2 rounded-[20px] bg-white/90 border border-[#f8dad0] shadow-[0_3px_12px_rgba(235,160,180,0.18)] flex items-center gap-2 min-h-[96px] transition-all duration-500">
          <div className="w-[54px] h-20 shrink-0 flex items-center justify-center">
            <SafeImage
              key={`women-${activeIdx}`}
              src={current.womenImg}
              alt="Women Attire"
              className="w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)] transition-opacity duration-500"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-script text-[20px] sm:text-[21px] text-[#801c31] leading-tight">
              For Women
            </h4>
            <p className="font-serif text-[10px] text-[#3d1620] font-medium leading-tight mt-0.5">
              {current.womenDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Subtitle / Theme indicator */}
      <div className="text-center mt-1.5">
        <span className="font-serif text-[10.5px] italic text-[#843a49]">
          Theme: {current.theme}
        </span>
      </div>
    </section>
  );
}
