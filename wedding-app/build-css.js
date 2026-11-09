const tw = require('tailwindcss');
const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

async function build() {
  const customCss = `
:root {
  --font-great-vibes: 'Great Vibes', cursive, serif;
  --font-playfair: 'Playfair Display', Georgia, serif;
}

html {
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: #fce8ed;
  color: #552731;
  font-family: var(--font-playfair);
}

.font-script {
  font-family: var(--font-great-vibes), cursive, serif;
}

.font-serif {
  font-family: var(--font-playfair), Georgia, serif;
}

.text-gold-script {
  font-family: var(--font-great-vibes), cursive, serif;
  color: #b8741a;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);
}

.wedding-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 18px;
  border: 1px solid rgba(245, 214, 198, 0.85);
  box-shadow: 0 8px 24px rgba(235, 160, 180, 0.18);
}

.btn-rose {
  background: linear-gradient(135deg, #d9486c 0%, #e86383 100%);
  color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(217, 72, 108, 0.35);
  transition: all 0.2s ease-in-out;
}

.btn-rose:hover {
  filter: brightness(1.05);
  transform: translateY(-1px);
}

.btn-rose:active {
  transform: translateY(1px);
}

@keyframes heartFloat {
  0% {
    transform: translateY(-20px) rotate(0deg) scale(0.8);
    opacity: 0;
  }
  15% {
    opacity: 0.95;
  }
  80% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(105vh) rotate(360deg) scale(1.1);
    opacity: 0;
  }
}

.animate-falling-heart {
  animation: heartFloat 4.2s linear forwards;
}

@media (prefers-reduced-motion: reduce) {
  .animate-falling-heart {
    animation: none !important;
    display: none !important;
  }
  html {
    scroll-behavior: auto !important;
  }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;

  const baseInput = '@import "tailwindcss";\n' + customCss;
  const compiler = await tw.compile(baseInput, {
    base: __dirname,
    loadStylesheet: async (id, base) => {
      if (id === 'tailwindcss') {
        const p = path.join(__dirname, 'node_modules/tailwindcss/index.css');
        return {
          content: fs.readFileSync(p, 'utf8'),
          base: path.dirname(p),
        };
      }
      const resolved = path.resolve(base, id);
      return {
        content: fs.readFileSync(resolved, 'utf8'),
        base: path.dirname(resolved),
      };
    },
  });

  const srcDir = path.join(__dirname, 'src');
  const allCodeFiles = getAllFiles(srcDir);
  const combinedContent = allCodeFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
  const candidates = combinedContent.match(/[a-zA-Z0-9_\-\/\[\]#.:%]+/g) || [];
  const compiled = compiler.build(candidates);

  fs.writeFileSync(path.join(__dirname, 'src/app/globals.css'), compiled);
}

build().catch((err) => {
  console.error('CSS build failed:', err);
  process.exit(1);
});
