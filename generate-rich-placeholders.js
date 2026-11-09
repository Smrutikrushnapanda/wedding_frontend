const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'wedding-app', 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const images = {
  'hero-couple.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 400" width="320" height="400">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#feeef2"/>
        <stop offset="100%" stop-color="#fbd9e2"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fcd34d"/>
        <stop offset="100%" stop-color="#b45309"/>
      </linearGradient>
      <linearGradient id="robe" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff1f2"/>
        <stop offset="100%" stop-color="#fecdd3"/>
      </linearGradient>
      <linearGradient id="lehenga" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f472b6"/>
        <stop offset="100%" stop-color="#db2777"/>
      </linearGradient>
    </defs>
    <rect width="320" height="400" rx="20" fill="url(#bg)"/>
    <circle cx="160" cy="170" r="130" fill="#fdf2f4" opacity="0.9"/>
    
    <!-- Couple Art Illustration -->
    <g transform="translate(45, 60)">
      <!-- Groom (Left) -->
      <path d="M 50 140 C 40 180 20 280 20 320 L 140 320 C 140 280 120 180 110 140 Z" fill="url(#robe)"/>
      <path d="M 65 140 L 75 240 L 85 140 Z" fill="url(#gold)" opacity="0.7"/>
      <!-- Groom Head & Hair -->
      <circle cx="80" cy="95" r="34" fill="#6d4c41"/>
      <ellipse cx="80" cy="100" rx="26" ry="29" fill="#fbd5bb"/>
      <path d="M 55 90 C 55 60 105 60 105 90 C 95 72 65 72 55 90 Z" fill="#3e2723"/>
      <!-- Groom Beard & Smile -->
      <path d="M 66 108 C 72 126 88 126 94 108" fill="none" stroke="#3e2723" stroke-width="3" stroke-linecap="round"/>
      <path d="M 74 112 Q 80 116 86 112" fill="none" stroke="#be123c" stroke-width="2" stroke-linecap="round"/>
      
      <!-- Garland Groom -->
      <path d="M 55 140 Q 80 190 105 140" fill="none" stroke="#f59e0b" stroke-width="8" stroke-dasharray="6,2" stroke-linecap="round"/>

      <!-- Bride (Right, leaning in) -->
      <path d="M 110 170 C 100 210 90 280 90 320 L 210 320 C 210 270 200 200 180 170 Z" fill="url(#lehenga)"/>
      <circle cx="145" cy="120" r="30" fill="#4a2e2b"/>
      <ellipse cx="143" cy="124" rx="23" ry="25" fill="#fbd5bb"/>
      <path d="M 122 115 C 122 90 165 90 165 115 C 155 100 130 100 122 115 Z" fill="#2d1a16"/>
      <!-- Maang Tikka & Jewelry -->
      <circle cx="143" cy="106" r="3.5" fill="#f59e0b"/>
      <line x1="143" y1="98" x2="143" y2="106" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="143" cy="116" r="2" fill="#be123c"/>
      <!-- Bride Smile -->
      <path d="M 137 134 Q 143 138 149 134" fill="none" stroke="#be123c" stroke-width="2" stroke-linecap="round"/>
      <!-- Garland Bride -->
      <path d="M 120 165 Q 145 210 170 165" fill="none" stroke="#f59e0b" stroke-width="8" stroke-dasharray="6,2" stroke-linecap="round"/>
    </g>

    <!-- Floating Cherry Blossom Petals -->
    <circle cx="40" cy="40" r="8" fill="#fda4af" opacity="0.8"/>
    <circle cx="280" cy="60" r="10" fill="#f472b6" opacity="0.7"/>
    <circle cx="30" cy="280" r="7" fill="#fb7185" opacity="0.6"/>
    <circle cx="290" cy="310" r="9" fill="#fda4af" opacity="0.8"/>
  </svg>`,

  'story-couple.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200">
    <defs>
      <linearGradient id="sbg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fff5f7"/>
        <stop offset="100%" stop-color="#fde2e8"/>
      </linearGradient>
    </defs>
    <rect width="280" height="200" rx="16" fill="url(#sbg)"/>
    <g transform="translate(60, 20)">
      <!-- Back view hugging couple -->
      <circle cx="60" cy="60" r="26" fill="#4a2e2b"/>
      <path d="M 35 150 C 35 90 90 85 90 150 Z" fill="#fae8eb"/>
      
      <circle cx="105" cy="70" r="24" fill="#3b2219"/>
      <!-- Long decorated hair for bride -->
      <path d="M 95 80 C 100 130 115 140 115 150 C 115 120 125 100 120 80 Z" fill="#2d1712"/>
      <circle cx="107" cy="95" r="4" fill="#fda4af"/>
      <circle cx="110" cy="115" r="4" fill="#f472b6"/>
      <path d="M 75 150 C 80 100 140 100 140 150 Z" fill="#ec4899"/>
      
      <!-- Floating heart -->
      <path d="M 80 25 C 80 15 95 15 95 25 C 95 35 80 45 80 45 C 80 45 65 35 65 25 C 65 15 80 15 80 25 Z" fill="#e11d48"/>
    </g>
  </svg>`,

  'video-poster.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 270" width="480" height="270">
    <defs>
      <linearGradient id="vbg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#bd4759"/>
        <stop offset="50%" stop-color="#9f253b"/>
        <stop offset="100%" stop-color="#691024"/>
      </linearGradient>
      <radialGradient id="sparkle" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fde68a" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="480" height="270" fill="url(#vbg)"/>
    <circle cx="240" cy="135" r="100" fill="url(#sparkle)"/>
    <!-- Couple hands holding with henna & gold bangles -->
    <g transform="translate(140, 70)">
      <path d="M 40 80 C 70 50 110 50 140 80 C 130 110 90 120 40 80 Z" fill="#fbd5bb"/>
      <path d="M 120 75 C 140 40 180 50 190 85 C 160 110 130 110 120 75 Z" fill="#fcd9c0"/>
      <!-- Red and Gold Bangles -->
      <rect x="25" y="70" width="16" height="32" rx="4" fill="#b91c1c"/>
      <rect x="42" y="72" width="6" height="28" rx="2" fill="#f59e0b"/>
      <rect x="175" y="75" width="16" height="32" rx="4" fill="#f59e0b"/>
      <!-- Henna Motifs -->
      <circle cx="85" cy="78" r="7" fill="#881337" opacity="0.6"/>
      <circle cx="100" cy="78" r="5" fill="#881337" opacity="0.6"/>
      <!-- Sacred Fire Sparkles -->
      <circle cx="60" cy="30" r="3" fill="#fef08a"/>
      <circle cx="150" cy="25" r="4" fill="#fef08a"/>
      <circle cx="110" cy="15" r="2.5" fill="#fff"/>
    </g>
  </svg>`,

  'haldi.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <rect width="200" height="200" rx="16" fill="#fef3c7"/>
    <circle cx="100" cy="100" r="65" fill="#fde68a" opacity="0.8"/>
    <!-- Brass Kalash & Marigolds -->
    <ellipse cx="100" cy="130" rx="35" ry="14" fill="#d97706"/>
    <path d="M 70 130 C 70 80 130 80 130 130 Z" fill="#f59e0b"/>
    <ellipse cx="100" cy="85" rx="22" ry="7" fill="#b45309"/>
    <!-- Yellow Turmeric Paste & Petals -->
    <circle cx="100" cy="75" r="16" fill="#facc15"/>
    <circle cx="75" cy="140" r="12" fill="#ea580c"/>
    <circle cx="125" cy="140" r="12" fill="#f59e0b"/>
    <circle cx="100" cy="145" r="12" fill="#ea580c"/>
  </svg>`,

  'mehndi.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <rect width="200" height="200" rx="16" fill="#fce7f3"/>
    <circle cx="100" cy="100" r="65" fill="#fbcfe8" opacity="0.8"/>
    <!-- Hand with henna design -->
    <path d="M 85 160 L 85 110 L 70 95 L 75 80 L 88 100 L 92 70 L 102 70 L 102 98 L 108 65 L 118 65 L 118 98 L 122 75 L 132 78 L 126 112 L 126 160 Z" fill="#fbd5bb"/>
    <!-- Henna mandala & lace -->
    <circle cx="107" cy="125" r="12" fill="none" stroke="#9d174d" stroke-width="2.5" stroke-dasharray="3,2"/>
    <circle cx="107" cy="125" r="5" fill="#9d174d"/>
    <path d="M 90 145 Q 107 140 122 145" stroke="#9d174d" stroke-width="2" fill="none"/>
  </svg>`,

  'sangeet.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <rect width="200" height="200" rx="16" fill="#ede9fe"/>
    <circle cx="100" cy="100" r="65" fill="#ddd6fe" opacity="0.8"/>
    <!-- Dancing pair with dandiya sticks -->
    <g transform="translate(60, 45)">
      <circle cx="25" cy="30" r="12" fill="#5b21b6"/>
      <path d="M 15 45 C 5 70 45 70 35 45 Z" fill="#8b5cf6"/>
      <line x1="20" y1="35" x2="55" y2="25" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
      
      <circle cx="60" cy="35" r="12" fill="#7c2d12"/>
      <path d="M 45 50 C 40 85 80 85 75 50 Z" fill="#ec4899"/>
      <line x1="60" y1="40" x2="25" y2="25" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
      <!-- Music sparkles -->
      <text x="35" y="100" font-size="20">💃🕺🎶</text>
    </g>
  </svg>`,

  'wedding.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <rect width="200" height="200" rx="16" fill="#ffe4e6"/>
    <circle cx="100" cy="100" r="65" fill="#fecdd3" opacity="0.8"/>
    <!-- Mandap Canopy & Sacred Agni -->
    <path d="M 50 60 Q 100 35 150 60 L 140 150 L 60 150 Z" fill="#fff1f2" opacity="0.5"/>
    <line x1="55" y1="58" x2="55" y2="150" stroke="#b45309" stroke-width="4"/>
    <line x1="145" y1="58" x2="145" y2="150" stroke="#b45309" stroke-width="4"/>
    <!-- Havan Kund Altar -->
    <polygon points="75,145 125,145 120,160 80,160" fill="#78350f"/>
    <!-- Flames -->
    <path d="M 90 145 C 90 120 100 110 100 110 C 100 110 110 120 110 145 Z" fill="#ea580c"/>
    <path d="M 95 145 C 95 130 100 122 100 122 C 100 122 105 130 105 145 Z" fill="#facc15"/>
  </svg>`,

  'reception.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <rect width="200" height="200" rx="16" fill="#fae8ff"/>
    <circle cx="100" cy="100" r="65" fill="#f5d0fe" opacity="0.8"/>
    <!-- Chandelier & Goblets -->
    <g transform="translate(65, 50)">
      <circle cx="35" cy="15" r="16" fill="#fef08a" opacity="0.8"/>
      <!-- Toasting Champagne flutes -->
      <path d="M 20 40 L 25 70 L 30 70 L 26 85 L 34 85 L 30 70 L 35 70 L 40 40 Z" fill="#fbbf24"/>
      <path d="M 50 40 L 45 70 L 40 70 L 44 85 L 36 85 L 40 70 L 35 70 L 30 40 Z" fill="#f59e0b"/>
      <text x="5" y="110" font-size="20">🥂✨🎉</text>
    </g>
  </svg>`,

  'memory-1.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300">
    <rect width="240" height="300" rx="14" fill="#fce7f3"/>
    <circle cx="120" cy="130" r="80" fill="#fbcfe8"/>
    <!-- Henna Hands and Pink Saree Silk -->
    <path d="M 40 220 Q 120 160 200 240 L 220 300 L 20 300 Z" fill="#be185d"/>
    <circle cx="120" cy="110" r="35" fill="#fbd5bb"/>
    <text x="120" y="270" font-family="serif" font-size="15" font-weight="bold" fill="#831843" text-anchor="middle">Henna &amp; Jewels</text>
  </svg>`,

  'memory-2.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300">
    <rect width="240" height="300" rx="14" fill="#fff1f2"/>
    <circle cx="120" cy="130" r="80" fill="#ffe4e6"/>
    <!-- Chandelier & Warm Mandap Glow -->
    <path d="M 80 40 L 160 40 L 140 100 L 100 100 Z" fill="#f59e0b"/>
    <circle cx="120" cy="120" r="14" fill="#fef08a"/>
    <text x="120" y="270" font-family="serif" font-size="15" font-weight="bold" fill="#9f1239" text-anchor="middle">Mandap Lights</text>
  </svg>`,

  'memory-3.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300">
    <rect width="240" height="300" rx="14" fill="#fdf2f8"/>
    <circle cx="120" cy="130" r="80" fill="#fce7f3"/>
    <text x="120" y="140" font-size="60" text-anchor="middle">🌺</text>
    <text x="120" y="270" font-family="serif" font-size="15" font-weight="bold" fill="#9d174d" text-anchor="middle">Floral Nights</text>
  </svg>`,

  'memory-4.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300">
    <rect width="240" height="300" rx="14" fill="#fef3c7"/>
    <circle cx="120" cy="130" r="80" fill="#fde68a"/>
    <text x="120" y="140" font-size="60" text-anchor="middle">💖</text>
    <text x="120" y="270" font-family="serif" font-size="15" font-weight="bold" fill="#b45309" text-anchor="middle">Sweet Moments</text>
  </svg>`,

  'memory-5.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300">
    <rect width="240" height="300" rx="14" fill="#fae8ff"/>
    <circle cx="120" cy="130" r="80" fill="#f5d0fe"/>
    <text x="120" y="140" font-size="60" text-anchor="middle">✨</text>
    <text x="120" y="270" font-family="serif" font-size="15" font-weight="bold" fill="#86198f" text-anchor="middle">Together Forever</text>
  </svg>`,

  'journey-1.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- Sunset Silhouette -->
    <defs>
      <linearGradient id="jg1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fdba74"/>
        <stop offset="60%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#881337"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#jg1)"/>
    <circle cx="100" cy="90" r="30" fill="#fef08a" opacity="0.9"/>
    <!-- Couple Silhouette gazing at sunset -->
    <ellipse cx="80" cy="150" rx="18" ry="30" fill="#4c0519"/>
    <ellipse cx="115" cy="155" rx="16" ry="28" fill="#4c0519"/>
    <circle cx="80" cy="115" r="10" fill="#4c0519"/>
    <circle cx="115" cy="120" r="9" fill="#4c0519"/>
  </svg>`,

  'journey-2.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- Hands making heart shape against twilight -->
    <defs>
      <linearGradient id="jg2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fb7185"/>
        <stop offset="100%" stop-color="#9f1239"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#jg2)"/>
    <circle cx="100" cy="95" r="28" fill="#fef3c7" opacity="0.8"/>
    <text x="100" y="125" font-size="64" text-anchor="middle">🫶</text>
  </svg>`,

  'journey-3.jpg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- Warm Lanterns Glow in the Dark -->
    <defs>
      <linearGradient id="jg3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#78350f"/>
        <stop offset="100%" stop-color="#1e1b4b"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#jg3)"/>
    <circle cx="100" cy="100" r="45" fill="#fef08a" opacity="0.35"/>
    <text x="100" y="120" font-size="54" text-anchor="middle">🏮</text>
  </svg>`,

  'dress-men.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 220" width="160" height="220">
    <!-- Full-length Kurta Pajama / Sherwani illustration -->
    <g transform="translate(30, 10)">
      <!-- Head / Turban -->
      <ellipse cx="50" cy="25" rx="16" ry="12" fill="#d97706"/>
      <circle cx="50" cy="18" r="4" fill="#b45309"/>
      <circle cx="50" cy="35" r="11" fill="#fbd5bb"/>
      <!-- Sherwani Top -->
      <path d="M 28 50 L 72 50 L 76 140 L 24 140 Z" fill="#fef08a" stroke="#d97706" stroke-width="2"/>
      <line x1="50" y1="50" x2="50" y2="140" stroke="#b45309" stroke-width="2"/>
      <!-- Churidar Pants -->
      <path d="M 32 140 L 46 200 L 54 200 L 68 140 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
      <!-- Jutti shoes -->
      <ellipse cx="44" cy="204" rx="8" ry="3" fill="#b45309"/>
      <ellipse cx="56" cy="204" rx="8" ry="3" fill="#b45309"/>
      <!-- Stole / Dupatta -->
      <path d="M 32 50 Q 22 95 24 140" stroke="#dc2626" stroke-width="5" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`,

  'dress-women.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 220" width="160" height="220">
    <!-- Full-length Bridal Lehenga / Saree illustration -->
    <g transform="translate(30, 10)">
      <!-- Head / Bun -->
      <circle cx="50" cy="25" r="12" fill="#3e2723"/>
      <circle cx="50" cy="30" r="10" fill="#fbd5bb"/>
      <circle cx="50" cy="22" r="3" fill="#f59e0b"/>
      <!-- Blouse / Choli -->
      <path d="M 34 45 L 66 45 L 64 75 L 36 75 Z" fill="#be123c"/>
      <!-- Flared Lehenga Skirt -->
      <path d="M 36 80 L 64 80 L 85 195 L 15 195 Z" fill="#f43f5e" stroke="#f59e0b" stroke-width="2"/>
      <!-- Gold Zari borders -->
      <path d="M 17 185 Q 50 180 83 185" stroke="#f59e0b" stroke-width="4" fill="none"/>
      <!-- Dupatta drape -->
      <path d="M 34 45 Q 60 70 70 120 Q 80 160 75 190" stroke="#fda4af" stroke-width="6" fill="none" opacity="0.85"/>
    </g>
  </svg>`,

  'map.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 180" width="280" height="180">
    <defs>
      <linearGradient id="mbg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e0f2fe"/>
        <stop offset="100%" stop-color="#bae6fd"/>
      </linearGradient>
    </defs>
    <rect width="280" height="180" rx="12" fill="url(#mbg)"/>
    <!-- Park Green -->
    <rect x="18" y="18" width="80" height="60" rx="8" fill="#dcfce7"/>
    <rect x="170" y="100" width="90" height="60" rx="8" fill="#dcfce7"/>
    <!-- Roads -->
    <path d="M 0 90 Q 140 100 280 40" stroke="#ffffff" stroke-width="14" fill="none"/>
    <path d="M 0 90 Q 140 100 280 40" stroke="#fde047" stroke-width="4" fill="none" stroke-dasharray="8,6"/>
    <path d="M 120 0 L 160 180" stroke="#ffffff" stroke-width="12" fill="none"/>
    <!-- Red Location Pin -->
    <g transform="translate(142, 60)">
      <path d="M 15 0 C 7 0 0 7 0 15 C 0 26 15 42 15 42 C 15 42 30 26 30 15 C 30 7 23 0 15 0 Z" fill="#ef4444"/>
      <circle cx="15" cy="14" r="6" fill="#ffffff"/>
    </g>
  </svg>`,

  'gifts.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160" width="200" height="160">
    <g transform="translate(20, 15)">
      <!-- Large bottom box -->
      <rect x="25" y="65" width="110" height="65" rx="6" fill="#fbbf24"/>
      <rect x="20" y="55" width="120" height="15" rx="4" fill="#f59e0b"/>
      <rect x="75" y="55" width="12" height="75" fill="#ef4444"/>
      <!-- Top box -->
      <rect x="50" y="15" width="65" height="40" rx="5" fill="#f472b6"/>
      <rect x="45" y="10" width="75" height="10" rx="3" fill="#ec4899"/>
      <rect x="78" y="10" width="8" height="45" fill="#ffffff"/>
      <!-- Bow -->
      <circle cx="76" cy="7" r="6" fill="#ffffff"/>
      <circle cx="88" cy="7" r="6" fill="#ffffff"/>
      <!-- Floating mini hearts -->
      <path d="M 15 40 C 15 32 25 32 25 40 C 25 48 15 55 15 55 C 15 55 5 48 5 40 C 5 32 15 32 15 40 Z" fill="#f43f5e"/>
      <path d="M 135 30 C 135 24 143 24 143 30 C 143 36 135 42 135 42 C 135 42 127 36 127 30 C 127 24 135 24 135 30 Z" fill="#f43f5e"/>
    </g>
  </svg>`,

  'camera.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160" width="200" height="160">
    <g transform="translate(25, 20)">
      <!-- Vintage camera body -->
      <rect x="15" y="30" width="120" height="85" rx="12" fill="#475569"/>
      <rect x="15" y="30" width="120" height="28" rx="6" fill="#1e293b"/>
      <rect x="95" y="18" width="28" height="14" rx="4" fill="#94a3b8"/>
      <!-- Lens -->
      <circle cx="75" cy="72" r="28" fill="#334155" stroke="#cbd5e1" stroke-width="4"/>
      <circle cx="75" cy="72" r="18" fill="#0f172a"/>
      <circle cx="68" cy="65" r="5" fill="#ffffff" opacity="0.6"/>
      <!-- Decorative floral garland around camera -->
      <circle cx="20" cy="30" r="12" fill="#fda4af"/>
      <circle cx="36" cy="20" r="10" fill="#f472b6"/>
      <circle cx="130" cy="100" r="12" fill="#fda4af"/>
      <circle cx="115" cy="112" r="9" fill="#fb7185"/>
      <circle cx="15" cy="105" r="8" fill="#f43f5e"/>
    </g>
  </svg>`,

  'floral-top.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 120" width="430" height="120">
    <g fill="#f472b6" opacity="0.85">
      <!-- Left blossom cluster -->
      <circle cx="30" cy="25" r="18" fill="#fda4af"/>
      <circle cx="65" cy="18" r="14" fill="#fb7185"/>
      <circle cx="20" cy="55" r="12" fill="#f472b6"/>
      <!-- Right blossom cluster -->
      <circle cx="400" cy="25" r="18" fill="#fda4af"/>
      <circle cx="365" cy="18" r="14" fill="#fb7185"/>
      <circle cx="410" cy="55" r="12" fill="#f472b6"/>
    </g>
  </svg>`,

  'floral-bottom.png': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 150" width="430" height="150">
    <!-- Indian Palace silhouette & floral garland -->
    <g transform="translate(115, 10)">
      <!-- Main Dome -->
      <path d="M 100 5 C 100 5 125 35 125 60 L 75 60 C 75 35 100 5 100 5 Z" fill="#f59e0b" opacity="0.75"/>
      <circle cx="100" cy="4" r="3" fill="#d97706"/>
      <rect x="70" y="60" width="60" height="50" rx="4" fill="#fde68a" opacity="0.85"/>
      <!-- Left small dome -->
      <path d="M 40 22 C 40 22 58 45 58 65 L 22 65 C 22 45 40 22 40 22 Z" fill="#f59e0b" opacity="0.65"/>
      <rect x="22" y="65" width="36" height="45" rx="3" fill="#fef3c7" opacity="0.85"/>
      <!-- Right small dome -->
      <path d="M 160 22 C 160 22 178 45 178 65 L 142 65 C 142 45 160 22 160 22 Z" fill="#f59e0b" opacity="0.65"/>
      <rect x="142" y="65" width="36" height="45" rx="3" fill="#fef3c7" opacity="0.85"/>
      <!-- Palace Arches -->
      <path d="M 85 110 C 85 85 115 85 115 110 Z" fill="#b45309" opacity="0.6"/>
      <path d="M 32 110 C 32 92 48 92 48 110 Z" fill="#b45309" opacity="0.5"/>
      <path d="M 152 110 C 152 92 168 92 168 110 Z" fill="#b45309" opacity="0.5"/>
    </g>
    <!-- Lush cherry blossoms on left and right -->
    <g fill="#fb7185" opacity="0.9">
      <circle cx="35" cy="115" r="22" fill="#fda4af"/>
      <circle cx="75" cy="125" r="18" fill="#f43f5e"/>
      <circle cx="115" cy="132" r="14" fill="#fb7185"/>
      <circle cx="395" cy="115" r="22" fill="#fda4af"/>
      <circle cx="355" cy="125" r="18" fill="#f43f5e"/>
      <circle cx="315" cy="132" r="14" fill="#fb7185"/>
      <circle cx="215" cy="135" r="15" fill="#ec4899"/>
    </g>
  </svg>`
};

for (const [filename, svgContent] of Object.entries(images)) {
  fs.writeFileSync(path.join(imgDir, filename), svgContent.trim());
}

console.log('Placeholders successfully updated with rich vectors in ' + imgDir);
