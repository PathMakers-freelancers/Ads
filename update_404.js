const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

const indexHtmlPath = path.join(dir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const headStart = indexHtml.indexOf('<head>');
const headEnd = indexHtml.indexOf('</head>') + 7;
const headHtml = indexHtml.substring(headStart, headEnd).replace('<title>AdNova Nexus</title>', '<title>AdNova | 404 Not Found</title>');

const navStart = indexHtml.indexOf('<!-- Navbar -->');
const navEnd = indexHtml.indexOf('</nav>') + 6;
const navHtml = indexHtml.substring(navStart, navEnd);

const mobileMenuStart = indexHtml.indexOf('<!-- Mobile Menu Overlay -->');
const mobileMenuEnd = indexHtml.indexOf('<!-- Hero Section -->');
const mobileMenuHtml = indexHtml.substring(mobileMenuStart, mobileMenuEnd);

const footerStart = indexHtml.indexOf('<!-- Footer -->');
const footerEnd = indexHtml.indexOf('</footer>') + 9;
const footerHtml = indexHtml.substring(footerStart, footerEnd);

const scriptsHtml = `
    <script>
        lucide.createIcons();
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if(mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
        if(mobileMenuCloseBtn) {
            mobileMenuCloseBtn.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        }
    </script>
</body>
</html>`;

const baseHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
${headHtml}
<body class="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 text-slate-900 dark:text-slate-100 overflow-x-hidden">
    <div class="fixed inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/20 dark:from-slate-950 dark:to-violet-950/20 -z-10 absolute pointer-events-none"></div>
    ${navHtml}
    ${mobileMenuHtml}
    <main>
        {{CONTENT}}
    </main>
    ${footerHtml}
    ${scriptsHtml}
`;

const notFoundContent = `
    <section class="min-h-[calc(100vh-80px)] relative flex items-center justify-center py-20 overflow-hidden">
        
        <!-- Abstract Space Elements -->
        <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <!-- Glowing Planetary Ring -->
            <div class="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border-[1px] border-emerald-500/20 rounded-full animate-[spin_40s_linear_infinite] opacity-50"></div>
            <div class="absolute w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] border-[1px] border-violet-500/10 rounded-full animate-[spin_60s_linear_infinite_reverse] opacity-50"></div>
            
            <!-- Central Black Hole Glow -->
            <div class="absolute w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            
            <!-- Floating Particles -->
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)] animate-float"></div>
            <div class="absolute bottom-1/3 right-1/4 w-3 h-3 bg-violet-400 rounded-full shadow-[0_0_15px_rgba(167,139,250,1)] animate-float" style="animation-delay: 2s;"></div>
            <div class="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)] animate-ping" style="animation-duration: 3s;"></div>
        </div>

        <div class="relative z-10 text-center px-4">
            
            <!-- 404 Glitch Text -->
            <div class="relative inline-block mb-6 select-none group">
                <h1 class="text-[12rem] md:text-[18rem] font-black font-heading leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 dark:from-white dark:to-slate-600 opacity-20 filter blur-[2px]">
                    404
                </h1>
                <h1 class="absolute inset-0 text-[12rem] md:text-[18rem] font-black font-heading leading-none text-transparent bg-clip-text bg-gradient-to-tr from-emerald-500 to-violet-500 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                    404
                </h1>
            </div>

            <h2 class="premium-h2 text-4xl md:text-5xl font-black mb-6">Lost in the Void</h2>
            <p class="text-xl text-slate-600 dark:text-slate-400 max-w-lg mx-auto mb-10 font-medium">The coordinates you entered don't exist in our current dimension. The listing may have been sold, deleted, or relocated.</p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
                <a href="index.html" class="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-colors shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group active:scale-95">
                    <i data-lucide="rocket" class="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
                    Return to Base
                </a>
                <a href="contact.html" class="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-colors shadow-lg active:scale-95">
                    Contact Support
                </a>
            </div>

            <!-- Suggested Links -->
            <div class="mt-20 border-t border-slate-200 dark:border-slate-800/50 pt-10 animate-fade-in-up delay-200">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trending Coordinates</p>
                <div class="flex flex-wrap justify-center gap-3">
                    <a href="index2.html" class="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors shadow-sm inline-flex items-center gap-2 group">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 group-hover:animate-ping"></span> Real Estate
                    </a>
                    <a href="index2.html" class="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold hover:border-violet-500 dark:hover:border-violet-500 transition-colors shadow-sm inline-flex items-center gap-2 group">
                        <span class="w-2 h-2 rounded-full bg-violet-500 group-hover:animate-ping"></span> Vehicles
                    </a>
                    <a href="index2.html" class="px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm inline-flex items-center gap-2 group">
                        <span class="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping"></span> Tech & Gadgets
                    </a>
                </div>
            </div>

        </div>
    </section>
`;

const final404Html = baseHtml
    .replace('{{TITLE}}', '404 Not Found')
    .replace('{{CONTENT}}', notFoundContent);

fs.writeFileSync(path.join(dir, '404.html'), final404Html, 'utf8');

console.log('Successfully generated new 404.html');
