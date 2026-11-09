'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import { PlaneIcon, TrainIcon, CarIcon } from './Icons';

const TRAVEL_OPTIONS = [
  {
    mode: 'By Air',
    hub: 'Biju Patnaik Int\'l Airport (BBI)',
    tag: '📍 ~11 km',
    info: 'Prepaid airport taxis, Ola & Uber available 24/7',
    icon: <PlaneIcon className="w-5 h-5 text-[#801c31]" />,
  },
  {
    mode: 'By Train',
    hub: 'Bhubaneswar Railway Station (BBS)',
    tag: '📍 ~8 km',
    info: 'Readily available auto-rickshaws & app cabs at exit',
    icon: <TrainIcon className="w-5 h-5 text-[#801c31]" />,
  },
  {
    mode: 'By Road',
    hub: 'National Highway 16 (NH-16)',
    tag: '🛣️ Direct',
    info: 'Prime highway connectivity with dedicated valet parking',
    icon: <CarIcon className="w-5 h-5 text-[#801c31]" />,
  },
];

export default function ReachSection() {
  return (
    <section id="reach" className="px-4 my-5 relative z-10">
      <SwirlHeader title="How to Reach" />

      <div className="space-y-2.5 mt-2.5">
        {TRAVEL_OPTIONS.map((item, idx) => (
          <div
            key={idx}
            className="wedding-card p-3 rounded-[22px] bg-white/95 backdrop-blur-xs border border-[#f8dad0] shadow-[0_2px_10px_rgba(235,160,180,0.18)] flex items-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* Scalloped Travel Badge */}
            <div className="w-12 h-12 rounded-[18px] bg-gradient-to-b from-[#fff7f5] via-[#fde8e2] to-[#fcdfd8] border border-[#f8c6b8] shadow-[0_2px_6px_rgba(235,160,180,0.22)] flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            {/* Travel Information */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="font-serif font-bold text-[14px] text-[#6b1e2c] leading-tight">
                  {item.mode}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#fde8ef] border border-[#f8cad6] text-[#801c31] font-serif font-bold text-[10px] whitespace-nowrap shadow-2xs">
                  {item.tag}
                </span>
              </div>
              <p className="font-serif text-[11px] text-[#3d1620] font-medium leading-tight mt-0.5 truncate">
                {item.hub}
              </p>
              <p className="font-serif text-[10px] text-[#783e4c] leading-tight mt-0.5">
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
