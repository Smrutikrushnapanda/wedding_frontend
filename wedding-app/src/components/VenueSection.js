'use client';

import React, { useState } from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { PinIcon, CalendarIcon, ClockIcon, CopyIcon } from './Icons';

export default function VenueSection() {
  const [copied, setCopied] = useState(false);
  const venueAddress = 'Kalyan Mandap, Jayadev Vihar, Bhubaneswar, Odisha 751013';

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(venueAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="venue" className="px-4 my-5 relative z-10">
      <SwirlHeader title="Wedding Venue" icon={<PinIcon className="w-5 h-5 text-[#b8741a]" />} />

      {/* Luxury Royal Venue Card */}
      <div className="wedding-card p-0 rounded-[24px] overflow-hidden border border-[#f8dad0] shadow-[0_6px_22px_rgba(235,160,180,0.24)] bg-white/95 mt-2">
        {/* Venue Picture Banner with Lighting & Gradient */}
        <div className="relative h-44 w-full overflow-hidden bg-[#2d0f19]">
          <SafeImage
            src="/images/kalyan-mandap.jpg"
            alt="Kalyan Mandap"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20070e]/90 via-[#20070e]/35 to-transparent pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#f5d6c6] text-[10px] font-serif font-bold text-[#801c31] flex items-center gap-1 shadow-sm select-none">
            <PinIcon className="w-3 h-3 text-[#c52c54]" />
            <span>Bhubaneswar, Odisha</span>
          </div>

          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-[10px] font-serif text-amber-200 flex items-center gap-1 select-none">
            <span>✨</span>
            <span>Sacred Mandap</span>
          </div>

          {/* Venue Name overlay */}
          <div className="absolute bottom-3 inset-x-4">
            <h3 className="font-script text-[26px] sm:text-[28px] leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Kalyan Mandap
            </h3>
            <p className="font-serif text-[11px] text-rose-100/90 leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              The Grand Ballroom &amp; Courtyard
            </p>
          </div>
        </div>

        {/* Venue Details & Key Information */}
        <div className="p-4">
          <p className="font-serif text-[12px] text-[#421520] font-medium leading-relaxed">
            Jayadev Vihar, Near NH-16, Bhubaneswar, Odisha 751013
          </p>

          {/* 3 Quick Chips Row */}
          <div className="grid grid-cols-3 gap-2 my-3 pt-1 border-t border-[#f5d6c6]/60">
            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-[#fff7f5] border border-[#f5d6c6]/50">
              <CalendarIcon className="w-3.5 h-3.5 text-[#b8741a] mb-0.5" />
              <span className="font-serif text-[9px] text-[#843e4d] uppercase font-bold tracking-wider">Date</span>
              <span className="font-serif text-[11px] font-bold text-[#5c1c28]">24 Feb, 2027</span>
            </div>

            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-[#fff7f5] border border-[#f5d6c6]/50">
              <ClockIcon className="w-3.5 h-3.5 text-[#b8741a] mb-0.5" />
              <span className="font-serif text-[9px] text-[#843e4d] uppercase font-bold tracking-wider">Muhurat</span>
              <span className="font-serif text-[11px] font-bold text-[#5c1c28]">06:30 PM</span>
            </div>

            <div className="flex flex-col items-center text-center p-1.5 rounded-xl bg-[#fff7f5] border border-[#f5d6c6]/50">
              <span className="text-[12px] leading-none mb-0.5">🅿️</span>
              <span className="font-serif text-[9px] text-[#843e4d] uppercase font-bold tracking-wider">Parking</span>
              <span className="font-serif text-[11px] font-bold text-[#5c1c28]">Valet Setup</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 mt-2">
            <a
              href="https://maps.google.com/?q=Kalyan+Mandap,+Jayadev+Vihar,+Bhubaneswar,+Odisha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-gradient-to-r from-[#d93b68] via-[#e54b77] to-[#ec5580] text-white font-serif text-[12px] font-medium shadow-[0_3px_12px_rgba(217,59,104,0.32)] active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer select-none"
            >
              <span>View on Map</span>
              <span className="font-sans">↗</span>
            </a>

            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-full bg-white/95 border border-[#f5d6c6] text-[#78283a] font-serif text-[12px] font-medium shadow-xs active:scale-95 transition-transform flex items-center justify-center gap-1.5 cursor-pointer select-none"
            >
              <CopyIcon className="w-3.5 h-3.5 text-[#801c31]" />
              <span>{copied ? 'Copied ✓' : 'Copy Address'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
