'use client';

import React from 'react';
import { MusicIcon } from './Icons';

export default function MusicButton({ isPlaying, toggleMusic, onOpenMenu }) {
  return (
    <header className="relative z-30 px-5 pt-3 pb-1 flex items-center justify-between">
      {/* Top Left: Rounded Hamburger Menu Card */}
      <button
        onClick={onOpenMenu}
        aria-label="Open Navigation Menu"
        className="w-9 h-9 rounded-[10px] bg-white/85 backdrop-blur-md border border-[#f5d6c6] shadow-[0_2px_8px_rgba(235,160,180,0.2)] flex flex-col items-center justify-center gap-1 text-[#78283a] active:scale-95 transition-transform"
      >
        <span className="w-4 h-[2px] bg-[#78283a] rounded-full" />
        <span className="w-4 h-[2px] bg-[#78283a] rounded-full" />
        <span className="w-4 h-[2px] bg-[#78283a] rounded-full" />
      </button>

      {/* Top Right: Circular Rose Music Button */}
      <button
        onClick={toggleMusic}
        aria-label="Toggle Background Music"
        className={`w-9 h-9 rounded-full bg-gradient-to-r from-[#d84869] to-[#ea5f83] text-white shadow-[0_3px_10px_rgba(216,72,105,0.35)] flex items-center justify-center active:scale-95 transition-transform ${
          isPlaying ? 'ring-2 ring-rose-300' : ''
        }`}
      >
        <MusicIcon className="w-4 h-4 text-white" />
      </button>
    </header>
  );
}
