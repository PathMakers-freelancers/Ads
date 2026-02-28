const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';
const dashboards = ['user_dashboard.html', 'admin_dashboard.html'];

dashboards.forEach(file => {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Update <style> block to match AdNova Glassmorphism
    // Since replacing exact multi-line text is tricky, we replace the specific CSS classes:

    // Background of body
    content = content.replace(/class="bg-\[#fafafa\] dark:bg-slate-950 /g, 'class="bg-slate-50 dark:bg-slate-950 ');

    // Add ambient background fixed div right after body
    if (!content.includes('<div class="fixed inset-0 bg-gradient-to-br')) {
        content = content.replace(/<body([^>]*)>/, '<body$1>\n    <div class="fixed inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/20 dark:from-slate-950 dark:to-violet-950/20 -z-10 absolute pointer-events-none"></div>');
    }

    // Glow classes
    content = content.replace(/glow-indigo/g, 'shadow-[0_0_20px_rgba(139,92,246,0.15)] glow-violet'); // Indigo to Violet roughly

    // Replace text
    content = content.replace(/Classified-ads-website/g, 'AdNova');
    content = content.replace(/Welcome back, Alex/g, 'Welcome back, Architect');

    // Sidebar refinement
    content = content.replace(/bg-white\/95 dark:bg-\[#0f172a\]\/95/g, 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl');

    // Update dashboard-card css
    const oldCss = `.dashboard-card {
            background-color: white;
            border: 1px solid #e2e8f0;
        }

        .dark .dashboard-card {
            background-color: #1e293b;
            border-color: rgba(255, 255, 255, 0.05);
        }`;
    const newCss = `.dashboard-card {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 1.5rem;
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
        }

        .dark .dashboard-card {
            background-color: rgba(15, 23, 42, 0.7);
            border-color: rgba(255, 255, 255, 0.05);
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
        }`;

    // Normalize whitespace for replacement
    content = content.replace(/\.dashboard-card\s*\{[^}]*\}\s*\.dark\s*\.dashboard-card\s*\{[^}]*\}/s, newCss);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated aesthetic of ${file}`);
});
