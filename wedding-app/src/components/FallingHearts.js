import React from 'react';

// Cherry Blossom Flower
const BlossomIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="7" r="4" fill="#ff758f" opacity="0.95" />
    <circle cx="16.5" cy="10" r="4" fill="#ff758f" opacity="0.95" />
    <circle cx="15" cy="16" r="4" fill="#ff758f" opacity="0.95" />
    <circle cx="9" cy="16" r="4" fill="#ff758f" opacity="0.95" />
    <circle cx="7.5" cy="10" r="4" fill="#ff758f" opacity="0.95" />
    <circle cx="12" cy="12" r="2.8" fill="#fde047" />
    <circle cx="12" cy="12" r="1.4" fill="#ca8a04" />
  </svg>
);

// Marigold (Genda Phool)
const MarigoldIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" fill="#f59e0b" />
    <circle cx="12" cy="12" r="6" fill="#fbbf24" />
    <circle cx="12" cy="12" r="3.5" fill="#d97706" />
    <circle cx="12" cy="12" r="1.5" fill="#78350f" />
  </svg>
);

// Rose Bloom
const RoseIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3 C15 3 20 6 20 11 C20 16 15 20 12 21 C9 20 4 16 4 11 C4 6 9 3 12 3 Z"
      fill="#e11d48"
    />
    <path
      d="M12 7 C14 7 16 8.5 16 11 C16 14 13 16 12 17 C11 16 8 14 8 11 C8 8.5 10 7 12 7 Z"
      fill="#ffe4e6"
      opacity="0.65"
    />
  </svg>
);

// Drifting Rose Petal
const PetalIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2 C16 5 19 9 17 14 C15 19 11 21 8 18 C5 15 6 10 9 5 Z"
      fill="#f43f5e"
      opacity="0.9"
    />
  </svg>
);

// Sacred Lotus
const LotusIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3 C14 7 17 11 17 15 C17 18 14.5 20 12 20 C9.5 20 7 18 7 15 C7 11 10 7 12 3 Z"
      fill="#f472b6"
    />
    <path
      d="M12 9 C15 12 19 14 19 17 C19 19.5 17 21 14.5 21 C12 21 11 19 10 18 Z"
      fill="#ec4899"
      opacity="0.8"
    />
    <path
      d="M12 9 C9 12 5 14 5 17 C5 19.5 7 21 9.5 21 C12 21 13 19 14 18 Z"
      fill="#ec4899"
      opacity="0.8"
    />
  </svg>
);

// Glossy 3D Heart
const GlossyHeartIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="fallHeartGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ff7b92" />
        <stop offset="45%" stopColor="#ea385d" />
        <stop offset="100%" stopColor="#b9133a" />
      </radialGradient>
    </defs>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#fallHeartGrad)"
    />
    <ellipse cx="7.5" cy="6.5" rx="2.5" ry="1.5" fill="#ffffff" opacity="0.65" transform="rotate(-25 7.5 6.5)" />
  </svg>
);

export default function FallingHearts({ items }) {
  // Array of floral components for falling blessings
  const flowerComponents = [BlossomIcon, RoseIcon, MarigoldIcon, PetalIcon, LotusIcon];

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden max-w-[430px] mx-auto">
      {items.map((item) => {
        const isBlessing = item.type === 'blessing';
        const FlowerComp = flowerComponents[(item.variant ?? 0) % flowerComponents.length];

        return (
          <div
            key={item.id}
            className="absolute animate-falling-heart select-none"
            style={{
              left: `${item.left}%`,
              top: '-32px',
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {isBlessing ? (
              <FlowerComp className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(219,39,119,0.3)]" />
            ) : (
              <GlossyHeartIcon className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(185,19,58,0.3)]" />
            )}
          </div>
        );
      })}
    </div>
  );
}
