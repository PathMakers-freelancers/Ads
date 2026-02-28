const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

const indexHtmlPath = path.join(dir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const headStart = indexHtml.indexOf('<head>');
const headEnd = indexHtml.indexOf('</head>') + 7;
const headHtml = indexHtml.substring(headStart, headEnd).replace('<title>AdNova Nexus</title>', '<title>AdNova | Post & Price</title>');

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

        // Pricing logic
        const plans = document.querySelectorAll('.pricing-card');
        const planSelect = document.getElementById('plan-select');

        plans.forEach(plan => {
            plan.addEventListener('click', () => {
                // remove active state
                plans.forEach(p => {
                    p.classList.remove('border-emerald-500', 'bg-emerald-500/10', 'dark:bg-emerald-500/10');
                    p.classList.add('border-white/20', 'dark:border-slate-800', 'bg-white/50', 'dark:bg-slate-900/50');
                    const indicator = p.querySelector('.indicator');
                    if(indicator) indicator.classList.add('opacity-0');
                });
                
                // add active state
                plan.classList.add('border-emerald-500', 'bg-emerald-500/10', 'dark:bg-emerald-500/10');
                plan.classList.remove('border-white/20', 'dark:border-slate-800', 'bg-white/50', 'dark:bg-slate-900/50');
                const indicator = plan.querySelector('.indicator');
                if(indicator) indicator.classList.remove('opacity-0');
                
                // update select
                if(planSelect) {
                    planSelect.value = plan.dataset.value;
                }
            });
        });

    </script>
</body>
</html>`;

const baseHtml = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
${headHtml}
<body class="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 text-slate-900 dark:text-slate-100">
    <div class="fixed inset-0 bg-gradient-to-br from-emerald-50/50 to-violet-50/50 dark:from-slate-950 dark:to-slate-900 -z-10 absolute pointer-events-none"></div>
    ${navHtml}
    ${mobileMenuHtml}
    <main>
        {{CONTENT}}
    </main>
    ${footerHtml}
    ${scriptsHtml}
`;

const pricingContent = `
    <section class="min-h-screen pt-32 pb-20 relative overflow-hidden">
        
        <!-- Ambient Background Splashes -->
        <div class="absolute inset-0 z-0 pointer-events-none">
            <div class="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-violet-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-20 animate-fade-in-down">
                <span class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Merchant Portal
                </span>
                <h1 class="premium-h1 text-5xl md:text-7xl font-heading font-black mb-6">
                    Publish to the <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-500">World.</span>
                </h1>
                <p class="text-xl text-slate-600 dark:text-slate-400">Select an exposure tier and configure your listing. Our network handles the distribution.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <!-- Left: Pricing Tiers -->
                <div class="lg:col-span-5 space-y-6 flex flex-col">
                    <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest pl-2">Select Exposure Tier</h3>
                    
                    <!-- Tier 1 -->
                    <div class="pricing-card cursor-pointer group relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-800 p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" data-value="starter">
                        <div class="indicator absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-slate-950 opacity-0 transition-opacity"></div>
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <h4 class="text-xl font-bold font-heading dark:text-white">Local Hub</h4>
                                <p class="text-sm text-slate-500 font-medium">Standard neighborhood reach</p>
                            </div>
                            <div class="text-right">
                                <span class="text-3xl font-black text-slate-900 dark:text-white">$0</span>
                            </div>
                        </div>
                        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-medium">
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Active for 7 days</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Standard search ranking</li>
                        </ul>
                    </div>

                    <!-- Tier 2 -->
                    <div class="pricing-card cursor-pointer group relative bg-emerald-500/10 border border-emerald-500 p-6 rounded-3xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-[1.02]" data-value="pro">
                        <div class="absolute -top-3 right-6 bg-gradient-to-r from-emerald-500 to-violet-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Recommended</div>
                        <div class="indicator absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-slate-950 transition-opacity"></div>
                        
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <h4 class="text-xl font-bold font-heading text-emerald-700 dark:text-emerald-400">Global Orbit</h4>
                                <p class="text-sm text-emerald-600/70 dark:text-emerald-400/70 font-medium">Maximum algorithmic boost</p>
                            </div>
                            <div class="text-right">
                                <span class="text-3xl font-black text-emerald-700 dark:text-emerald-400">$29</span>
                            </div>
                        </div>
                        <ul class="text-sm text-emerald-800 dark:text-emerald-200 space-y-2 font-medium">
                            <li class="flex items-center gap-2"><i data-lucide="zap" class="w-4 h-4 text-emerald-500"></i> Featured on homepage</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Active for 30 days</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Priority support</li>
                        </ul>
                    </div>

                    <!-- Tier 3 -->
                    <div class="pricing-card cursor-pointer group relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-800 p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02]" data-value="business">
                        <div class="indicator absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-slate-950 opacity-0 transition-opacity"></div>
                        <div class="flex justify-between items-center mb-4">
                            <div>
                                <h4 class="text-xl font-bold font-heading dark:text-white">Syndicate</h4>
                                <p class="text-sm text-slate-500 font-medium">Corporate API volume</p>
                            </div>
                            <div class="text-right">
                                <span class="text-3xl font-black text-slate-900 dark:text-white">$99</span>
                            </div>
                        </div>
                        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2 font-medium">
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Unlimited listings</li>
                            <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Automated inventory sync</li>
                        </ul>
                    </div>

                </div>

                <!-- Right: Configuration Form -->
                <div class="lg:col-span-7">
                    <div class="glass-card p-8 sm:p-12 rounded-[3rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-3xl border border-white/50 dark:border-slate-700/50 shadow-2xl relative">
                        <h3 class="text-2xl font-black font-heading dark:text-white mb-8">Listing Configuration</h3>
                        
                        <form class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Listing Title</label>
                                    <input type="text" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white font-medium" placeholder="E.g. Vintage Camera">
                                </div>
                                <div class="space-y-2">
                                    <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Category</label>
                                    <select class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white font-medium appearance-none">
                                        <option>Technology</option>
                                        <option>Vehicles</option>
                                        <option>Real Estate</option>
                                        <option>Services</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="space-y-2 hidden">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Selected Plan (Hidden)</label>
                                <input type="text" id="plan-select" value="pro" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none dark:text-white" readonly>
                            </div>

                            <div class="space-y-2">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Description</label>
                                <textarea rows="4" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white font-medium resize-none" placeholder="Provide details..."></textarea>
                            </div>

                            <div class="space-y-2">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Media Upload (Drag & Drop)</label>
                                <div class="w-full border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-2xl p-8 text-center transition-colors cursor-pointer group bg-slate-50/50 dark:bg-slate-950/30">
                                    <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <i data-lucide="upload" class="w-6 h-6"></i>
                                    </div>
                                    <p class="font-bold dark:text-white mb-1">Select files to upload</p>
                                    <p class="text-xs text-slate-500">Supports JPG, PNG (Max 5MB)</p>
                                </div>
                            </div>

                            <div class="pt-4">
                                <button type="button" onclick="window.location.href='user_dashboard.html'" class="w-full py-4 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-500 transition-colors shadow-xl shadow-emerald-500/25 active:scale-95 text-lg flex justify-center items-center gap-2 group">
                                    Authorize Transaction <i data-lucide="shield-check" class="w-5 h-5 group-hover:rotate-12 transition-transform"></i>
                                </button>
                                <p class="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">256-bit Encrypted Checkout</p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
`;

const finalPricingHtml = baseHtml
    .replace('{{TITLE}}', 'Post & Price')
    .replace('{{CONTENT}}', pricingContent);

fs.writeFileSync(path.join(dir, 'pricing-booking.html'), finalPricingHtml, 'utf8');

console.log('Successfully generated new pricing-booking.html');
