const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

function replaceImagesInFile(filename, replacements) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;

    let html = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    replacements.forEach(rep => {
        if (html.includes(rep.old)) {
            html = html.replace(new RegExp(rep.old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), rep.new);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Updated images in ${filename}`);
    }
}

// 1. About Page (Changing abstract lines to marketplace/e-commerce/data centers)
replaceImagesInFile('about.html', [
    // Hero image -> High-end fulfillment center / data hub
    { old: 'photo-1542744173-8e7e53415bb0', new: 'photo-1586528116311-ad8dd3c8310d' },
    // Absolute Transparency -> Secure lock / shield tech
    { old: 'photo-1550751827-4bd374c3f58b', new: 'photo-1563986768609-322da13575f3' },
    // Defensive Engineering -> Server racks / code
    { old: 'photo-1558494949-ef010cbdcc31', new: 'photo-1558494949-ef010cbdcc31' }, // keeping this one, fits
    // Aesthetic Integrity -> UI/UX Design tools
    { old: 'photo-1618005182384-a83a8bd57fbe', new: 'photo-1561070791-2526d30994b5' }
]);

// 2. Contact Page (Changing abstract shapes to global trade networks or actual support centers)
replaceImagesInFile('contact.html', [
    // Support hero -> professional agent or global network map
    { old: 'photo-1553877522-43269d4ea984', new: 'photo-1521737852567-6949f3f9f2b5' },
    // Map abstract -> High end global map 
    { old: 'photo-1524661135-423995f22d0b', new: 'photo-1524661135-423995f22d0b' } // keeping map
]);

// 3. User & Admin Dashboards (Check for generic avatars or header backgrounds)
const dashReplacements = [
    // Header background if it exists (making it sleek dark mesh)
    { old: 'photo-1506748686214-e9df14d4d9d0', new: 'photo-1550745165-9bc0b252726f' }
];
replaceImagesInFile('user_dashboard.html', dashReplacements);
replaceImagesInFile('admin_dashboard.html', dashReplacements);

// 4. Index.html (Ensure hero and categories represent premium goods)
replaceImagesInFile('index.html', [
    // Featured ad placeholder -> Premium watch or tech
    { old: 'photo-1523275335684-37898b6baf30', new: 'photo-1523275335684-37898b6baf30' } // Good image
]);

console.log("Image theme verification complete.");
