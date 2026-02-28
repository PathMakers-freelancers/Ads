const fs = require('fs');
const path = require('path');

const cssPath = path.join('.', 'style.css');
let content = fs.readFileSync(cssPath, 'utf8');

// 1. Fonts
content = content.replace(
    /@import url\('https:\/\/fonts.googleapis.com\/css2\?family=Inter[^\n]+/gi,
    `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');`
);
content = content.replace(/@import url\('https:\/\/fonts.googleapis.com\/css2\?family=Playfair[^\n]+\n/g, '');

content = content.replace(/font-family: 'Inter', sans-serif;/g, `font-family: 'DM Sans', sans-serif;`);
content = content.replace(/\.font-outfit \{[\s\S]*?\}/g, `.font-heading {\n  font-family: 'Space Grotesk', sans-serif;\n}`);

// 2. Gradients for text
content = content.replace(
    /linear-gradient\(135deg, #312e81 0%, #4f46e5 50%, #c026d3 100%\)/g,
    `linear-gradient(135deg, #064e3b 0%, #059669 50%, #7c3aed 100%)`
);
content = content.replace(
    /linear-gradient\(135deg, #e0e7ff 0%, #818cf8 50%, #f472b6 100%\)/g,
    `linear-gradient(135deg, #d1fae5 0%, #10b981 50%, #a78bfa 100%)`
);

// 3. Update indigo to emerald/violet where appropriate in CSS variables
content = content.replace(/#6366f1/g, '#10b981'); // indigo-500 -> emerald-500
content = content.replace(/99, 102, 241/g, '16, 185, 129'); // rgba indigo -> emerald
content = content.replace(/#4f46e5/g, '#059669'); // indigo-600 -> emerald-600
content = content.replace(/#818cf8/g, '#34d399'); // indigo-400 -> emerald-400

// 4. Update the "glass-card" style
content = content.replace(
    /\.glass-card \{[\s\S]*?\}/g,
    `.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05);
}`
);
content = content.replace(
    /\.dark \.glass-card \{[\s\S]*?\}/g,
    `.dark .glass-card {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}`
);

fs.writeFileSync(cssPath, content, 'utf8');
console.log('CSS Updated!');
