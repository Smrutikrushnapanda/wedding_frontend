'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { CalendarIcon, ClockIcon } from './Icons';

const CELEBRATIONS = [
  {
    title: 'Haldi',
    date: '20 Feb, 2027',
    time: '10:00 AM',
    img: '/images/haldi-thumb.jpg',
  },
  {
    title: 'Mehndi',
    date: '20 Feb, 2027',
    time: '04:00 PM',
    img: '/images/mehndi-thumb.jpg',
  },
  {
    title: 'Sangeet',
    date: '21 Feb, 2027',
    time: '07:00 PM',
    img: '/images/sangeet-thumb.jpg',
  },
  {
    title: 'Wedding',
    date: '24 Feb, 2027',
    time: '06:30 PM',
    img: '/images/wedding-thumb.jpg',
  },
  {
    title: 'Reception',
    date: '25 Feb, 2027',
    time: '07:30 PM',
    img: '/images/reception-thumb.jpg',
  },
];

export default function CelebrationsSection() {
  return (
    <section id="celebrations" className="px-4 my-5 relative z-10">
      {/* Symmetrical Heart Swirl Header matching screenshot */}
      <SwirlHeader title="Wedding Celebrations" />

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 space-y-2 mt-2">
        {/* Continuous Gold Vertical Timeline Line */}
        <div className="absolute left-[9px] top-4 bottom-4 w-[1.5px] bg-[#c58428]" />

        {CELEBRATIONS.map((event, idx) => (
          <div key={idx} className="relative flex items-center">
            {/* Golden Heart Marker with white stroke + horizontal connector */}
            <div className="absolute -left-[24px] top-1/2 -translate-y-1/2 flex items-center z-20 pointer-events-none">
              <div className="w-4.5 h-4.5 flex items-center justify-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
                <svg
                  className="w-4 h-4 text-[#c58428]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="w-2.5 h-[1.5px] bg-[#c58428]" />
            </div>

            {/* Pill Event Card */}
            <div className="w-full bg-white/95 backdrop-blur-xs border border-[#f8dad0] shadow-[0_2px_8px_rgba(235,160,180,0.18)] rounded-full p-1.5 pr-4 flex items-center justify-between gap-2.5 transition-transform active:scale-[0.99]">
              {/* Event Thumbnail */}
              <div className="w-[74px] h-[46px] rounded-[13px] overflow-hidden shrink-0 border border-[#f5d6c6]/60 shadow-2xs">
                <SafeImage
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title, Date & Time */}
              <div className="flex-1 min-w-0 py-0.5">
                <h4 className="font-script text-[21px] sm:text-[23px] leading-[0.95] text-[#6b1d2f] truncate">
                  {event.title}
                </h4>
                <div className="flex items-center gap-2.5 text-[11px] font-serif text-[#3b1520] mt-0.5">
                  <span className="flex items-center gap-1 font-medium whitespace-nowrap">
                    <CalendarIcon className="w-3 h-3 text-[#6b1d2f] shrink-0" />
                    <span>{event.date}</span>
                  </span>
                  <span className="flex items-center gap-1 font-medium whitespace-nowrap">
                    <ClockIcon className="w-3 h-3 text-[#6b1d2f] shrink-0" />
                    <span>{event.time}</span>
                  </span>
                </div>
              </div>

              {/* Chevron Arrow */}
              <div className="shrink-0 pl-0.5 text-[#732938]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
