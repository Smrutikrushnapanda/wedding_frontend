'use client';

import React from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import ModalPortal from './ModalPortal';

export default function OurStorySection({
  isStoryModalOpen,
  onOpenStoryModal,
  onCloseStoryModal,
}) {
  return (
    <section id="story" className="relative px-3 pt-3 pb-4 my-2 z-10 overflow-hidden">
      {/* Side Cherry Blossom Sprays matching screenshot exactly */}
      <div className="absolute -left-3 -top-2 w-20 pointer-events-none z-10 opacity-95 select-none">
        <SafeImage
          src="/images/Watercolour Cherry Blossom Corner Spray.png"
          alt=""
          className="w-full h-auto object-contain transform -translate-x-2"
        />
      </div>
      <div className="absolute -right-3 -top-1 w-22 pointer-events-none z-10 opacity-95 select-none">
        <SafeImage
          src="/images/Cherry Blossom Corner Flourish.png"
          alt=""
          className="w-full h-auto object-contain transform translate-x-2"
        />
      </div>

      {/* Header: Exact "~ ♡ Our Story ♡ ~" Gold Flourish Header */}
      <SwirlHeader title="Our Story" />

      {/* Two-Column Showcase: Quote & Button on Left, Romantic Couple on Right */}
      <div className="flex items-center justify-between relative z-20">
        {/* Left Column: Centered text block and centered pill button */}
        <div className="w-[50%] pl-1 pr-1 flex flex-col items-center text-center justify-center">
          <p className="font-serif text-[13.5px] leading-tight text-[#3b1520] font-semibold tracking-tight">
            Two hearts, one journey ...
          </p>
          <p className="font-serif text-[12px] leading-snug text-[#3b1520] font-medium mt-1">
            A story of friendship,
            <br />
            love and a lifetime together.
          </p>

          {/* Pill Button: Vibrant Rose-Pink Gradient */}
          <button
            onClick={onOpenStoryModal}
            className="mt-3 px-4.5 py-1.5 rounded-full bg-gradient-to-r from-[#d93b68] via-[#e54b77] to-[#ec5580] text-white font-serif text-[12px] font-medium shadow-[0_4px_14px_rgba(217,59,104,0.38)] active:scale-95 transition-transform flex items-center gap-1.5 cursor-pointer select-none"
          >
            <span>Read Our Story</span>
            <span className="text-sm font-sans font-bold leading-none">→</span>
          </button>
        </div>

        {/* Right Column: Romantic Couple Illustration with dreamy smokey bottom */}
        <div className="w-[50%] relative shrink-0 -mr-1">
          <div
            className="w-full relative"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0) 100%)',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 78%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0) 100%)',
            }}
          >
            <SafeImage
              src="/images/Smiling Couple Gazing Skyward.png"
              alt="Aditya and Subhashree - Our Story"
              className="w-full h-auto object-contain drop-shadow-[0_4px_14px_rgba(217,72,108,0.18)]"
            />
          </div>

          {/* Soft cloud mist blending the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#fde8ef] via-[#fde8ef]/80 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Story Modal Dialog - Portalled directly to body to prevent stacking context clipping */}
      <ModalPortal isOpen={isStoryModalOpen}>
        <div
          onClick={onCloseStoryModal}
          className="w-full h-full bg-black/75 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="wedding-card max-w-sm w-full p-5 relative max-h-[85vh] overflow-y-auto shadow-2xl cursor-default"
          >
            <button
              onClick={onCloseStoryModal}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/80 border border-[#f5d6c6] text-gray-500 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-script text-2xl text-[#b8741a] text-center mb-2">Our Love Story</h3>
            <p className="font-serif text-xs leading-relaxed text-[#5d2b38] mb-3">
              It began with an accidental hello that turned into hours of endless conversations. From shared coffee cups and laughter during monsoon evenings in Bhubaneswar, to walking together through every dream, our paths seamlessly wove into one.
            </p>
            <p className="font-serif text-xs leading-relaxed text-[#5d2b38]">
              With the blessings of our parents and elders, we are delighted to tie the sacred knot and invite you to be part of our joyful celebration!
            </p>
            <div className="mt-4 text-center">
              <button
                onClick={onCloseStoryModal}
                className="btn-rose text-xs px-5 py-1.5 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </ModalPortal>
    </section>
  );
}
