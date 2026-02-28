const fs = require('fs');
const path = require('path');

const cssPath = 's:/JanBatch/Classifiedadspro/style.css';
const jsPath = 's:/JanBatch/Classifiedadspro/main.js';

// 1. Fix CSS Opacity
let css = fs.readFileSync(cssPath, 'utf8');

const oldBgCss = `body::before {
  content: "";
  position: fixed;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  z-index: -50;
  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(0.9);
  animation: breathe 20s infinite alternate ease-in-out;
}`;

const newBgCss = `body::before {
  content: "";
  position: fixed;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  z-index: -50;
  background-size: cover;
  background-position: center;
  filter: blur(8px) brightness(1);
  animation: breathe 20s infinite alternate ease-in-out;
  opacity: 0.15; /* Added to make text readable */
  pointer-events: none;
}

.dark body::before {
  opacity: 0.08; /* Even softer in dark mode */
}`;

if (css.includes(oldBgCss)) {
    css = css.replace(oldBgCss, newBgCss);
    fs.writeFileSync(cssPath, css, 'utf8');
} else if (!css.includes('opacity: 0.15; /* Added to make text readable */')) {
    // Fallback if exact match fails
    css = css.replace(/filter: blur\(8px\) brightness\(0\.9\);/g, 'filter: blur(8px) brightness(1);\n  opacity: 0.15;\n  pointer-events: none;');
    css += '\n\n.dark body::before {\n  opacity: 0.08;\n}\n';
    fs.writeFileSync(cssPath, css, 'utf8');
}

// 2. Fix JS Dropdowns
let js = fs.readFileSync(jsPath, 'utf8');

const oldDropdownJs = `    // Navbar Dropdown Logic (Hover for Desktop)
    const navDropdowns = document.querySelectorAll('.dropdown-trigger');
    navDropdowns.forEach(trigger => {
        const menu = trigger.nextElementSibling;
        if (menu) {
            const wrapper = trigger.parentElement;
            wrapper.addEventListener('mouseenter', () => {
                menu.classList.remove('hidden');
                setTimeout(() => {
                    menu.classList.remove('opacity-0', 'translate-y-2');
                }, 10);
            });
            wrapper.addEventListener('mouseleave', () => {
                menu.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => {
                    menu.classList.add('hidden');
                }, 200);
            });
        }
    });`;

const newDropdownJs = `    // Navbar Dropdown Logic (Hover & Click for Desktop)
    const navDropdowns = document.querySelectorAll('.dropdown-trigger');
    
    // Close all menus when clicking outside
    document.addEventListener('click', (e) => {
        navDropdowns.forEach(trigger => {
            const menu = trigger.nextElementSibling;
            const wrapper = trigger.parentElement;
            if (menu && !wrapper.contains(e.target)) {
                menu.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => menu.classList.add('hidden'), 200);
            }
        });
    });

    navDropdowns.forEach(trigger => {
        const menu = trigger.nextElementSibling;
        if (menu) {
            const wrapper = trigger.parentElement;
            
            // Hover logic
            wrapper.addEventListener('mouseenter', () => {
                menu.classList.remove('hidden');
                setTimeout(() => menu.classList.remove('opacity-0', 'translate-y-2'), 10);
            });
            wrapper.addEventListener('mouseleave', () => {
                menu.classList.add('opacity-0', 'translate-y-2');
                setTimeout(() => menu.classList.add('hidden'), 200);
            });
            
            // Click logic
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isHidden = menu.classList.contains('hidden');
                
                // Keep others closed
                document.querySelectorAll('.dropdown-trigger').forEach(t => {
                   if (t !== trigger && t.nextElementSibling) {
                       t.nextElementSibling.classList.add('opacity-0', 'translate-y-2');
                       setTimeout(() => t.nextElementSibling.classList.add('hidden'), 200);
                   }
                });
                
                if(isHidden) {
                   menu.classList.remove('hidden');
                   setTimeout(() => menu.classList.remove('opacity-0', 'translate-y-2'), 10);
                } else {
                   menu.classList.add('opacity-0', 'translate-y-2');
                   setTimeout(() => menu.classList.add('hidden'), 200);
                }
            });
        }
    });`;

if (js.includes('wrapper.addEventListener(\'mouseenter\'')) {
    js = js.replace(oldDropdownJs, newDropdownJs);

    // Also let's fix the mobile Menu Button potential ID conflicts if any still linger in index files
    // In main.js, we use getElementById('mobile-menu-btn')

    fs.writeFileSync(jsPath, js, 'utf8');
}

console.log('Fixed CSS background opacity and JavaScript dropdown logic.');
