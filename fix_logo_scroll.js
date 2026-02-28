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

        // 1. Add id to the logo
        html = html.replace(
            '<a href="#view-overview" class="flex items-center gap-2 group" dir="ltr">',
            '<a href="#view-overview" id="adnova-logo-btn" class="flex items-center gap-2 group" dir="ltr">'
        );

        // 2. Inject JS snippet before </body> if not already there
        if (!html.includes('adnova-logo-btn-script')) {
            const script = `
    <!-- Logo Scroll Script -->
    <script id="adnova-logo-btn-script">
        document.addEventListener('DOMContentLoaded', () => {
            const logoBtn = document.getElementById('adnova-logo-btn');
            if (logoBtn) {
                logoBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // The target is the Overview section which contains the H1
                    const target = document.getElementById('view-overview');
                    if (!target) return;

                    // Support both window scroll (user dashboard) and main container scroll (admin dashboard)
                    const mainContainer = document.querySelector('main.overflow-y-auto');
                    
                    if (mainContainer && window.getComputedStyle(mainContainer).overflowY === 'auto') {
                        mainContainer.scrollTo({
                            top: target.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    } else {
                        window.scrollTo({
                            top: target.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    </script>
</body>`;
            html = html.replace('</body>', script);
        }

        return html;
    });
});

console.log('Fixed Adnova Logo Redirect / Scroll on Dashboards.');
