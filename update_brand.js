const fs = require('fs');
const path = require('path');

const directoryPath = '.';
const filesToUpdate = [
    'index.html', 'index2.html', 'about.html', 'services.html', 'contact.html',
    'admin_dashboard.html', 'user_dashboard.html', 'login.html', '404.html', 'pricing-booking.html'
];

filesToUpdate.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Basic Title and Text Replacements
    content = content.replace(/Classified-ads-website/g, 'AdNova');

    // Fix split brand names in Logo marks
    content = content.replace(
        /Classified-ads-<\s*span[^>]*>(?:website|website)<\/span>/gi,
        'Ad<span class="text-emerald-500">Nova</span>'
    );

    // Update Font Configuration
    content = content.replace(
        /fontFamily:\s*\{[\s\S]*?\}\s*\},/m,
        `fontFamily: {
                        sans: ['DM Sans', 'sans-serif'],
                        heading: ['Space Grotesk', 'sans-serif'],
                    }
                },`
    );

    // Update Google Fonts Link
    content = content.replace(
        /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=[^"]+"\s+rel="stylesheet">/m,
        `<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">`
    );

    // Update C to A in logo icons
    content = content.replace(/>\s*c\s*<\/div>/gi, '>A</div>');
    content = content.replace(/>\s*c<\/div>/gi, '>A</div>');
    content = content.replace(/>c<\/div>/gi, '>A</div>');

    content = content.replace(/>\s*c\s*<\/span>/gi, '>A</span>');
    content = content.replace(/>\s*c<\/span>/gi, '>A</span>');
    content = content.replace(/>c<\/span>/gi, '>A</span>');

    // Replace utility classes for fonts
    content = content.replace(/font-outfit/gi, 'font-heading tracking-tight');
    content = content.replace(/font-serif/gi, 'font-heading tracking-tight');

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Update Complete.');
