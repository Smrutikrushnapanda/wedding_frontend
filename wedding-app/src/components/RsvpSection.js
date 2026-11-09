'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import { EnvelopeIcon, CalendarIcon } from './Icons';

export default function RsvpSection() {
  return (
    <section id="rsvp" className="px-4 my-5 relative z-10 text-center">
      <SwirlHeader title="RSVP" icon={<EnvelopeIcon className="w-5 h-5 text-[#b8741a]" />} />

      {/* Ornate Luxury Card Matching Reference Screenshot 100% */}
      <div className="relative p-4 rounded-[26px] bg-gradient-to-b from-[#fffefe]/95 via-[#fff9fa]/95 to-[#fff2f5]/95 border-2 border-[#e7b878]/80 shadow-[0_6px_24px_rgba(235,160,180,0.22)] mt-2 flex flex-col items-center">
        {/* Delicate inner border matching luxury card */}
        <div className="absolute inset-1.5 rounded-[20px] border border-[#f0c391]/40 pointer-events-none" />

        <p className="relative z-10 font-serif text-[12px] text-[#421520] font-medium leading-relaxed max-w-[280px]">
          We would be delighted to have you with us on our special day!
        </p>

        <a
          href="https://wa.me/?text=Dear%20Aditya%20%26%20Subhashree%2C%20I%20will%20be%20delighted%20to%20attend%20your%20wedding%20celebrations%21"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-3 px-8 py-2.5 rounded-full bg-gradient-to-r from-[#d93b68] via-[#e54b77] to-[#ec5580] text-white font-serif font-bold text-[13px] shadow-[0_3px_12px_rgba(217,59,104,0.32)] active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <CalendarIcon className="w-4 h-4 text-white" />
          <span>RSVP Now</span>
          <span className="font-sans">→</span>
        </a>
      </div>
    </section>
  );
}
