'use client';

import React from 'react';
import SafeImage from './SafeImage';
import { CalendarIcon, PinIcon, MusicIcon } from './Icons';

const GlossyHeart = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="heartGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ff7b92" />
        <stop offset="45%" stopColor="#ea385d" />
        <stop offset="100%" stopColor="#b9133a" />
      </radialGradient>
      <filter id="heartShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#b9133a" floodOpacity="0.3" />
      </filter>
    </defs>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#heartGrad)"
      filter="url(#heartShadow)"
    />
    <ellipse cx="7.5" cy="6.5" rx="2.5" ry="1.5" fill="#ffffff" opacity="0.6" transform="rotate(-25 7.5 6.5)" />
  </svg>
);

const PrayingBlessings = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fcd8be" />
        <stop offset="100%" stopColor="#f5b894" />
      </linearGradient>
    </defs>
    <path d="M10 6c0-.8.7-1.5 1.5-1.5.3 0 .5.1.7.3l.3.3v10.4c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V6z" fill="url(#skin)" />
    <path d="M8 8.5c0-.8.7-1.5 1.5-1.5.2 0 .4.1.6.2V15c0 .8-.7 1.5-1.5 1.5S7.1 15.8 7.1 15V8.5z" fill="url(#skin)" opacity="0.9" />
    <path d="M14 6c0-.8-.7-1.5-1.5-1.5-.3 0-.5.1-.7.3l-.3.3v10.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V6z" fill="url(#skin)" />
    <path d="M16 8.5c0-.8-.7-1.5-1.5-1.5-.2 0-.4.1-.6.2V15c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V8.5z" fill="url(#skin)" opacity="0.9" />
    <ellipse cx="12" cy="18" rx="5" ry="1.8" fill="#f59e0b" />
    <circle cx="9" cy="18" r="1.5" fill="#ef4444" />
    <circle cx="12" cy="18" r="1.5" fill="#10b981" />
    <circle cx="15" cy="18" r="1.5" fill="#ef4444" />
  </svg>
);

export default function HeroSection({
  isPlaying,
  onToggleMusic,
  onSendLove,
  onSendBlessings,
}) {
  return (
    <section id="hero" className="relative z-10 pt-3 pb-3">
      {/* Top Header Row: Music Button (Right) */}
      <div className="relative z-30 px-4 pt-1 flex items-center justify-between pointer-events-none">
        <div className="w-10 h-10" />

        <button
          onClick={onToggleMusic}
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
          className={`w-10 h-10 rounded-full bg-gradient-to-br from-[#c82d56] to-[#e44d75] text-white shadow-[0_3px_12px_rgba(200,45,86,0.38)] flex items-center justify-center active:scale-95 transition-transform shrink-0 cursor-pointer pointer-events-auto ${
            isPlaying ? 'ring-2 ring-rose-300 ring-offset-1 animate-pulse' : 'opacity-90'
          }`}
        >
          <MusicIcon
            className={`w-4 h-4 text-white transition-transform ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={isPlaying ? { animation: 'spin 3s linear infinite' } : {}}
          />
        </button>
      </div>

      {/* Invitation Header Text */}
      <div className="relative z-30 text-center px-4 -mt-3 mb-2 pointer-events-none">
        <p className="font-serif text-[12px] sm:text-[13px] tracking-wide text-[#592631] font-medium leading-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          You&apos;re Invited to the
        </p>
        <p className="font-serif text-[12.5px] sm:text-[13.5px] tracking-wide text-[#592631] font-semibold leading-tight mt-0.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          Wedding Celebration of
        </p>
      </div>

      {/* Main Couple & Names Showcase */}
      <div className="relative flex items-center px-3 mt-2 min-h-[225px]">
        {/* Left: Cutout Couple with seamless gradient mask dissolve */}
        <div className="w-[53%] -ml-1 relative z-10 shrink-0">
          <div
            className="w-full relative"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.6) 82%, rgba(0,0,0,0) 97%)',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 68%, rgba(0,0,0,0.6) 82%, rgba(0,0,0,0) 97%)',
            }}
          >
            <SafeImage
              src="/images/Illustrated Indian Wedding Couple.png"
              alt="Aditya and Subhashree"
              className="w-full h-auto object-contain drop-shadow-[0_6px_14px_rgba(217,72,108,0.18)]"
            />
          </div>

          {/* Dreamy smokey pink cloud mist overlay blending the lower boundary */}
          <div className="absolute inset-x-0 -bottom-2 h-14 pointer-events-none z-15 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#fde8ef] via-[#fde8ef]/90 to-transparent" />
            <div className="absolute left-[-15%] bottom-0 w-36 h-10 rounded-full bg-[#fde8ef] blur-md opacity-95" />
            <div className="absolute left-[20%] -bottom-1 w-44 h-12 rounded-full bg-[#fce4eb] blur-lg opacity-90" />
            <div className="absolute left-[45%] bottom-0 w-32 h-10 rounded-full bg-[#fde8ef] blur-md opacity-95" />
          </div>

          {/* Whimsical drifting petals along the mist */}
          <div className="absolute inset-x-0 -bottom-1 pointer-events-none z-20 flex justify-around px-4">
            <span className="text-[10px] transform -rotate-12 opacity-80">🌸</span>
            <span className="text-[9px] transform rotate-45 opacity-75 translate-y-1">🌸</span>
            <span className="text-[11px] transform -rotate-30 opacity-70">🌹</span>
            <span className="text-[8px] transform rotate-12 opacity-85">🌸</span>
          </div>
        </div>

        {/* Right: Golden Script Names + Authentic Laurel Framing */}
        <div className="w-[47%] pl-0.5 pr-1 flex flex-col items-center justify-center relative z-10 -mt-1">
          <div className="relative flex flex-col items-center justify-center w-full">
            {/* Left Laurel Branch */}
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-8 h-36 overflow-hidden pointer-events-none select-none">
              <img
                src="/images/Golden Laurel Wreath Pair.png"
                alt=""
                className="h-full w-auto max-w-none object-cover"
                style={{ aspectRatio: '1774/887', objectPosition: 'left center' }}
              />
            </div>

            {/* Right Laurel Branch */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-36 overflow-hidden pointer-events-none select-none">
              <img
                src="/images/Golden Laurel Wreath Pair.png"
                alt=""
                className="h-full w-auto max-w-none object-cover"
                style={{ aspectRatio: '1774/887', objectPosition: 'right center' }}
              />
            </div>

            {/* Golden Calligraphy Names */}
            <div className="text-center z-10 py-1">
              <h1 className="font-script text-[30px] sm:text-[32px] leading-[0.9] text-[#b8741a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Aditya
              </h1>
              <h2 className="font-script text-[26px] sm:text-[28px] leading-[0.9] text-[#b8741a] -mt-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Choudhury
              </h2>
              <span className="font-serif italic text-[13px] text-[#9a6332] my-0.5 block">
                &amp;
              </span>
              <h2 className="font-script text-[27px] sm:text-[29px] leading-[0.9] text-[#b8741a] drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Subhashree
              </h2>
              <h2 className="font-script text-[25px] sm:text-[27px] leading-[0.9] text-[#b8741a] -mt-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                Patra
              </h2>
            </div>
          </div>

          {/* Date and Location directly below names */}
          <div className="mt-2 flex flex-col items-start text-[11px] font-serif text-[#5a2530] space-y-1">
            <div className="flex items-center gap-1.5 font-medium">
              <CalendarIcon className="w-3.5 h-3.5 text-[#9e273f] shrink-0" />
              <span className="tracking-tight">24<sup>th</sup> February 2027</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <PinIcon className="w-3.5 h-3.5 text-[#9e273f] shrink-0" />
              <span className="tracking-tight">Bhubaneswar, Odisha</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interaction Cards: Send Love & Send Blessings */}
      <div className="relative mt-2 px-4">
        {/* Floating Mini Hearts above Send Love */}
        <div className="absolute left-[15%] -top-3.5 pointer-events-none flex gap-2 z-20">
          <span className="text-[13px] transform -rotate-12 animate-pulse text-[#e11d48]">❤️</span>
          <span className="text-[10px] transform rotate-12 -translate-y-1 text-[#e11d48]">❤️</span>
        </div>
        {/* Floating Rose Petals above Send Blessings */}
        <div className="absolute right-[17%] -top-3 pointer-events-none flex gap-2 z-20">
          <span className="text-[12px] transform rotate-45 opacity-85">🌸</span>
          <span className="text-[10px] transform -rotate-20 opacity-80">🌹</span>
        </div>

        {/* Floating Mini Hearts below Send Love */}
        <div className="absolute left-[16%] -bottom-3 pointer-events-none flex gap-2 z-20">
          <span className="text-[11px] transform rotate-12 text-[#e11d48]">❤️</span>
          <span className="text-[13px] transform -rotate-12 translate-y-0.5 text-[#e11d48]">❤️</span>
          <span className="text-[9px] transform rotate-45 translate-y-1 text-[#e11d48]">❤️</span>
        </div>
        {/* Floating Rose Petals below Send Blessings */}
        <div className="absolute right-[15%] -bottom-3 pointer-events-none flex gap-2 z-20">
          <span className="text-[11px] transform -rotate-45 opacity-85">🌸</span>
          <span className="text-[11px] transform rotate-12 opacity-80">🌹</span>
          <span className="text-[9px] transform -rotate-12 opacity-80">🌸</span>
        </div>

        {/* Two Pill Buttons Side-by-Side */}
        <div className="grid grid-cols-2 gap-3 relative z-10">
          <button
            onClick={onSendLove}
            className="bg-white/95 border border-[#f5d6c6] py-2.5 px-3 flex items-center justify-center gap-2 rounded-full shadow-[0_3px_12px_rgba(235,160,180,0.22)] active:scale-95 transition-transform backdrop-blur-xs cursor-pointer select-none"
          >
            <GlossyHeart className="w-5 h-5 shrink-0" />
            <span className="font-serif font-medium text-[13px] text-[#5c2431]">
              Send Love
            </span>
          </button>

          <button
            onClick={onSendBlessings}
            className="bg-white/95 border border-[#f5d6c6] py-2.5 px-3 flex items-center justify-center gap-2 rounded-full shadow-[0_3px_12px_rgba(235,160,180,0.22)] active:scale-95 transition-transform backdrop-blur-xs cursor-pointer select-none"
          >
            <PrayingBlessings className="w-5 h-5 shrink-0" />
            <span className="font-serif font-medium text-[13px] text-[#5c2431]">
              Send Blessings
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
