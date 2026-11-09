'use client';

import React, { useEffect, useRef } from 'react';
import SwirlHeader from './SwirlHeader';
import SafeImage from './SafeImage';
import { CameraIcon } from './Icons';
import ModalPortal from './ModalPortal';

const MEMORIES = [
  { src: '/images/Elegant Haldi and Mehendi Stationery Set-3.png', label: 'Henna Blessings' },
  { src: '/images/Pastel Haldi and Mehendi Wedding Panels-2.png', label: 'Golden Haldi' },
  { src: '/images/Ornate Floral Wedding Mandap Border.png', label: 'Mandap Vows' },
  { src: '/images/Romantic Gifts and Vintage Camera-2.png', label: 'Captured Moments' },
  { src: '/images/Elegant Blush Wedding Mandap Backdrop.png', label: 'Reception Lights' },
];

export default function MemoriesSection({
  carouselRef,
  selectedPhoto,
  onSelectPhoto,
  onClosePhoto,
  onScrollCarousel,
}) {
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef(null);

  // Smooth continuous auto-scrolling
  useEffect(() => {
    const el = carouselRef?.current;
    if (!el) return;

    let animId;
    const speed = 0.65; // pixels per frame

    const tick = () => {
      if (!isInteractingRef.current && el) {
        el.scrollLeft += speed;
        // Infinite seamless loop when passing half of the duplicated list
        const maxScroll = el.scrollWidth / 2;
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [carouselRef]);

  const pauseAutoScroll = () => {
    isInteractingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const resumeAutoScrollDelayed = (delayMs = 2500) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, delayMs);
  };

  return (
    <section id="memories" className="px-5 my-4 relative z-10">
      <SwirlHeader title="Our Memories" icon={<CameraIcon className="w-5 h-5 text-[#b8741a]" />} />

      <div className="relative mt-2">
        {/* Left Arrow Button */}
        <button
          onClick={() => {
            pauseAutoScroll();
            onScrollCarousel('left');
            resumeAutoScrollDelayed(3000);
          }}
          aria-label="Previous Photo"
          className="absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 border border-[#f5d6c6] shadow-md flex items-center justify-center text-xs text-[#802235] active:scale-90 transition-transform cursor-pointer"
        >
          ‹
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => {
            pauseAutoScroll();
            onScrollCarousel('right');
            resumeAutoScrollDelayed(3000);
          }}
          aria-label="Next Photo"
          className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 border border-[#f5d6c6] shadow-md flex items-center justify-center text-xs text-[#802235] active:scale-90 transition-transform cursor-pointer"
        >
          ›
        </button>

        {/* Auto-scrolling Carousel Container */}
        <div
          ref={carouselRef}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={() => resumeAutoScrollDelayed(800)}
          onTouchStart={pauseAutoScroll}
          onTouchEnd={() => resumeAutoScrollDelayed(2000)}
          className="flex gap-2.5 overflow-x-auto no-scrollbar py-1 px-1 cursor-grab active:cursor-grabbing"
        >
          {/* Render duplicated array for infinite seamless looping */}
          {[...MEMORIES, ...MEMORIES].map((photo, i) => (
            <div
              key={i}
              onClick={() => onSelectPhoto(photo.src)}
              className="w-28 shrink-0 aspect-[4/5] rounded-[14px] overflow-hidden border border-[#f5d6c6] shadow-sm cursor-pointer hover:scale-102 transition-transform"
            >
              <SafeImage
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Photo Lightbox Modal - Portalled directly to body to prevent stacking context clipping */}
      <ModalPortal isOpen={Boolean(selectedPhoto)}>
        <div
          onClick={onClosePhoto}
          className="w-full h-full bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-xs w-full wedding-card p-2 relative shadow-2xl cursor-default"
          >
            <button
              onClick={onClosePhoto}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 text-black flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>
            <SafeImage
              src={selectedPhoto}
              alt="Full Memory"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </ModalPortal>
    </section>
  );
}
