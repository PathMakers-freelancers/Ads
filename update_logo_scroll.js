const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

function updateFile(filename) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    const startIdx = html.indexOf('<script id="adnova-logo-btn-script">');
    const endIdx = html.indexOf('</script>', startIdx);

    if (startIdx !== -1 && endIdx !== -1) {
        const newScript = `<script id="adnova-logo-btn-script">
        document.addEventListener('DOMContentLoaded', () => {
            const logoBtn = document.getElementById('adnova-logo-btn');
            if (logoBtn) {
                logoBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Target the H1 specifically
                    const overview = document.getElementById('view-overview');
                    if (!overview) return;
                    
                    const h1 = overview.querySelector('h1.premium-h1');
                    if (!h1) return;

                    const mainContainer = document.querySelector('main.overflow-y-auto');
                    
                    // The sticky header offset
                    const headerOffset = 90;

                    if (mainContainer && window.getComputedStyle(mainContainer).overflowY === 'auto') {
                        // Admin Dashboard
                        const h1Top = h1.getBoundingClientRect().top;
                        const containerTop = mainContainer.getBoundingClientRect().top;
                        const scrollPos = h1Top - containerTop + mainContainer.scrollTop - headerOffset;
                        
                        mainContainer.scrollTo({
                            top: scrollPos,
                            behavior: 'smooth'
                        });
                    } else {
                        // User Dashboard
                        const h1Top = h1.getBoundingClientRect().top;
                        const scrollPos = h1Top + window.pageYOffset - headerOffset;
                        window.scrollTo({
                            top: scrollPos,
                            behavior: 'smooth'
                        });
                    }
                });
            }
        });
    `;
        html = html.substring(0, startIdx) + newScript + html.substring(endIdx);
        fs.writeFileSync(filePath, html, 'utf8');
    }
}

['user_dashboard.html', 'admin_dashboard.html'].forEach(updateFile);
console.log("Updated logo scroll logic to pinpoint H1.");
