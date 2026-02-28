const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

function updateFile(filename) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove the custom JS script we injected earlier
    const startIdx = html.indexOf('<!-- Logo Scroll Script -->');
    if (startIdx !== -1) {
        const endIdx = html.indexOf('</script>', startIdx);
        if (endIdx !== -1) {
            html = html.substring(0, startIdx) + html.substring(endIdx + 9);
        }
    }

    // Attempt to match all the possible states the logo link might be in after our messing around
    const replaceHref = (oldStr) => {
        html = html.replace(oldStr, '<a href="index.html" class="flex items-center gap-2 group" dir="ltr">');
    };

    replaceHref('<a href="#view-overview" id="adnova-logo-btn" class="flex items-center gap-2 group" dir="ltr">');
    replaceHref('<a href="#view-overview" class="flex items-center gap-2 group" dir="ltr">');
    replaceHref('<a href="#" class="flex items-center gap-2 group" dir="ltr">');

    fs.writeFileSync(filePath, html, 'utf8');
}

['user_dashboard.html', 'admin_dashboard.html'].forEach(updateFile);
console.log("Restored Logo Redirect to index.html (Home 1)");
