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

// 1. Fix ENTER THE NEXUS in index.html and index2.html
// Ensure text-white is forced in the CTA section regardless of the overarching bg-slate-50 / text-slate-800 of light mode
['index.html', 'index2.html'].forEach(file => {
    updateFile(file, (html) => {
        // The container might be inheriting light text colors for headings
        html = html.replace(
            '<h2 class="text-5xl md:text-7xl font-black mb-6 font-heading tracking-tighter">ENTER THE',
            '<h2 class="text-5xl md:text-7xl font-black mb-6 font-heading tracking-tighter text-white">ENTER THE'
        );
        return html;
    });
});

// 2. The Open Ecosystem Replacement Sections

// For About Page: Our Architecture / Security
const aboutReplacementSection = `
    <!-- Platform Architecture (New Unique) -->
    <section class="py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-slate-900 dark:bg-slate-950"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 class="premium-h2 text-white text-4xl md:text-5xl mb-6">Built For Resilience</h2>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-16">AdNova’s infrastructure relies on a decentralized, hybrid-cloud architecture to ensure 99.99% uptime, even during massive high-value asset drops.</p>
            
            <div class="flex flex-wrap justify-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
                <!-- Architecture Nodes -->
                <div class="w-32 h-32 rounded-3xl bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 flex flex-col items-center justify-center text-emerald-400 group hover:bg-emerald-500/20 transition-all">
                    <i data-lucide="shield-check" class="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"></i>
                    <span class="text-xs font-bold uppercase tracking-widest">WAF Shield</span>
                </div>
                <div class="w-32 h-32 rounded-3xl bg-violet-500/10 backdrop-blur-md border border-violet-500/20 flex flex-col items-center justify-center text-violet-400 group hover:bg-violet-500/20 transition-all">
                    <i data-lucide="zap" class="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"></i>
                    <span class="text-xs font-bold uppercase tracking-widest">Edge CDN</span>
                </div>
                <div class="w-32 h-32 rounded-3xl bg-blue-500/10 backdrop-blur-md border border-blue-500/20 flex flex-col items-center justify-center text-blue-400 group hover:bg-blue-500/20 transition-all">
                    <i data-lucide="database" class="w-8 h-8 mb-2 group-hover:scale-110 transition-transform"></i>
                    <span class="text-xs font-bold uppercase tracking-widest">Cold Storage</span>
                </div>
            </div>
            
            <a href="#" class="inline-flex items-center gap-2 mt-12 text-slate-300 hover:text-white font-bold pb-1 transition-colors">Read our Whitepaper <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
    </section>
`;

// For Contact Page: Global Support Network
const contactReplacementSection = `
    <!-- Regional Command Centers (New Unique) -->
    <section class="py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-slate-900 dark:bg-slate-950"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 class="premium-h2 text-white text-4xl md:text-5xl mb-6">Global Command Centers</h2>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto mb-16">AdNova operates dedicated Trust & Safety hubs across 4 major timezones, ensuring there is always a human expert ready to assist.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
                <!-- Location Nodes -->
                <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/50 transition-colors">
                    <h4 class="text-white font-bold text-lg mb-1">North America</h4>
                    <p class="text-slate-400 text-sm mb-4">San Francisco, CA</p>
                    <p class="text-emerald-400 text-xs font-mono font-bold tracking-widest"><span class="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping mr-1"></span> ACTIVE</p>
                </div>
                <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-colors">
                    <h4 class="text-white font-bold text-lg mb-1">Europe</h4>
                    <p class="text-slate-400 text-sm mb-4">London, UK</p>
                    <p class="text-emerald-400 text-xs font-mono font-bold tracking-widest"><span class="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping mr-1"></span> ACTIVE</p>
                </div>
                <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-colors">
                    <h4 class="text-white font-bold text-lg mb-1">Asia Pacific</h4>
                    <p class="text-slate-400 text-sm mb-4">Tokyo, JP</p>
                    <p class="text-emerald-400 text-xs font-mono font-bold tracking-widest"><span class="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping mr-1"></span> ACTIVE</p>
                </div>
                <div class="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 transition-colors">
                    <h4 class="text-white font-bold text-lg mb-1">Middle East</h4>
                    <p class="text-slate-400 text-sm mb-4">Dubai, UAE</p>
                    <p class="text-emerald-400 text-xs font-mono font-bold tracking-widest"><span class="inline-block w-2 h-2 bg-emerald-400 rounded-full animate-ping mr-1"></span> ACTIVE</p>
                </div>
            </div>
            
            <a href="#" class="inline-flex items-center gap-2 mt-12 text-emerald-400 hover:text-emerald-300 font-bold border-b border-emerald-400/30 pb-1">Request Priority Routing <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
    </section>
`;

const openEcosystemRegex = /<!-- API Ecosystem \(New\) -->[\s\S]*?<\/section>/;

updateFile('about.html', (html) => {
    return html.replace(openEcosystemRegex, aboutReplacementSection);
});

updateFile('contact.html', (html) => {
    return html.replace(openEcosystemRegex, contactReplacementSection);
});

console.log('Fixed CTA text color and replaced duplicate Open Ecosystem sections.');
