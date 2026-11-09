import React from 'react';
import SafeImage from './SafeImage';

export default function BackgroundDecor() {
  // Dense floral coverage down both margins of the mobile screen
  const leftPositions = [
    60, 240, 440, 660, 880, 1100, 1320, 1540, 1760, 1980, 2200, 2420, 2640, 2860, 3080,
  ];
  const rightPositions = [
    40, 200, 400, 620, 840, 1060, 1280, 1500, 1720, 1940, 2160, 2380, 2600, 2820, 3040,
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Top Garland: Hanging Gold Lanterns & Ceiling Cherry Blossoms */}
      <div className="absolute top-0 inset-x-0 w-full z-10 overflow-hidden opacity-95">
        <SafeImage
          src="/images/Cherry Blossom Lantern Garland.png"
          alt="Lantern Garland"
          className="w-full h-auto object-contain -translate-y-4"
        />
      </div>

      {/* Lush continuous side vine borders */}
      <div className="absolute inset-y-0 left-0 w-7 z-10 overflow-hidden opacity-65">
        <SafeImage
          src="/images/Floral Lantern Vine Border-2.png"
          alt="Border"
          className="w-full h-full object-cover object-left"
        />
      </div>
      <div className="absolute inset-y-0 right-0 w-7 z-10 overflow-hidden opacity-65">
        <SafeImage
          src="/images/Floral Lantern Vine Border-2.png"
          alt="Border"
          className="w-full h-full object-cover object-right transform scale-x-[-1]"
        />
      </div>

      {/* Left Side: Dense Watercolour Cherry Blossom Sprays & Flourishes */}
      {leftPositions.map((topPos, idx) => {
        const isAlternate = idx % 2 === 1;
        return (
          <div
            key={`left-floral-${idx}`}
            className="absolute left-0 w-22 z-15 overflow-hidden opacity-92"
            style={{ top: `${topPos}px` }}
          >
            <SafeImage
              src={
                isAlternate
                  ? '/images/Cherry Blossom Corner Flourish.png'
                  : '/images/Watercolour Cherry Blossom Corner Spray.png'
              }
              alt="Floral Spray"
              className={`w-full h-auto object-contain drop-shadow-[0_2px_10px_rgba(235,160,180,0.25)] ${
                isAlternate ? 'transform scale-x-[-1] -translate-x-3' : 'transform -translate-x-3'
              }`}
            />
          </div>
        );
      })}

      {/* Right Side: Dense Cherry Blossom Flourishes & Sprays with drifting petals */}
      {rightPositions.map((topPos, idx) => {
        const isAlternate = idx % 2 === 1;
        return (
          <div
            key={`right-floral-${idx}`}
            className="absolute right-0 w-24 z-15 overflow-hidden opacity-92"
            style={{ top: `${topPos}px` }}
          >
            <SafeImage
              src={
                isAlternate
                  ? '/images/Watercolour Cherry Blossom Corner Spray.png'
                  : '/images/Cherry Blossom Corner Flourish.png'
              }
              alt="Floral Flourish"
              className={`w-full h-auto object-contain drop-shadow-[0_2px_10px_rgba(235,160,180,0.25)] ${
                isAlternate ? 'transform scale-x-[-1] translate-x-3' : 'transform translate-x-3'
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
