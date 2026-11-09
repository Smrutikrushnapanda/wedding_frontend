import React from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { GiftIcon } from './Icons';

export default function GiftsSection() {
  return (
    <section id="gifts" className="px-5 my-4 relative z-10">
      <SwirlHeader title="Gifts & Blessings" icon={<GiftIcon className="w-5 h-5 text-[#b8741a]" />} />

      <div className="wedding-card p-3 flex items-center gap-3 mt-2">
        <div className="w-20 shrink-0">
          <SafeImage
            src="/images/Gift Boxes and Vintage Camera Blooms-1.png"
            alt="Gifts and Blessings"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex-1">
          <p className="font-serif text-[11.5px] leading-relaxed text-[#5e2935]">
            Your presence and blessings mean the world to us. No gifts please, just your love and good wishes.
          </p>
        </div>
      </div>
    </section>
  );
}
