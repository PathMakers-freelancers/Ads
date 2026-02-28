const fs = require('fs');

const path = 's:/JanBatch/Classifiedadspro/index.html';
let content = fs.readFileSync(path, 'utf8');

const newBottomHtml = `
    <!-- Marketplace Mega-Grid (Scrollable Content Expansion) -->
    <section class="max-w-7xl mx-auto px-4 mb-32 pt-12 relative z-10">
        <div class="flex items-end justify-between mb-8">
            <h2 class="premium-h2 text-3xl md:text-4xl">E X P L O R E &nbsp; M O R E</h2>
            <div class="hidden md:flex gap-2">
                <button class="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><i data-lucide="chevron-left" class="w-5 h-5"></i></button>
                <button class="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><i data-lucide="chevron-right" class="w-5 h-5"></i></button>
            </div>
        </div>

        <!-- Quick Category Chips (Horizontal Scroll) -->
        <div class="flex space-x-4 overflow-x-auto hide-scrollbar pb-6 mb-8">
            <button class="tab-btn px-6 py-2 rounded-full font-bold bg-emerald-500 text-white whitespace-nowrap transition-colors shadow-lg shadow-emerald-500/20" data-tab-target="#tab-all">All Categories</button>
            <button class="tab-btn px-6 py-2 rounded-full font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-white whitespace-nowrap transition-colors border border-slate-100 dark:border-slate-700 hover:border-emerald-500" data-tab-target="#tab-tech">Tech & Gadgets</button>
            <button class="tab-btn px-6 py-2 rounded-full font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-white whitespace-nowrap transition-colors border border-slate-100 dark:border-slate-700 hover:border-emerald-500" data-tab-target="#tab-auto">Motors</button>
            <button class="tab-btn px-6 py-2 rounded-full font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-white whitespace-nowrap transition-colors border border-slate-100 dark:border-slate-700 hover:border-emerald-500" data-tab-target="#tab-fashion">Fashion</button>
            <button class="tab-btn px-6 py-2 rounded-full font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-white whitespace-nowrap transition-colors border border-slate-100 dark:border-slate-700 hover:border-emerald-500" data-tab-target="#tab-home">Home & Garden</button>
            <button class="tab-btn px-6 py-2 rounded-full font-bold bg-white dark:bg-slate-800 text-slate-600 dark:text-white whitespace-nowrap transition-colors border border-slate-100 dark:border-slate-700 hover:border-emerald-500" data-tab-target="#tab-jobs">Services & Jobs</button>
        </div>

        <!-- Tab Contents -->
        <div id="tab-all" class="tab-content grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <!-- Items -->
            <div class="glass-card p-4 rounded-3xl hover:-translate-y-2 transition-transform group cursor-pointer border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <div class="overflow-hidden rounded-2xl mb-4 relative">
                    <img src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=600&auto=format&fit=crop" class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute top-2 right-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                        <i data-lucide="heart" class="w-4 h-4"></i>
                    </div>
                </div>
                <h4 class="font-bold dark:text-white text-md truncate font-heading tracking-tight">Gaming Console</h4>
                <div class="flex justify-between items-center mt-2">
                    <p class="text-emerald-500 font-black text-lg">$299</p>
                    <span class="text-xs font-bold text-slate-400">Used</span>
                </div>
            </div>
            
            <div class="glass-card p-4 rounded-3xl hover:-translate-y-2 transition-transform group cursor-pointer border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <div class="overflow-hidden rounded-2xl mb-4 relative">
                    <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop" class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <h4 class="font-bold dark:text-white text-md truncate font-heading tracking-tight">Vintage Watch</h4>
                <div class="flex justify-between items-center mt-2">
                    <p class="text-emerald-500 font-black text-lg">$120</p>
                    <span class="text-xs font-bold text-slate-400">Mint</span>
                </div>
            </div>

            <div class="glass-card p-4 rounded-3xl hover:-translate-y-2 transition-transform group cursor-pointer border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <div class="overflow-hidden rounded-2xl mb-4 relative">
                    <img src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=600&auto=format&fit=crop" class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <h4 class="font-bold dark:text-white text-md truncate font-heading tracking-tight">Mountain Bike</h4>
                <div class="flex justify-between items-center mt-2">
                    <p class="text-emerald-500 font-black text-lg">$450</p>
                    <span class="text-xs font-bold text-slate-400">Good</span>
                </div>
            </div>

            <div class="glass-card p-4 rounded-3xl hover:-translate-y-2 transition-transform group cursor-pointer border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <div class="overflow-hidden rounded-2xl mb-4 relative">
                    <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop" class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <h4 class="font-bold dark:text-white text-md truncate font-heading tracking-tight">Designer Lamp</h4>
                <div class="flex justify-between items-center mt-2">
                    <p class="text-emerald-500 font-black text-lg">$89</p>
                    <span class="text-xs font-bold text-slate-400">New</span>
                </div>
            </div>

            <div class="glass-card p-4 rounded-3xl hover:-translate-y-2 transition-transform group cursor-pointer border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <div class="overflow-hidden rounded-2xl mb-4 relative">
                    <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop" class="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500">
                </div>
                <h4 class="font-bold dark:text-white text-md truncate font-heading tracking-tight">Leather Bag</h4>
                <div class="flex justify-between items-center mt-2">
                    <p class="text-emerald-500 font-black text-lg">$150</p>
                    <span class="text-xs font-bold text-slate-400">Used</span>
                </div>
            </div>
        </div>

        <!-- Filler Tab Contents -->
        <div id="tab-tech" class="tab-content hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"></div>
        <div id="tab-auto" class="tab-content hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"></div>
        <div id="tab-fashion" class="tab-content hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"></div>
        <div id="tab-home" class="tab-content hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"></div>
        <div id="tab-jobs" class="tab-content hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"></div>

    </section>

    <!-- Curator's Choice Section -->
    <section class="py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-violet-900 dark:bg-slate-950"></div>
        <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                <span class="text-emerald-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Hand-picked by our experts</span>
                <h2 class="text-4xl md:text-5xl font-black text-white font-heading tracking-tight">CURATOR'S <span class="text-emerald-400">CHOICE</span></h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Item 1 -->
                <div class="group glass-card rounded-[2.5rem] overflow-hidden border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-2 bg-white/5 backdrop-blur-xl">
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1620052349788-b22031a5eb23?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white font-black px-4 py-2 rounded-full text-sm border border-white/20">$299</div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-white mb-2 font-heading tracking-tight">Cyberpunk Headset</h3>
                        <p class="text-slate-300 text-sm mb-6 leading-relaxed">Mint condition, barely used. Completely immersive audio experience. Box included.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-emerald-400"></i> New York, NY
                            </div>
                            <button class="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center text-white hover:bg-emerald-500 transition-colors">
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 2 -->
                <div class="group glass-card rounded-[2.5rem] overflow-hidden border-white/10 hover:border-violet-500/50 transition-all hover:-translate-y-2 bg-white/5 backdrop-blur-xl">
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white font-black px-4 py-2 rounded-full text-sm border border-white/20">$150</div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-white mb-2 font-heading tracking-tight">Vintage Polaroid</h3>
                        <p class="text-slate-300 text-sm mb-6 leading-relaxed">Classic piece for collectors. Working condition unknown, preserved flawlessly.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-violet-400"></i> Austin, TX
                            </div>
                            <button class="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center text-white hover:bg-violet-500 transition-colors">
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 3 -->
                <div class="group glass-card rounded-[2.5rem] overflow-hidden border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-2 bg-white/5 backdrop-blur-xl">
                    <div class="aspect-[4/3] overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white font-black px-4 py-2 rounded-full text-sm border border-white/20">$85</div>
                    </div>
                    <div class="p-8">
                        <h3 class="text-2xl font-bold text-white mb-2 font-heading tracking-tight">Neon Sign</h3>
                        <p class="text-slate-300 text-sm mb-6 leading-relaxed">Custom made bright neon sign 'Open'. Adds aesthetic to any modern workspace.</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-emerald-400"></i> Los Angeles, CA
                            </div>
                            <button class="w-10 h-10 rounded-full bg-white/10 flex justify-center items-center text-white hover:bg-emerald-500 transition-colors">
                                <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-16 text-center">
                <button class="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all font-heading tracking-wide">
                    View Complete Gallery
                </button>
            </div>
        </div>
    </section>

    <!-- Testimonials / Verified Perspectives -->
    <section class="py-24 bg-slate-50 dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="premium-h2 text-4xl md:text-5xl mb-16 text-center">VERIFIED <span class="text-violet-500">PERSPECTIVES</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="glass-card bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl relative mt-8 hover:-translate-y-2 transition-transform">
                    <i data-lucide="quote" class="absolute -top-6 -left-2 w-16 h-16 text-violet-100 dark:text-violet-900/30"></i>
                    <p class="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10 text-lg">"AdNova completely strips away the friction of finding digital assets. I acquired a vintage rig within 20 minutes of logging on. Unprecedented speed."</p>
                    <div class="flex items-center space-x-4">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" class="w-14 h-14 rounded-[1rem] object-cover">
                        <div>
                            <h4 class="font-bold text-md dark:text-white font-heading">Sarah Jenkins</h4>
                            <p class="text-violet-500 text-sm font-bold">Verified Buyer</p>
                        </div>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="glass-card bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl relative hover:-translate-y-2 transition-transform">
                    <i data-lucide="quote" class="absolute -top-6 -left-2 w-16 h-16 text-emerald-100 dark:text-emerald-900/30"></i>
                    <p class="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10 text-lg">"The zero-fraud architecture isn't just a buzzword. I move high-value domains and the security protocols here give me complete peace of mind."</p>
                    <div class="flex items-center space-x-4">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" class="w-14 h-14 rounded-[1rem] object-cover">
                        <div>
                            <h4 class="font-bold text-md dark:text-white font-heading">Mike Ross</h4>
                            <p class="text-emerald-500 text-sm font-bold">Power Seller</p>
                        </div>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="glass-card bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-xl relative mt-8 hover:-translate-y-2 transition-transform">
                    <i data-lucide="quote" class="absolute -top-6 -left-2 w-16 h-16 text-emerald-100 dark:text-emerald-900/30"></i>
                    <p class="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10 text-lg">"Finally, a classifieds ecosystem that doesn't feel like a relic from 2005. The glassmorphic aesthetic paired with real-time bidding is exactly what I needed."</p>
                    <div class="flex items-center space-x-4">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" class="w-14 h-14 rounded-[1rem] object-cover">
                        <div>
                            <h4 class="font-bold text-md dark:text-white font-heading">Jessica Pearson</h4>
                            <p class="text-emerald-500 text-sm font-bold">Collector</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 bg-slate-900 text-white text-center px-4 overflow-hidden relative">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-violet-900/40 to-slate-900"></div>
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover mix-blend-overlay"></div>
        <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div class="w-20 h-20 bg-emerald-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/30">
                <i data-lucide="rocket" class="w-10 h-10 text-emerald-400"></i>
            </div>
            <h2 class="text-5xl md:text-7xl font-black mb-6 font-heading tracking-tighter">ENTER THE <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">NEXUS</span></h2>
            <p class="text-xl text-slate-300 mb-12 max-w-2xl font-medium">Join thousands of verified traders inside the most advanced classifieds ecosystem built for the modern era.</p>
            <button class="px-12 py-5 bg-white text-slate-900 rounded-full text-xl font-bold shadow-[0_0_40px_rgba(52,211,153,0.3)] hover:scale-105 active:scale-95 transition-all font-heading">
                Launch Dashboard
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer-gradient text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                <!-- Brand -->
                <div class="space-y-6 animate-fade-in-up brand-glow cursor-default">
                    <div class="flex items-center gap-3">
                        <div class="logo-bg bg-emerald-500 p-3 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20">
                            <span class="text-white font-black text-2xl font-heading">A</span>
                        </div>
                        <span class="text-3xl font-black text-white tracking-tight font-heading">AdNova</span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                        The ultimate intelligent marketplace. Trade secure, fast, and seamlessly in our glassmorphic ecosystem.
                    </p>
                </div>

                <!-- Quick Links -->
                <div class="animate-fade-in-up delay-200">
                    <h4 class="text-white font-bold mb-6 text-lg relative inline-block font-heading tracking-wide">Directory <div class="absolute -bottom-2 left-0 w-1/3 h-1 bg-emerald-500 rounded-full"></div></h4>
                    <ul class="space-y-4 text-sm font-medium text-slate-400">
                        <li><a href="index.html" class="hover:text-emerald-400 transition-colors block">Discovery Hub</a></li>
                        <li><a href="about.html" class="hover:text-emerald-400 transition-colors block">Our Manifesto</a></li>
                        <li><a href="services.html" class="hover:text-emerald-400 transition-colors block">Platform Solutions</a></li>
                        <li><a href="contact.html" class="hover:text-emerald-400 transition-colors block">Support Nodes</a></li>
                    </ul>
                </div>

                <!-- Account -->
                <div class="animate-fade-in-up delay-400">
                    <h4 class="text-white font-bold mb-6 text-lg relative inline-block font-heading tracking-wide">Terminal <div class="absolute -bottom-2 left-0 w-1/3 h-1 bg-violet-500 rounded-full"></div></h4>
                    <ul class="space-y-4 text-sm font-medium text-slate-400">
                        <li><a href="user_dashboard.html" class="hover:text-violet-400 transition-colors block group flex items-center gap-2"><i data-lucide="layout-dashboard" class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all"></i> Client Dashboard</a></li>
                        <li><a href="admin_dashboard.html" class="hover:text-violet-400 transition-colors block group flex items-center gap-2"><i data-lucide="shield" class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all"></i> Admin Controls</a></li>
                        <li><a href="login.html" class="hover:text-violet-400 transition-colors block group flex items-center gap-2"><i data-lucide="log-in" class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all"></i> Authentication</a></li>
                        <li><a href="#" class="hover:text-violet-400 transition-colors block group flex items-center gap-2"><i data-lucide="file-text" class="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all"></i> Legal Framework</a></li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div class="animate-fade-in-up delay-600">
                    <h4 class="text-white font-bold mb-6 text-lg relative inline-block font-heading tracking-wide">Ping List <div class="absolute -bottom-2 left-0 w-1/3 h-1 bg-emerald-500 rounded-full"></div></h4>
                    <p class="text-slate-400 text-sm mb-4 font-medium">Receive signal bursts regarding high-value asset drops.</p>
                    <div class="relative group">
                        <input type="email" placeholder="Transmit address"
                            class="bg-slate-800 border border-slate-700 text-white text-sm rounded-xl w-full pl-4 pr-16 py-3.5 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-slate-500 group-hover:bg-slate-700/50">
                        <button class="absolute right-1 top-1 bottom-1 bg-emerald-500 text-slate-900 px-4 rounded-lg font-black hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-lg">TX</button>
                    </div>
                </div>

            </div>

            <!-- Footer Bottom -->
            <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm font-medium">
                <p class="mb-4 md:mb-0 text-slate-500">&copy; <script>document.write(new Date().getFullYear())</script> AdNova Systems. All rights reserved.</p>
                <div class="flex space-x-6">
                    <a href="#" class="text-slate-500 hover:text-white transition-colors"><i data-lucide="facebook" class="w-5 h-5"></i></a>
                    <a href="#" class="text-slate-500 hover:text-white transition-colors"><i data-lucide="twitter" class="w-5 h-5"></i></a>
                    <a href="#" class="text-slate-500 hover:text-white transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                    <a href="#" class="text-slate-500 hover:text-white transition-colors"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Back to top button -->
    <button id="backToTop" class="fixed bottom-8 right-8 bg-emerald-500 text-slate-900 p-3 rounded-full shadow-2xl opacity-0 invisible transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-400 active:scale-95 z-50">
        <i data-lucide="arrow-up" class="w-6 h-6"></i>
    </button>

    <script>
        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Sticky Header & Back To Top
        const header = document.getElementById('mainHeader');
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'bg-white/90', 'dark:bg-slate-900/90', 'shadow-sm', 'backdrop-blur-md');
                header.classList.remove('py-4', 'bg-transparent');
            } else {
                header.classList.remove('py-2', 'bg-white/90', 'dark:bg-slate-900/90', 'shadow-sm', 'backdrop-blur-md');
                header.classList.add('py-4', 'bg-transparent');
            }

            if (window.scrollY > 300) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
            } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
            }
        });

        // Back to top click
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Accordion functionality
        const accordionTriggers = document.querySelectorAll('.accordion-trigger');
        accordionTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const content = trigger.nextElementSibling;
                const icon = trigger.querySelector('[data-lucide="chevron-down"], [data-lucide="plus"]');
                
                content.classList.toggle('hidden');
                
                if (icon) {
                    icon.classList.toggle('rotate-180');
                    if(icon.getAttribute('data-lucide') === 'plus') {
                         icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(45deg)';
                    }
                }
            });
        });

        // Simple Tab functionality
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active classes
                tabBtns.forEach(b => {
                    b.classList.remove('bg-emerald-500', 'text-white', 'shadow-lg');
                    b.classList.add('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-white', 'border', 'border-slate-100', 'dark:border-slate-700');
                });
                tabContents.forEach(c => c.classList.add('hidden'));

                // Add active to clicked
                btn.classList.add('bg-emerald-500', 'text-white', 'shadow-lg');
                btn.classList.remove('bg-white', 'dark:bg-slate-800', 'text-slate-600', 'dark:text-white', 'border', 'border-slate-100', 'dark:border-slate-700');
                
                const targetId = btn.getAttribute('data-tab-target');
                document.querySelector(targetId).classList.remove('hidden');
            });
        });
    </script>
</body>
</html>
`;

const startIndex = content.indexOf('<!-- Marketplace Mega-Grid (Scrollable Content Expansion) -->');

if (startIndex !== -1) {
    const before = content.substring(0, startIndex);
    fs.writeFileSync(path, before + newBottomHtml, 'utf8');
    console.log('index.html updated successfully (bottom part).');
} else {
    console.error('Could not find marker.');
}
