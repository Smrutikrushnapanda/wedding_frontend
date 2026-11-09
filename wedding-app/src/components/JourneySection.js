'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';

export default function JourneySection() {
  return (
    <section id="journey" className="px-4 my-5 relative z-10">
      <SwirlHeader title="A Peek into Our Journey" />

      <div className="grid grid-cols-[1.15fr_1.35fr] gap-3 items-center mt-3">
        {/* Left: Authentic 3-Photo Polaroid Collage */}
        <div className="relative flex items-center justify-center pl-0.5">
          <div className="w-full relative transition-transform hover:scale-102">
            <SafeImage
              src="/images/Sunset Memories Photo Collage.png"
              alt="Aditya and Subhashree Journey Photos"
              className="w-full h-auto object-contain drop-shadow-[0_6px_16px_rgba(217,72,108,0.22)]"
            />
          </div>
        </div>

        {/* Right: Milestone Timeline Rows */}
        <div className="flex flex-col justify-between space-y-3.5 pr-1">
          {/* Milestone 1: First Met */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full shrink-0 bg-gradient-to-b from-[#fff6f4] via-[#fde4dc] to-[#fcdcd4] border border-[#f8c6b8] shadow-[0_2px_8px_rgba(235,160,180,0.28)] flex items-center justify-center transition-transform hover:scale-105">
              <svg className="w-5 h-5 text-[#801c31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h5 className="font-serif font-bold text-[14.5px] text-[#591422] leading-tight tracking-tight">
                First Met
              </h5>
              <p className="font-serif text-[11px] text-[#3d1620] leading-tight mt-0.5">
                A simple meeting ...
              </p>
            </div>
          </div>

          {/* Milestone 2: Became Friends */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full shrink-0 bg-gradient-to-b from-[#fff6f4] via-[#fde4dc] to-[#fcdcd4] border border-[#f8c6b8] shadow-[0_2px_8px_rgba(235,160,180,0.28)] flex items-center justify-center transition-transform hover:scale-105">
              <svg className="w-5 h-5 text-[#801c31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="8" cy="10" r="1.1" fill="currentColor" />
                <circle cx="12" cy="10" r="1.1" fill="currentColor" />
                <circle cx="16" cy="10" r="1.1" fill="currentColor" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h5 className="font-serif font-bold text-[14.5px] text-[#591422] leading-tight tracking-tight">
                Became Friends
              </h5>
              <p className="font-serif text-[11px] text-[#3d1620] leading-tight mt-0.5">
                Conversations that never ended ...
              </p>
            </div>
          </div>

          {/* Milestone 3: Fell in Love */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full shrink-0 bg-gradient-to-b from-[#fff6f4] via-[#fde4dc] to-[#fcdcd4] border border-[#f8c6b8] shadow-[0_2px_8px_rgba(235,160,180,0.28)] flex items-center justify-center transition-transform hover:scale-105">
              <svg className="w-5 h-5 text-[#801c31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h5 className="font-serif font-bold text-[14.5px] text-[#591422] leading-tight tracking-tight">
                Fell in Love
              </h5>
              <p className="font-serif text-[11px] text-[#3d1620] leading-tight mt-0.5">
                When friendship turned into something more ...
              </p>
            </div>
          </div>

          {/* Milestone 4: Forever */}
          <div className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full shrink-0 bg-gradient-to-b from-[#fff6f4] via-[#fde4dc] to-[#fcdcd4] border border-[#f8c6b8] shadow-[0_2px_8px_rgba(235,160,180,0.28)] flex items-center justify-center transition-transform hover:scale-105">
              <svg className="w-5 h-5 text-[#801c31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.178 8c5.096 0 5.096 8 0 8-2.613 0-4.093-2.036-6.178-4.222C9.914 9.588 8.435 8 5.822 8c-5.096 0-5.096 8 0 8 2.613 0 4.093-2.036 6.178-4.222C14.086 14.412 15.565 16 18.178 16" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h5 className="font-serif font-bold text-[14.5px] text-[#591422] leading-tight tracking-tight">
                Forever
              </h5>
              <p className="font-serif text-[11px] text-[#3d1620] leading-tight mt-0.5">
                Now, we begin a new chapter together ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
