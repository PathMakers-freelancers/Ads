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
        // 1. Remove the Logout button from the header navbar
        // This targets the specific block starting with `<a href="login.html" id="btn-logout-header-nav"`
        const logoutStart = html.indexOf('<a href="login.html" id="btn-logout-header-nav"');
        if (logoutStart !== -1) {
            const logoutEnd = html.indexOf('</a>', logoutStart);
            if (logoutEnd !== -1) {
                html = html.substring(0, logoutStart) + html.substring(logoutEnd + 4);
            }
        }

        // 2. Adjust Logo href to point to the H1 (The Overview section IDs)
        // The Overview wrapper typically has id="view-overview" where the H1 resides. 
        // We'll set the href="#view-overview" so it scrolls smoothly back up to the H1 block.
        html = html.replace('<a href="#" class="flex items-center gap-2 group" dir="ltr">', '<a href="#view-overview" class="flex items-center gap-2 group" dir="ltr">');

        return html;
    });
});

console.log('Removed Logout buttons and adjusted logo scroll targets.');
