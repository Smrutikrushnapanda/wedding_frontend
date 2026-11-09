'use client';

import React from 'react';

export default function SwirlHeader({ title, icon }) {
  return (
    <div className="flex items-center justify-center gap-1.5 my-2 select-none">
      {/* Left Heart Swirl */}
      <div className="flex items-center gap-0.5 opacity-80 text-[#b8741a]">
        <svg className="w-4 h-2.5" viewBox="0 0 25 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M2 6 C8 2 14 10 22 6" />
          <circle cx="2" cy="6" r="1.2" fill="currentColor" />
        </svg>
        <span className="text-[11px] leading-none transform -rotate-12">♡</span>
        <svg className="w-3 h-2.5" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M2 6 C6 3 10 9 14 6" />
        </svg>
      </div>

      <div className="flex items-center gap-1.5 text-center">
        {icon && <span className="inline-flex items-center justify-center text-[#b8741a] scale-90">{icon}</span>}
        <h2 className="font-script text-[24px] sm:text-[26px] leading-tight text-[#b8741a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] px-0.5">
          {title}
        </h2>
      </div>

      {/* Right Heart Swirl */}
      <div className="flex items-center gap-0.5 opacity-80 text-[#b8741a]">
        <svg className="w-3 h-2.5" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M2 6 C6 3 10 9 14 6" />
        </svg>
        <span className="text-[11px] leading-none transform rotate-12">♡</span>
        <svg className="w-4 h-2.5" viewBox="0 0 25 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M2 6 C10 2 16 10 22 6" />
          <circle cx="22" cy="6" r="1.2" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
