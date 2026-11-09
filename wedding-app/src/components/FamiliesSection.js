'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import { FamilyIcon } from './Icons';

export default function FamiliesSection() {
  return (
    <section id="families" className="px-4 my-4 relative z-10">
      <SwirlHeader title="Meet the Families" />

      <div className="grid grid-cols-2 gap-2.5 mt-2">
        <div className="wedding-card p-3.5 text-center flex flex-col items-center justify-center rounded-[20px] bg-white/85 shadow-[0_3px_12px_rgba(235,160,180,0.18)]">
          <div className="mb-1 text-[#b8741a] flex items-center justify-center">
            <FamilyIcon className="w-6 h-6 text-[#b8741a]" />
          </div>
          <h4 className="font-script text-[19px] sm:text-[20px] text-[#892335] leading-tight mb-1">
            Groom&apos;s Family
          </h4>
          <p className="font-serif text-[11px] leading-snug text-[#5a2530] font-medium">
            The Choudhury Family
            <br />
            Warmly Invites You
          </p>
        </div>

        <div className="wedding-card p-3.5 text-center flex flex-col items-center justify-center rounded-[20px] bg-white/85 shadow-[0_3px_12px_rgba(235,160,180,0.18)]">
          <div className="mb-1 text-[#b8741a] flex items-center justify-center">
            <FamilyIcon className="w-6 h-6 text-[#b8741a]" />
          </div>
          <h4 className="font-script text-[19px] sm:text-[20px] text-[#892335] leading-tight mb-1">
            Bride&apos;s Family
          </h4>
          <p className="font-serif text-[11px] leading-snug text-[#5a2530] font-medium">
            The Patra Family
            <br />
            Requests Your
            <br />
            Gracious Presence
          </p>
        </div>
      </div>
    </section>
  );
}
