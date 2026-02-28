const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Fix Tailwind config syntax error (missing closing brace for theme object)
    content = content.replace(/fontFamily:\s*\{\s*sans:\s*\['DM Sans', 'sans-serif'\],\s*heading:\s*\['Space Grotesk', 'sans-serif'\],\s*\}\s*\},(\s*)plugins:/, "fontFamily: {\n                        sans: ['DM Sans', 'sans-serif'],\n                        heading: ['Space Grotesk', 'sans-serif'],\n                    }\n                }\n            },$1plugins:");

    // 2. Remove redundant inline Mobile Menu toggle to prevent conflicts with main.js
    content = content.replace(/\/\/ Mobile Menu Toggle\s*const mobileMenuBtn = document\.getElementById\('mobileMenuBtn'\);\s*const mobileMenu = document\.getElementById\('mobileMenu'\);\s*mobileMenuBtn\.addEventListener\('click', \(\) => \{\s*mobileMenu\.classList\.toggle\('hidden'\);\s*\}\);/g, '');

    // Also remove the pattern used in the generated HTMLs (contact, about, etc.)
    content = content.replace(/const mobileMenuBtn = document\.getElementById\('mobileMenuBtn'\);\s*const mobileMenu = document\.getElementById\('mobileMenu'\);\s*if\(mobileMenuBtn && mobileMenu\) \{\s*mobileMenuBtn\.addEventListener\('click', \(\) => \{\s*mobileMenu\.classList\.toggle\('hidden'\);\s*\}\);\s*\}/g, '');

    content = content.replace(/const mobileMenuCloseBtn = document\.getElementById\('mobileMenuCloseBtn'\);\s*if\(mobileMenuCloseBtn\) \{\s*mobileMenuCloseBtn\.addEventListener\('click', \(\) => \{\s*mobileMenu\.classList\.add\('hidden'\);\s*\}\);\s*\}/g, '');

    // 3. Ensure global scripts are included before </body>
    if (!content.includes('<script src="main.js"></script>')) {
        content = content.replace('</body>', '    <script src="main.js"></script>\n</body>');
    }

    if (!content.includes('<script src="rtltoggle.js"></script>')) {
        content = content.replace('</body>', '    <script src="rtltoggle.js"></script>\n</body>');
    }

    fs.writeFileSync(path.join(dir, file), content, 'utf8');
});

console.log('Fixed Tailwind config and injected global JS scripts across all HTML files.');
