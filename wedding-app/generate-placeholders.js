const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Generate an SVG and save as both .svg and .png/.jpg as needed
const createSvg = (w, h, bgGrad, content) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGrad[0]}"/>
      <stop offset="100%" stop-color="${bgGrad[1]}"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#b8741a" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" rx="16" fill="url(#g)"/>
  ${content}
</svg>
`;

const images = {
  'hero-couple.png': createSvg(400, 480, ['#fde8ef', '#fce1e8'], `
    <circle cx="200" cy="180" r="110" fill="#f8cfd9" opacity="0.6"/>
    <!-- Groom & Bride Silhouette / Art Illustration -->
    <g transform="translate(110, 80) scale(0.9)">
      <circle cx="50" cy="50" r="32" fill="#6d4c41"/>
      <path d="M20 120 C20 75 80 75 80 120 Z" fill="#d9777f"/>
      <circle cx="120" cy="65" r="30" fill="#4e342e"/>
      <path d="M85 125 C85 85 155 85 155 125 Z" fill="#b91c1c"/>
      <!-- Flower Garlands -->
      <path d="M30 110 Q50 145 70 110" stroke="#f59e0b" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M100 115 Q120 150 140 115" stroke="#f59e0b" stroke-width="6" fill="none" stroke-linecap="round"/>
    </g>
    <text x="200" y="320" font-family="serif" font-size="22" font-weight="bold" fill="#881337" text-anchor="middle">Aditya &amp; Subhashree</text>
    <text x="200" y="348" font-family="sans-serif" font-size="13" fill="#b8741a" text-anchor="middle">Together in Love</text>
    <!-- Blossoms around -->
    <circle cx="80" cy="380" r="14" fill="#fda4af" opacity="0.8"/>
    <circle cx="320" cy="370" r="16" fill="#f472b6" opacity="0.7"/>
    <circle cx="200" cy="410" r="10" fill="#fbcfe8"/>
  `),

  'story-couple.png': createSvg(360, 260, ['#fae8ee', '#fbd5df'], `
    <g transform="translate(90, 30)">
      <circle cx="65" cy="55" r="30" fill="#5c4033"/>
      <circle cx="115" cy="65" r="28" fill="#4a2e2b"/>
      <path d="M35 140 C35 90 95 90 95 140 Z" fill="#e28a9d"/>
      <path d="M85 140 C85 100 145 100 145 140 Z" fill="#be185d"/>
      <!-- Heart above -->
      <path d="M90 25 C90 15 105 15 105 25 C105 35 90 45 90 45 C90 45 75 35 75 25 C75 15 90 15 90 25 Z" fill="#e11d48"/>
    </g>
    <text x="180" y="215" font-family="serif" font-size="16" font-style="italic" fill="#9f1239" text-anchor="middle">Our Journey Begins</text>
  `),

  'video-poster.jpg': createSvg(480, 270, ['#e9b7b9', '#d48a94'], `
    <defs>
      <pattern id="pat" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="#fff" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="480" height="270" fill="url(#pat)"/>
    <g transform="translate(190, 80)">
      <!-- Hands with henna & rings -->
      <circle cx="50" cy="40" r="45" fill="#be123c" opacity="0.7"/>
      <text x="50" y="48" font-size="28" text-anchor="middle" fill="#fff">💍</text>
    </g>
    <text x="240" y="195" font-family="serif" font-size="18" font-weight="600" fill="#ffffff" text-anchor="middle">Watch Live Wedding Stream</text>
    <text x="240" y="220" font-family="sans-serif" font-size="12" fill="#ffe4e6" text-anchor="middle">Bhubaneswar, Odisha</text>
  `),

  'haldi.jpg': createSvg(200, 200, ['#fef3c7', '#fde68a'], `
    <circle cx="100" cy="90" r="50" fill="#f59e0b" opacity="0.3"/>
    <text x="100" y="105" font-size="54" text-anchor="middle">🏺</text>
    <text x="100" y="165" font-family="serif" font-size="18" font-weight="bold" fill="#b45309" text-anchor="middle">Haldi</text>
  `),

  'mehndi.jpg': createSvg(200, 200, ['#fce7f3', '#fbcfe8'], `
    <circle cx="100" cy="90" r="50" fill="#ec4899" opacity="0.25"/>
    <text x="100" y="105" font-size="54" text-anchor="middle">✋</text>
    <text x="100" y="165" font-family="serif" font-size="18" font-weight="bold" fill="#9d174d" text-anchor="middle">Mehndi</text>
  `),

  'sangeet.jpg': createSvg(200, 200, ['#ede9fe', '#ddd6fe'], `
    <circle cx="100" cy="90" r="50" fill="#8b5cf6" opacity="0.25"/>
    <text x="100" y="105" font-size="54" text-anchor="middle">💃</text>
    <text x="100" y="165" font-family="serif" font-size="18" font-weight="bold" fill="#6d28d9" text-anchor="middle">Sangeet</text>
  `),

  'wedding.jpg': createSvg(200, 200, ['#ffe4e6', '#fecdd3'], `
    <circle cx="100" cy="90" r="50" fill="#f43f5e" opacity="0.25"/>
    <text x="100" y="105" font-size="54" text-anchor="middle">🔥</text>
    <text x="100" y="165" font-family="serif" font-size="18" font-weight="bold" fill="#be123c" text-anchor="middle">Wedding</text>
  `),

  'reception.jpg': createSvg(200, 200, ['#fae8ff', '#f5d0fe'], `
    <circle cx="100" cy="90" r="50" fill="#d946ef" opacity="0.25"/>
    <text x="100" y="105" font-size="54" text-anchor="middle">🥂</text>
    <text x="100" y="165" font-family="serif" font-size="18" font-weight="bold" fill="#86198f" text-anchor="middle">Reception</text>
  `),

  'memory-1.jpg': createSvg(240, 280, ['#fce7f3', '#fbcfe8'], `
    <text x="120" y="130" font-size="48" text-anchor="middle">🌸</text>
    <text x="120" y="180" font-family="serif" font-size="16" font-weight="600" fill="#9d174d" text-anchor="middle">Henna &amp; Jewels</text>
  `),

  'memory-2.jpg': createSvg(240, 280, ['#fff1f2', '#ffe4e6'], `
    <text x="120" y="130" font-size="48" text-anchor="middle">✨</text>
    <text x="120" y="180" font-family="serif" font-size="16" font-weight="600" fill="#be123c" text-anchor="middle">Candlelit Mandap</text>
  `),

  'memory-3.jpg': createSvg(240, 280, ['#fdf2f8', '#fce7f3'], `
    <text x="120" y="130" font-size="48" text-anchor="middle">🌺</text>
    <text x="120" y="180" font-family="serif" font-size="16" font-weight="600" fill="#db2777" text-anchor="middle">Floral Nights</text>
  `),

  'memory-4.jpg': createSvg(240, 280, ['#fef3c7', '#fde68a'], `
    <text x="120" y="130" font-size="48" text-anchor="middle">💖</text>
    <text x="120" y="180" font-family="serif" font-size="16" font-weight="600" fill="#b45309" text-anchor="middle">Sweet Smiles</text>
  `),

  'memory-5.jpg': createSvg(240, 280, ['#fae8ff', '#f5d0fe'], `
    <text x="120" y="130" font-size="48" text-anchor="middle">🌙</text>
    <text x="120" y="180" font-family="serif" font-size="16" font-weight="600" fill="#a21caf" text-anchor="middle">Golden Hours</text>
  `),

  'journey-1.jpg': createSvg(220, 220, ['#fbcfe8', '#f9a8d4'], `
    <text x="110" y="105" font-size="42" text-anchor="middle">🌅</text>
    <text x="110" y="150" font-family="serif" font-size="14" fill="#831843" text-anchor="middle">Sunset Stroll</text>
  `),

  'journey-2.jpg': createSvg(220, 220, ['#fed7aa', '#fdba74'], `
    <text x="110" y="105" font-size="42" text-anchor="middle">🫶</text>
    <text x="110" y="150" font-family="serif" font-size="14" fill="#9a3412" text-anchor="middle">Two Hearts</text>
  `),

  'journey-3.jpg': createSvg(220, 220, ['#fde68a', '#fcd34d'], `
    <text x="110" y="105" font-size="42" text-anchor="middle">🏮</text>
    <text x="110" y="150" font-family="serif" font-size="14" fill="#b45309" text-anchor="middle">Lantern Glow</text>
  `),

  'dress-men.png': createSvg(200, 260, ['#fef9c3', '#fef08a'], `
    <text x="100" y="120" font-size="64" text-anchor="middle">🤵</text>
    <text x="100" y="195" font-family="serif" font-size="16" font-weight="bold" fill="#854d0e" text-anchor="middle">Kurta &amp; Sherwani</text>
  `),

  'dress-women.png': createSvg(200, 260, ['#fce7f3', '#fbcfe8'], `
    <text x="100" y="120" font-size="64" text-anchor="middle">👰</text>
    <text x="100" y="195" font-family="serif" font-size="16" font-weight="bold" fill="#9d174d" text-anchor="middle">Lehenga / Saree</text>
  `),

  'map.png': createSvg(280, 180, ['#dbeafe', '#bfdbfe'], `
    <path d="M 30 180 Q 140 100 250 180" stroke="#93c5fd" stroke-width="24" fill="none"/>
    <path d="M 0 60 Q 140 120 280 40" stroke="#fcd34d" stroke-width="12" fill="none"/>
    <circle cx="150" cy="90" r="16" fill="#ef4444"/>
    <circle cx="150" cy="90" r="6" fill="#ffffff"/>
    <text x="150" y="145" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Kalyan Mandap</text>
  `),

  'gifts.png': createSvg(200, 180, ['#ffe4e6', '#fecdd3'], `
    <text x="100" y="100" font-size="60" text-anchor="middle">🎁</text>
    <text x="100" y="145" font-family="serif" font-size="14" font-weight="bold" fill="#be123c" text-anchor="middle">Blessings Only</text>
  `),

  'camera.png': createSvg(200, 180, ['#fdf2f8', '#fce7f3'], `
    <text x="100" y="100" font-size="60" text-anchor="middle">📸</text>
    <text x="100" y="145" font-family="sans-serif" font-size="13" font-weight="bold" fill="#db2777" text-anchor="middle">Share Memories</text>
  `),

  'floral-top.png': createSvg(430, 120, ['transparent', 'transparent'], `
    <g fill="#f472b6" opacity="0.8">
      <circle cx="40" cy="30" r="18" fill="#fda4af"/>
      <circle cx="70" cy="20" r="14" fill="#fb7185"/>
      <circle cx="360" cy="20" r="15" fill="#fb7185"/>
      <circle cx="390" cy="35" r="19" fill="#fda4af"/>
      <!-- Hanging vines and blossoms -->
      <path d="M 10 0 C 30 40 50 60 70 20" stroke="#fda4af" stroke-width="3" fill="none"/>
      <path d="M 350 10 C 380 50 400 30 420 10" stroke="#fda4af" stroke-width="3" fill="none"/>
    </g>
  `),

  'floral-bottom.png': createSvg(430, 140, ['transparent', 'transparent'], `
    <!-- Temple/Palace Silhouettes & floral garland -->
    <g transform="translate(115, 20)">
      <path d="M 100 0 L 120 40 L 80 40 Z" fill="#f59e0b" opacity="0.6"/>
      <rect x="70" y="40" width="60" height="50" rx="4" fill="#fde68a" opacity="0.8"/>
      <path d="M 40 20 L 55 45 L 25 45 Z" fill="#f59e0b" opacity="0.5"/>
      <rect x="25" y="45" width="30" height="45" rx="3" fill="#fef3c7" opacity="0.8"/>
      <path d="M 160 20 L 175 45 L 145 45 Z" fill="#f59e0b" opacity="0.5"/>
      <rect x="145" y="45" width="30" height="45" rx="3" fill="#fef3c7" opacity="0.8"/>
    </g>
    <g fill="#fb7185" opacity="0.85">
      <circle cx="40" cy="110" r="18" fill="#fda4af"/>
      <circle cx="80" cy="115" r="15" fill="#f43f5e"/>
      <circle cx="350" cy="115" r="15" fill="#f43f5e"/>
      <circle cx="390" cy="110" r="18" fill="#fda4af"/>
      <circle cx="215" cy="120" r="16" fill="#ec4899"/>
    </g>
  `)
};

for (const [filename, svgContent] of Object.entries(images)) {
  fs.writeFileSync(path.join(imgDir, filename), svgContent.trim());
}

console.log('Placeholders successfully generated in ' + imgDir);
