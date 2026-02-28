const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';
const files = ['about.html', 'services.html', 'contact.html'];

// HTML Sections to add
const valuesSection = `
    <!-- Values Section (New) -->
    <section class="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16">
                <span class="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Core Tenets</span>
                <h2 class="premium-h2 text-4xl md:text-5xl">Our Unwavering Standards</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="glass-card p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                    <div class="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 mb-6"><i data-lucide="eye" class="w-6 h-6"></i></div>
                    <h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>
                    <p class="text-slate-600 dark:text-slate-400">Every listing on AdNova undergoes rigorous metadata extraction, ensuring buyers know exactly what they are getting.</p>
                </div>
                <div class="glass-card p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                    <div class="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 mb-6"><i data-lucide="shield" class="w-6 h-6"></i></div>
                    <h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>
                    <p class="text-slate-600 dark:text-slate-400">Our escrow structure and real-time fraud monitoring algorithms provide a fortress around every single transaction.</p>
                </div>
                <div class="glass-card p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                    <div class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 mb-6"><i data-lucide="heart" class="w-6 h-6"></i></div>
                    <h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>
                    <p class="text-slate-600 dark:text-slate-400">We refuse to let our platform look like a bulletin board from 2005. Design is a fundamental pillar of user trust.</p>
                </div>
            </div>
        </div>
    </section>
`;

const integrationsSection = `
    <!-- API Ecosystem (New) -->
    <section class="py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-slate-900 dark:bg-slate-950"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 class="premium-h2 text-white text-4xl md:text-5xl mb-6">The Open Ecosystem</h2>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-16">Connect AdNova natively to your existing CRM, inventory management, or accounting software.</p>
            
            <div class="flex flex-wrap justify-center gap-6 opacity-70 hover:opacity-100 transition-opacity">
                <!-- Abstract Logos -->
                <div class="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"><i data-lucide="database" class="w-10 h-10"></i></div>
                <div class="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-emerald-400"><i data-lucide="box" class="w-10 h-10"></i></div>
                <div class="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-violet-400"><i data-lucide="server" class="w-10 h-10"></i></div>
                <div class="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-amber-400"><i data-lucide="network" class="w-10 h-10"></i></div>
                <div class="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-blue-400"><i data-lucide="cpu" class="w-10 h-10"></i></div>
            </div>
            
            <a href="#" class="inline-flex items-center gap-2 mt-12 text-emerald-400 hover:text-emerald-300 font-bold border-b border-emerald-400/30 pb-1">View Developer Documentation <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
    </section>
`;

const globalReachSection = `
    <!-- Global Metrics Section (New) -->
    <section class="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="text-center">
                    <div class="text-5xl font-black text-emerald-500 mb-2 font-heading">2.4M</div>
                    <div class="text-slate-500 font-bold uppercase tracking-widest text-xs">Active Listings</div>
                </div>
                <div class="text-center">
                    <div class="text-5xl font-black text-violet-500 mb-2 font-heading">$800M+</div>
                    <div class="text-slate-500 font-bold uppercase tracking-widest text-xs">Quarterly Volume</div>
                </div>
                <div class="text-center">
                    <div class="text-5xl font-black text-blue-500 mb-2 font-heading">0.1s</div>
                    <div class="text-slate-500 font-bold uppercase tracking-widest text-xs">Avg Response Time</div>
                </div>
                <div class="text-center">
                    <div class="text-5xl font-black text-amber-500 mb-2 font-heading">24/7</div>
                    <div class="text-slate-500 font-bold uppercase tracking-widest text-xs">Support Availability</div>
                </div>
            </div>
        </div>
    </section>
`;

// Helper to inject before footer
function injectSections(html, sectionsArr) {
    const footerIndex = html.indexOf('<!-- Footer -->');
    if (footerIndex !== -1) {
        return html.slice(0, footerIndex) + sectionsArr.join('\n') + html.slice(footerIndex);
    }
    return html;
}

// 1. Navbar padding fix across to all files
const allFiles = fs.readdirSync(dir).filter(file => file.endsWith('.html'));
allFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Currently Navbar classes likely look like:
    // class="sticky top-0 z-[100] bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-3"
    // We will ensure it has significant `py-6` or `py-5`, or standard `py-4`.
    html = html.replace(/<nav\s+class="sticky top-0([^"]*)py-3([^"]*)"/g, '<nav class="sticky top-0$1py-5$2"');

    // Some alternative match:
    html = html.replace(/<nav\s+class="([^"]*)py-3([^"]*)"/g, '<nav class="$1py-5$2"');

    // 2. Add sections to specific files
    if (file === 'about.html') {
        html = injectSections(html, [valuesSection, globalReachSection, integrationsSection]);
    } else if (file === 'services.html') {
        html = injectSections(html, [globalReachSection, integrationsSection, valuesSection]);
    } else if (file === 'contact.html') {
        html = injectSections(html, [globalReachSection, valuesSection, integrationsSection]);
    }

    fs.writeFileSync(filePath, html, 'utf8');
});

console.log('Added 3 sections to About, Services, Contact, and improved Navbar Padding globally.');
