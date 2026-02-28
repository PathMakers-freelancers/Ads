const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

function updateFile(filename, replaceFn) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');
    html = replaceFn(html);
    fs.writeFileSync(filePath, html, 'utf8');
}

['user_dashboard.html', 'admin_dashboard.html'].forEach(file => {
    updateFile(file, (html) => {
        // 1. Remove the entire desktop menu (Home, About, Services, Contact, Dashboards dropdown)
        // The Desktop Menu starts with `<div class="hidden lg:flex items-center gap-1">`
        // and ends right before `</div>` -> `<div class="flex items-center gap-4 sm:gap-6">`

        const menuStart = html.indexOf('<div class="hidden lg:flex items-center gap-1">');
        if (menuStart !== -1) {
            const nextDiv = html.indexOf('<div class="flex items-center gap-4 sm:gap-6">', menuStart);
            if (nextDiv !== -1) {
                html = html.substring(0, menuStart) + html.substring(nextDiv);
            }
        }

        // 2. Change the Logo link from href="index.html" to href="#top" or href="#" so it stays on the dashboard
        // The logo block typically looks like: <a href="index.html" class="flex items-center gap-2 group" dir="ltr">
        html = html.replace('<a href="index.html" class="flex items-center gap-2 group"', '<a href="#" class="flex items-center gap-2 group"');

        return html;
    });
});

console.log('Simplified Dashboard Navbars.');
