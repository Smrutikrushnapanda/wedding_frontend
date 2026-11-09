'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { LotusIcon } from './Icons';

const RITUALS = [
  { name: 'Haldi', img: '/images/ritual-circle-1.png' },
  { name: 'Mehndi', img: '/images/ritual-circle-2.png' },
  { name: 'Sangeet', img: '/images/ritual-circle-3.png' },
  { name: 'Wedding', img: '/images/ritual-circle-4.png' },
  { name: 'Reception', img: '/images/ritual-circle-5.png' },
];

export default function RitualsSection() {
  return (
    <section id="rituals" className="px-4 my-4 relative z-10">
      <SwirlHeader title="Wedding Rituals" icon={<LotusIcon className="w-5 h-5 text-[#b8741a]" />} />

      <div className="grid grid-cols-5 gap-2 mt-3 text-center">
        {RITUALS.map((ritual, idx) => (
          <div key={idx} className="flex flex-col items-center group cursor-pointer">
            <div className="w-[58px] h-[58px] rounded-full drop-shadow-[0_4px_10px_rgba(217,72,108,0.22)] flex items-center justify-center mb-1.5 transition-transform group-hover:scale-105 active:scale-95">
              <SafeImage
                src={ritual.img}
                alt={ritual.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-serif text-[11.5px] font-semibold text-[#5c2431] tracking-tight">
              {ritual.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
