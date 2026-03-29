const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

const indexHtmlPath = path.join(dir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Extract common components using regex or indexOf
const headStart = indexHtml.indexOf('<head>');
const headEnd = indexHtml.indexOf('</head>') + 7;
const headHtml = indexHtml.substring(headStart, headEnd).replace('<title>AdNova Nexus</title>', '<title>AdNova | {{TITLE}}</title>');

const navStart = indexHtml.indexOf('<!-- Navbar -->');
const navEnd = indexHtml.indexOf('</nav>') + 6;
const navHtml = indexHtml.substring(navStart, navEnd);

const mobileMenuStart = indexHtml.indexOf('<!-- Mobile Menu Overlay -->');
const mobileMenuEnd = indexHtml.indexOf('<!-- Hero Section -->');
const mobileMenuHtml = indexHtml.substring(mobileMenuStart, mobileMenuEnd);

const footerStart = indexHtml.indexOf('<!-- Footer -->');
const footerEnd = indexHtml.indexOf('</footer>') + 9;
const footerHtml = indexHtml.substring(footerStart, footerEnd);

// Scripts at bottom
const scriptsHtml = `
    <!-- Back to top button -->
    <button id="backToTop" class="fixed bottom-8 right-8 bg-emerald-500 text-slate-900 p-3 rounded-full shadow-2xl opacity-0 invisible transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-400 active:scale-95 z-50">
        <i data-lucide="arrow-up" class="w-6 h-6"></i>
    </button>
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
<body class="bg-slate-50 dark:bg-slate-950 transition-colors duration-500 text-slate-900 dark:text-slate-100">
    <div class="fixed inset-0 bg-gradient-to-br from-slate-50 to-emerald-50/20 dark:from-slate-950 dark:to-violet-950/20 -z-10 absolute pointer-events-none"></div>
    ${navHtml}
    ${mobileMenuHtml}
    <main>
        {{CONTENT}}
    </main>
    ${footerHtml}
    ${scriptsHtml}
`;

// ==========================================
// ABOUT.HTML CONTENT
// ==========================================
const aboutContent = `
    <!-- Premium About Hero -->
    <section class="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <div class="text-center max-w-4xl mx-auto mb-16">
            <span class="inline-block py-2 px-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.2em] uppercase text-xs mb-8 border border-emerald-200 dark:border-emerald-800 shadow-sm">
                The AdNova Philosophy
            </span>
            <h1 class="premium-h1 text-5xl md:text-7xl font-heading tracking-tighter mb-8 leading-[1.1]">
                Redefining the <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-500">Value of Exchange.</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                We believe that every item has a story, and every service has a purpose. AdNova was built to be the premium layer connecting quality people with quality goods, securely and beautifully.
            </p>
        </div>
        
        <!-- Massive Hero Image -->
        <div class="relative w-full h-[60vh] rounded-[3rem] overflow-hidden shadow-2xl group">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="AdNova Team">
            <div class="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-12">
                <div class="max-w-2xl text-left relative z-20">
                    <h3 class="text-white text-3xl font-heading font-black mb-4" style="color: white !important;">Founded on Trust. Built for Speed.</h3>
                    <p class="text-white text-lg" style="color: white !important;">Our headquarters in San Francisco acts as the nexus for our global operations, monitoring millions of secure transactions daily.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- The Mission -->
    <section class="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 relative z-10">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="premium-h2 text-4xl md:text-5xl mb-8">Our Mission</h2>
                    <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">To create the world's most trusted, aesthetically refined, and efficient marketplace architecture.</p>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">For too long, classified ads platforms have been riddled with friction, poor design, and lack of trust. We engineered AdNova from the ground up to eradicate these pain points, employing state-of-the-art verification, a zero-latency interface, and a community-first support model.</p>
                    
                    <div class="grid grid-cols-2 gap-8">
                        <div>
                            <span class="block text-4xl font-black text-emerald-500 mb-2 font-heading tracking-tighter">0%</span>
                            <span class="text-sm font-bold text-slate-500 uppercase tracking-widest">Fraud Tolerance</span>
                        </div>
                        <div>
                            <span class="block text-4xl font-black text-violet-500 mb-2 font-heading tracking-tighter">150+</span>
                            <span class="text-sm font-bold text-slate-500 uppercase tracking-widest">Countries Served</span>
                        </div>
                    </div>
                </div>
                <!-- Glass Card Stack -->
                <div class="relative">
                    <div class="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-violet-400/20 blur-3xl rounded-full"></div>
                    <div class="glass-card p-8 rounded-[2rem] border border-white/40 dark:border-slate-700 shadow-2xl relative z-10 backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 translate-x-4 -translate-y-4">
                        <i data-lucide="shield" class="w-10 h-10 text-emerald-500 mb-6"></i>
                        <h4 class="text-xl font-bold mb-3 dark:text-white font-heading">Complete Security</h4>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">End-to-end encryption on all communications and bank-grade security for escrow transactions.</p>
                    </div>
                    <div class="glass-card p-8 rounded-[2rem] border border-white/40 dark:border-slate-700 shadow-2xl relative z-20 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 -translate-x-4 translate-y-4">
                        <i data-lucide="zap" class="w-10 h-10 text-violet-500 mb-6"></i>
                        <h4 class="text-xl font-bold mb-3 dark:text-white font-heading">Zero Latency</h4>
                        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">Our globally distributed edge network ensures that your items load instantly, no matter where you are.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership / Team -->
    <section class="py-32 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-20">
                <h2 class="premium-h2 text-4xl md:text-5xl mb-6">The Architects</h2>
                <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Meet the visionaries building the future of digital exchange.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <!-- Team 1 -->
                <div class="group">
                    <div class="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative shadow-lg">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <div class="flex gap-4">
                                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold dark:text-white font-heading">Sarah Kensington</h3>
                    <p class="text-emerald-500 font-bold text-sm tracking-widest uppercase mt-1">Founding CEO</p>
                </div>
                <!-- Team 2 -->
                <div class="group">
                    <div class="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative shadow-lg">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <div class="flex gap-4">
                                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-violet-500 transition-colors"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-violet-500 transition-colors"><i data-lucide="github" class="w-4 h-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold dark:text-white font-heading">David Chen</h3>
                    <p class="text-violet-500 font-bold text-sm tracking-widest uppercase mt-1">Chief Technology Officer</p>
                </div>
                <!-- Team 3 -->
                <div class="group">
                    <div class="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative shadow-lg">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <div class="flex gap-4">
                                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
                                <a href="#" class="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-2xl font-bold dark:text-white font-heading">Maya Patel</h3>
                    <p class="text-emerald-500 font-bold text-sm tracking-widest uppercase mt-1">Head of Trust & Safety</p>
                </div>
            </div>
        </div>
    </section>
`;

// ==========================================
// SERVICES.HTML CONTENT
// ==========================================
const servicesContent = `
    <!-- Premium Services Hero -->
    <section class="relative pt-32 pb-24 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"></div>
            <!-- Decorative blur -->
            <div class="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 class="premium-h1 text-5xl md:text-7xl font-heading tracking-tighter mb-6">
                Premium Solutions for <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-500">Maximum Visibility.</span>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-300 font-light max-w-2xl mx-auto mb-12">Whether you're clearing out your garage or running a high-volume dealership, our platform scales to meet your exact needs.</p>
            
            <div class="flex justify-center gap-4">
                <a href="pricing-booking.html" class="px-8 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/25">View Pricing</a>
                <a href="#solutions" class="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">Explore Features</a>
            </div>
        </div>
    </section>

    <!-- The Services Grid -->
    <section id="solutions" class="py-24 relative z-10">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Service 1 -->
                <div class="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl group">
                    <div class="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                        <i data-lucide="zap" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 dark:text-white font-heading">Instant Boost</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Push your listing to the top of category feeds for 24 hours. Perfect for quick sales and time-sensitive offers.</p>
                    <ul class="space-y-3 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Top-of-page placement</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Distinctive "Boosted" tag</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> Analytics tracking</li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl group border-t-4 border-t-violet-500 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl"></div>
                    <div class="w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-8 group-hover:scale-110 transition-transform shadow-sm relative z-10">
                        <i data-lucide="shield-check" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 dark:text-white font-heading relative z-10">Verified Seller Status</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed relative z-10">Build ultimate trust with buyers. Requires comprehensive background checks and a history of successful trades.</p>
                    <ul class="space-y-3 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300 relative z-10">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-violet-500"></i> Blue checkmark badge</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-violet-500"></i> Escrow payment unlocking</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-violet-500"></i> Priority dispute resolution</li>
                    </ul>
                </div>

                <!-- Service 3 -->
                <div class="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl group">
                    <div class="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                        <i data-lucide="bar-chart-2" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 dark:text-white font-heading">Pro Dashboard</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">For businesses managing multiple listings. Access deep analytics, bulk uploading, and CRM features.</p>
                    <ul class="space-y-3 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> CSV Inventory sync</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> Team member access</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> Advanced demographic data</li>
                    </ul>
                </div>

                <!-- Service 4 -->
                <div class="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl group">
                    <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                        <i data-lucide="camera" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 dark:text-white font-heading">Media Plus Add-on</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Visuals sell. Equip your listings with immersive media capabilities to capture buyer attention instantly.</p>
                    <ul class="space-y-3 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-500"></i> 4K Video uploads</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-500"></i> 360-degree item viewer</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-amber-500"></i> Up to 50 hi-res photos</li>
                    </ul>
                </div>

                <!-- Service 5 -->
                <div class="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl group">
                    <div class="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400 mb-8 group-hover:scale-110 transition-transform shadow-sm">
                        <i data-lucide="megaphone" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 dark:text-white font-heading">Homepage Feature</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Secure a spot in the prestigious "Curator's Choice" or "Trending" carousel right on the main homepage.</p>
                    <ul class="space-y-3 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-pink-500"></i> Maximum eyeballs guaranteed</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-pink-500"></i> Elite visual framing</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-pink-500"></i> Featured newsletter inclusion</li>
                    </ul>
                </div>

                <!-- Service 6 -->
                <div class="glass-card p-10 rounded-[2.5rem] hover:-translate-y-2 transition-transform bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl group border-solid border-2 border-transparent hover:border-emerald-400">
                    <div class="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-sm relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-violet-500 opacity-50 mix-blend-overlay"></div>
                        <i data-lucide="bot" class="w-8 h-8 relative z-10"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 dark:text-white font-heading">AI Listing Generator</h3>
                    <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">Struggling with copywriting? Let our advanced AI write highly-converting, SEO-optimized descriptions based on just a few photos.</p>
                    <ul class="space-y-3 mb-8 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-slate-800 dark:text-slate-200"></i> Auto-generated titles & tags</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-slate-800 dark:text-slate-200"></i> Auto image enhancement</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-slate-800 dark:text-slate-200"></i> Smart price estimation</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    <!-- Global Reach Section -->
    <section class="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 class="text-4xl md:text-5xl font-black mb-8 font-heading">The Infrastructure of Trade</h2>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto mb-16 font-light">Join the network powering high-volume sellers and niche collectors alike.</p>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                <!-- Stat 1 -->
                <div class="p-6 border border-slate-800 rounded-3xl bg-slate-800/30 backdrop-blur-sm">
                    <i data-lucide="users" class="w-10 h-10 text-emerald-400 mx-auto mb-4"></i>
                    <h3 class="text-3xl font-black mb-2">50k+</h3>
                    <p class="text-sm font-bold tracking-widest text-slate-500 uppercase">Pro Sellers</p>
                </div>
                <!-- Stat 2 -->
                <div class="p-6 border border-slate-800 rounded-3xl bg-slate-800/30 backdrop-blur-sm">
                    <i data-lucide="activity" class="w-10 h-10 text-violet-400 mx-auto mb-4"></i>
                    <h3 class="text-3xl font-black mb-2">1.2M</h3>
                    <p class="text-sm font-bold tracking-widest text-slate-500 uppercase">Daily Views</p>
                </div>
                <!-- Stat 3 -->
                <div class="p-6 border border-slate-800 rounded-3xl bg-slate-800/30 backdrop-blur-sm">
                    <i data-lucide="zap" class="w-10 h-10 text-emerald-400 mx-auto mb-4"></i>
                    <h3 class="text-3xl font-black mb-2">&lt;2s</h3>
                    <p class="text-sm font-bold tracking-widest text-slate-500 uppercase">Avg Sale Query</p>
                </div>
                <!-- Stat 4 -->
                <div class="p-6 border border-slate-800 rounded-3xl bg-slate-800/30 backdrop-blur-sm">
                    <i data-lucide="globe" class="w-10 h-10 text-violet-400 mx-auto mb-4"></i>
                    <h3 class="text-3xl font-black mb-2">99.9%</h3>
                    <p class="text-sm font-bold tracking-widest text-slate-500 uppercase">Uptime</p>
                </div>
            </div>
            
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold mb-4">
                <div class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div> Systems Operational
            </div>
        </div>
    </section>
`;

// Replace placeholders
const finalAboutHtml = baseHtml
    .replace('{{TITLE}}', 'Our Story')
    .replace('{{CONTENT}}', aboutContent);

const finalServicesHtml = baseHtml
    .replace('{{TITLE}}', 'Premium Solutions')
    .replace('{{CONTENT}}', servicesContent);

// Write to files
fs.writeFileSync(path.join(dir, 'about.html'), finalAboutHtml, 'utf8');
fs.writeFileSync(path.join(dir, 'services.html'), finalServicesHtml, 'utf8');

console.log('Successfully generated new about.html and services.html');
