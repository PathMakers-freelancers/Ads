const fs = require('fs');
const path = require('path');

const filePath = path.join('s:/JanBatch/Classifiedadspro', 'index2.html');
if (!fs.existsSync(filePath)) process.exit(1);

let html = fs.readFileSync(filePath, 'utf8');

// Replace Curated Item #1 name
html = html.replace('Curated Item #1', 'Minimalist Lounge Chair');
html = html.replace('alt="Calm"', 'alt="Lounge Chair"');

// Replace Curated Item #2
html = html.replace('Curated Item #2', 'Vintage Leica Camera');
html = html.replace(
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=1200&auto=format&fit=crop'
);

// Replace Curated Item #3
html = html.replace('Curated Item #3', 'MacBook Pro M2');
html = html.replace(
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
);

// Fix Leather Totebag Image
html = html.replace(
    'https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop'
);

// Fix Ceramic Vase Image
html = html.replace(
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3c?q=80&w=1200&auto=format&fit=crop' // This ID is close but let's just use a proper vase one
);
// Real Ceramic Vase Unsplash ID:
html = html.replace(
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop'
);
// Wait, the replace string might have failed above if it didn't match. Let me do a direct replace if the first one failed.
html = html.replace(
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop'
);

// Remove duplicate "alt=Calm" for the rest
html = html.replace(/alt="Calm"/g, 'alt="Curated Item"');

fs.writeFileSync(filePath, html, 'utf8');
console.log("Fixed Curated items images and text!");
