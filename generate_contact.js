const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

const indexHtmlPath = path.join(dir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const headStart = indexHtml.indexOf('<head>');
const headEnd = indexHtml.indexOf('</head>') + 7;
const headHtml = indexHtml.substring(headStart, headEnd).replace('<title>AdNova Nexus</title>', '<title>AdNova | Contact</title>');

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
    <div class="fixed inset-0 bg-gradient-to-br from-emerald-50/50 to-violet-50/50 dark:from-slate-950 dark:to-slate-900 -z-10 absolute pointer-events-none"></div>
    ${navHtml}
    ${mobileMenuHtml}
    <main>
        {{CONTENT}}
    </main>
    ${footerHtml}
    ${scriptsHtml}
`;

const contactContent = `
    <!-- Cinematic Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-emerald-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
            <div class="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-violet-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 class="premium-h1 text-5xl md:text-8xl font-heading tracking-tighter mb-6 relative inline-block">
                Start the <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-violet-500 relative z-10">Conversation.</span>
                <div class="absolute bottom-4 left-0 w-full h-4 bg-emerald-400/20 -z-10 -rotate-2"></div>
            </h1>
            <p class="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto mt-6">Our global teams are stationed around the clock to ensure your marketplace experience is flawless and secure.</p>
        </div>
    </section>

    <!-- Split Layout: Connect & Map -->
    <section class="max-w-7xl mx-auto px-4 pb-32 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Contact Form (Glass) -->
            <div class="lg:col-span-5 relative">
                <div class="glass-card p-8 md:p-10 rounded-[2.5rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 shadow-2xl relative z-10">
                    <h3 class="text-2xl font-black mb-8 dark:text-white font-heading">Send a Transmission</h3>
                    <form class="space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                                <input type="text" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="Jane">
                            </div>
                            <div class="space-y-2">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                                <input type="text" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="Doe">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                            <input type="email" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white" placeholder="jane@example.com">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                            <select class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white appearance-none">
                                <option>General Inquiry</option>
                                <option>Billing Support</option>
                                <option>Trust & Safety Report</option>
                                <option>Business Partnership</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                            <textarea rows="4" class="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all dark:text-white resize-none" placeholder="How can we assist you?"></textarea>
                        </div>
                        <button type="button" class="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 group">
                            <span>Process Request</span>
                            <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </form>
                </div>
                <!-- Decorative element behind form -->
                <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 -z-10 rounded-[2rem]"></div>
            </div>
            
            <!-- Map & Locations -->
            <div class="lg:col-span-7 flex flex-col gap-8">
                <!-- Massive Map Card -->
                <div class="flex-1 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden relative shadow-xl group">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" width="100%" height="100%" style="border:0; min-height: 400px; filter: grayscale(100%) contrast(1.2) opacity(0.8);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="transition-all duration-700 group-hover:filter-none"></iframe>
                    
                    <div class="absolute bottom-6 left-6 right-6">
                        <div class="bg-white/90 dark:bg-slate-950/90 backdrop-blur-md p-6 rounded-2xl border border-white dark:border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600">
                                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold dark:text-white">Global Headquarters</h4>
                                    <p class="text-sm text-slate-500">123 Nexus Way, San Francisco, CA</p>
                                </div>
                            </div>
                            <div class="text-right hidden sm:block">
                                <span class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase">
                                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Info Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors group cursor-default">
                        <i data-lucide="phone" class="w-6 h-6 text-emerald-500 mb-4 group-hover:-rotate-12 transition-transform"></i>
                        <h4 class="font-bold text-sm text-slate-500 uppercase tracking-widest mb-1">Call Us</h4>
                        <p class="text-lg font-black dark:text-white">+1 (555) 000-0000</p>
                    </div>
                    <div class="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 transition-colors group cursor-default">
                        <i data-lucide="mail" class="w-6 h-6 text-violet-500 mb-4 group-hover:scale-110 transition-transform"></i>
                        <h4 class="font-bold text-sm text-slate-500 uppercase tracking-widest mb-1">Email HQ</h4>
                        <p class="text-lg font-black dark:text-white">hello@adnova.co</p>
                    </div>
                    <div class="p-6 bg-emerald-600 rounded-3xl text-white shadow-xl shadow-emerald-600/20 group cursor-default relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <i data-lucide="message-square" class="w-6 h-6 text-emerald-100 mb-4 group-hover:scale-110 transition-transform relative z-10"></i>
                        <h4 class="font-bold text-sm text-emerald-200 uppercase tracking-widest mb-1 relative z-10">Live Chat</h4>
                        <p class="text-lg font-black relative z-10">Start Session <i data-lucide="arrow-right" class="w-4 h-4 inline-block ml-1"></i></p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <!-- Support FAQ -->
    <section class="max-w-4xl mx-auto px-4 pb-32">
        <div class="text-center mb-12">
            <h2 class="premium-h2 text-3xl font-heading font-black mb-4">Direct Answers</h2>
            <p class="text-slate-500">Fast resolutions for common inquiries.</p>
        </div>
        <div class="space-y-4">
            <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <h4 class="text-lg font-bold mb-2 dark:text-white">How fast is the verification process?</h4>
                <p class="text-slate-600 dark:text-slate-400">Our automated AI systems process 90% of verifications instantly. Manual reviews for high-value sellers take up to 2 hours.</p>
            </div>
            <div class="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <h4 class="text-lg font-bold mb-2 dark:text-white">Do you offer enterprise APIs?</h4>
                <p class="text-slate-600 dark:text-slate-400">Yes, our GraphQL endpoints are available for premium business accounts to sync inventory dynamically.</p>
            </div>
        </div>
    </section>
`;

const finalContactHtml = baseHtml
    .replace('{{TITLE}}', 'Contact')
    .replace('{{CONTENT}}', contactContent);

fs.writeFileSync(path.join(dir, 'contact.html'), finalContactHtml, 'utf8');

console.log('Successfully generated new contact.html');
