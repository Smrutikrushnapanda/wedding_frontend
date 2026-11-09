'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';

export default function CountdownSection({ timeLeft }) {
  return (
    <section id="countdown" className="px-5 my-4 relative z-10 text-center">
      <SwirlHeader title="The Big Day In" />

      <div className="wedding-card p-2 rounded-[24px] shadow-[0_4px_16px_rgba(235,160,180,0.2)] bg-white/70 backdrop-blur-xs mt-2 border border-[#f8dad0]">
        <div className="grid grid-cols-4 gap-2">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.mins, label: 'Mins' },
            { value: timeLeft.secs, label: 'Secs' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-[16px] py-2.5 px-1 flex flex-col items-center justify-center border border-[#f5d6c6]/60 shadow-[0_2px_6px_rgba(235,160,180,0.12)]"
            >
              <span className="font-serif text-[24px] font-bold text-[#7d2033] leading-none">
                {item.value}
              </span>
              <span className="font-serif text-[11px] font-medium text-[#9a6332] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
