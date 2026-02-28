const fs = require('fs');

const path = 's:/JanBatch/Classifiedadspro/index.html';
let content = fs.readFileSync(path, 'utf8');

// The replacement content
const newHero = `
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 overflow-hidden flex flex-col items-center justify-center text-center">
        <div class="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
            <span class="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 rounded-full font-bold text-sm mb-6 border border-emerald-200 dark:border-emerald-800 backdrop-blur-md shadow-sm">
                ✨ The Next-Gen Trade Environment
            </span>
            <h1 class="premium-h1 text-6xl md:text-[5rem] mb-6 leading-tight">
                Discover Valuable <br /> <span class="text-emerald-500">Assets</span> Globally
            </h1>
            <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 font-medium max-w-2xl mx-auto">
                Buy, sell, and trade in a secure glassmorphic ecosystem designed for the modern internet.
            </p>
            
            <!-- Giant Search Bar -->
            <div class="glass-card rounded-[2.5rem] p-3 flex flex-col md:flex-row items-center gap-3 max-w-3xl mx-auto mb-16 shadow-2xl relative z-20">
                <div class="flex-1 flex items-center px-4 w-full">
                    <i data-lucide="search" class="w-6 h-6 text-slate-400"></i>
                    <input type="text" placeholder="What are you looking for?" class="w-full bg-transparent border-none focus:ring-0 text-lg md:text-xl text-slate-800 dark:text-white placeholder-slate-400 px-4 py-3 outline-none">
                </div>
                <div class="hidden md:block w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                <div class="flex-1 flex items-center px-4 w-full">
                    <i data-lucide="map-pin" class="w-6 h-6 text-slate-400"></i>
                    <select class="w-full bg-transparent border-none focus:ring-0 text-lg text-slate-600 dark:text-slate-300 px-4 py-3 outline-none cursor-pointer">
                        <option value="all">Everywhere</option>
                        <option value="ny">New York</option>
                        <option value="ldn">London</option>
                        <option value="tok">Tokyo</option>
                    </select>
                </div>
                <button class="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-[2rem] font-bold text-lg transition-transform active:scale-95 shadow-lg shadow-emerald-500/30 whitespace-nowrap">
                    Search Hub
                </button>
            </div>
        </div>

        <!-- Striking Immersive Image -->
        <div class="w-full max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border border-white/40 dark:border-white/10 relative animate-fade-in-up delay-200 group">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" class="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Immersive Tech Showcase">
            <div class="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                <div class="text-left">
                    <span class="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold mb-3 inline-block uppercase tracking-wider">Editor's Pick</span>
                    <h3 class="text-3xl md:text-5xl font-heading font-black text-white drop-shadow-lg">Retro Tech Collectibles</h3>
                </div>
                <button class="w-14 h-14 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-emerald-500 rounded-full flex justify-center items-center transition-all border border-white/40">
                    <i data-lucide="arrow-right" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Modern Category Grid -->
    <section class="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
                <h2 class="premium-h2 text-4xl md:text-5xl mb-4">Discover <span class="text-emerald-500">Domaines</span></h2>
                <p class="text-slate-600 dark:text-slate-400 text-lg max-w-lg">Browse through our meticulously curated categories spanning from digital assets to physical luxury.</p>
            </div>
            <a href="#" class="flex items-center gap-2 font-bold text-emerald-500 hover:text-emerald-600 transition-colors bg-emerald-50 dark:bg-emerald-900/30 px-6 py-3 rounded-full">
                Full Directory <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-emerald-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="cpu" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Hardware & Rigs</h3>
                <p class="text-sm text-slate-500 font-medium">2,400+ units</p>
            </a>
            
            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-violet-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="car" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Future Mobility</h3>
                <p class="text-sm text-slate-500 font-medium">850+ units</p>
            </a>

            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-blue-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="home" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Smart Estates</h3>
                <p class="text-sm text-slate-500 font-medium">1,200+ units</p>
            </a>

            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-rose-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="gem" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Luxury Vintage</h3>
                <p class="text-sm text-slate-500 font-medium">540+ units</p>
            </a>
            
            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-orange-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="briefcase" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Contracts & Gigs</h3>
                <p class="text-sm text-slate-500 font-medium">3,100+ units</p>
            </a>

            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-cyan-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="palette" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Digital Art</h3>
                <p class="text-sm text-slate-500 font-medium">9,000+ units</p>
            </a>

            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-yellow-500 transition-all hover:-translate-y-2">
                <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i data-lucide="music" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Audio Gear</h3>
                <p class="text-sm text-slate-500 font-medium">420+ units</p>
            </a>

            <a href="#" class="group glass-card rounded-[2rem] p-6 flex flex-col items-center text-center hover:border-emerald-500 transition-all hover:-translate-y-2 bg-emerald-50 dark:bg-emerald-900/30 border-none">
                <div class="w-16 h-16 bg-white dark:bg-emerald-800 text-emerald-600 dark:text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                    <i data-lucide="more-horizontal" class="w-8 h-8"></i>
                </div>
                <h3 class="font-heading font-bold text-lg dark:text-white mb-1">Explore All</h3>
                <p class="text-sm text-emerald-500 dark:text-emerald-400 font-medium">Full Directory</p>
            </a>
        </div>
    </section>

    <!-- Structural Feature: Asymmetric Split Grid -->
    <section class="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <!-- Large Feature Block -->
                <div class="lg:col-span-7 relative group perspective-1000">
                    <div class="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-violet-500/20 rounded-[3rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 blur-xl"></div>
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" class="relative rounded-[3rem] w-full h-[500px] object-cover shadow-2xl border border-white/50 dark:border-slate-700/50 transform transition-transform duration-700 group-hover:scale-[1.01]" alt="Abstract Graphic">
                    <div class="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl border-white/40 shadow-xl">
                        <div class="flex items-center gap-4 mb-2">
                            <span class="p-2 bg-violet-500 rounded-xl text-white"><i data-lucide="shield-check" class="w-5 h-5"></i></span>
                            <h4 class="text-xl font-bold dark:text-white font-heading">Zero-Fraud Architecture</h4>
                        </div>
                        <p class="text-slate-600 dark:text-slate-300 font-medium">Our immutable ledger and AI security models ensure that every transaction is verified before it completes.</p>
                    </div>
                </div>

                <!-- Text Content & Secondary Block -->
                <div class="lg:col-span-5 space-y-12 lg:pl-4">
                    <div>
                        <span class="text-violet-500 font-bold uppercase tracking-widest text-sm mb-4 block">Engineered for Trust</span>
                        <h3 class="text-4xl md:text-5xl font-black mb-6 font-heading tracking-tight leading-tight dark:text-white">Seamless Dynamics.</h3>
                        <p class="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">
                            AdNova strips away the noise, offering a fluid interface where finding, negotiating, and closing deals feels incredibly intuitive. Stop settling for legacy boards.
                        </p>
                        <a href="about.html" class="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-violet-500 border-b-2 border-violet-500 pb-1 transition-colors">
                            Read Our Manifesto <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </a>
                    </div>

                    <!-- Small Feature Card -->
                    <div class="glass-card rounded-[2rem] p-6 hover:-translate-y-1 transition-transform cursor-default border-slate-200 dark:border-slate-700">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-xl flex justify-center items-center">
                                <i data-lucide="zap" class="w-6 h-6"></i>
                            </div>
                            <h4 class="text-lg font-bold dark:text-white font-heading">Instant Deployment</h4>
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">List an asset in under 30 seconds using our automated visual AI tagging system.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const startIndex = content.indexOf('<!-- Hero Section -->');
const endIndex = content.indexOf('<!-- Marketplace Mega-Grid (Scrollable Content Expansion) -->');

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);
    fs.writeFileSync(path, before + newHero + '\n    ' + after, 'utf8');
    console.log('index.html updated successfully.');
} else {
    console.error('Could not find markers. startIndex:', startIndex, 'endIndex:', endIndex);
}
