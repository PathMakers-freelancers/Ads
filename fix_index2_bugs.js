const fs = require('fs');
const path = require('path');

const filePath = path.join('s:/JanBatch/Classifiedadspro', 'index2.html');
if (!fs.existsSync(filePath)) {
    console.error("index2.html not found");
    process.exit(1);
}

let html = fs.readFileSync(filePath, 'utf8');

// Fix 1: Add bottom margin to Hero buttons container to prevent overlap
html = html.replace(
    '<div class="flex flex-col sm:flex-row justify-center items-center gap-6">',
    '<div class="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 lg:mb-24 relative z-30">'
);

// Fix 2: Replace broken image URL for "Calm" in Curator's Choice
// A reliable minimalist object/chair image from Unsplash
const brokenImg = 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop';
const newImg = 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1200&auto=format&fit=crop';
html = html.replace(brokenImg, newImg);

fs.writeFileSync(filePath, html, 'utf8');
console.log("Successfully patched index2.html layout and image!");
