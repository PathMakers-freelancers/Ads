const fs = require('fs');
const path = 's:/JanBatch/Classifiedadspro/index2.html';

let content = fs.readFileSync(path, 'utf8');

// Colors
content = content.replace(/indigo-/g, 'emerald-');
content = content.replace(/purple-/g, 'violet-');
content = content.replace(/teal-/g, 'emerald-'); // reuse emerald or violet
content = content.replace(/rose-/g, 'violet-');

// We should fix the double-replacement if any (emerald-500 -> emerald-500)
// The above is safe since they are distinct names.

// Text
content = content.replace(/Buy\. Sell\. <br>/g, 'Trade. Connect. <br>');
content = content.replace(/Classified\./g, 'AdNova.');
content = content.replace(/The Future of Classifieds/g, 'The Calm Architecture');
content = content.replace(/Classified-ads-website/gi, 'AdNova');

// Ensure AdNova is properly capitalized in the navbar
content = content.replace(/Ad<span class="text-emerald-500">Nova<\/span>/g, 'Ad<span class="text-emerald-500">Nova</span>'); // This was already AdNova, just verifying

// Let's replace the placeholder images to ensure they match our new aesthetic
// Replace some specific unsplash IDs if needed, but the current ones for 'calm' might be fine.
// We can just add a specific glass card style to some elements
content = content.replace(/bg-white\/60 dark:bg-slate-900\/60/g, 'bg-white/40 dark:bg-slate-900/40 glass-card');

fs.writeFileSync(path, content, 'utf8');
console.log('index2.html rebranded successfully.');
