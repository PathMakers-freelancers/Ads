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

// 1. Remove Footer from Dashboards
['user_dashboard.html', 'admin_dashboard.html'].forEach(file => {
    updateFile(file, (html) => {
        // Find footer start and end
        const footerStart = html.indexOf('<footer');
        if (footerStart !== -1) {
            const footerEnd = html.indexOf('</footer>', footerStart);
            if (footerEnd !== -1) {
                html = html.substring(0, footerStart) + html.substring(footerEnd + 9);
            }
        }
        return html;
    });
});

// 2. Remove "Back to Hub" from login.html & check text visibility
updateFile('login.html', (html) => {
    html = html.replace(/<a href="index\.html" class="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2">[\s\S]*?<\/a>/, '');

    // Ensure text visibility is good - Add more contrast to placeholder/text classes
    html = html.replace(/text-slate-400/g, 'text-slate-300'); // Lighten labels slightly
    html = html.replace(/placeholder-slate-500/g, 'placeholder-slate-400');
    return html;
});

// 3. Add Images to "Core Tenets", "Global Metrics", "Ecosystem" in About/Services/Contact
// Also add a Timeline to About

const timelineHTML = `
    <!-- Evolution Timeline (New) -->
    <section class="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div class="max-w-5xl mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                <span class="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">The Journey</span>
                <h2 class="premium-h2 text-4xl md:text-5xl">Evolution of AdNova</h2>
            </div>
            
            <div class="relative wrap overflow-hidden p-10 h-full">
                <!-- Timeline vertical line -->
                <div class="border-2-2 absolute border-opacity-20 border-slate-700 h-full border" style="left: 50%"></div>
                
                <!-- 2024 -->
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                    </div>
                    <div class="order-1 bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-5/12 px-6 py-4 border border-slate-200 dark:border-slate-800">
                        <h3 class="font-bold dark:text-white text-xl mb-1">Inception</h3>
                        <p class="text-sm text-emerald-500 font-bold mb-3">Q1 2024</p>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-snug">The core architecture of AdNova was drafted, focusing on zero-latency interactions and a glassmorphic aesthetic.</p>
                    </div>
                </div>

                <!-- 2025 -->
                <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-violet-500 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                    </div>
                    <div class="order-1 bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-5/12 px-6 py-4 border border-slate-200 dark:border-slate-800 text-right">
                        <h3 class="font-bold dark:text-white text-xl mb-1">The Verification Layer</h3>
                        <p class="text-sm text-violet-500 font-bold mb-3">Q3 2025</p>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-snug">Integration of AI-driven fraud detection and blockchain certificates for high-ticket asset transfers.</p>
                    </div>
                </div>

                <!-- 2026 -->
                <div class="mb-8 flex justify-between items-center w-full right-timeline">
                    <div class="order-1 w-5/12"></div>
                    <div class="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-8 h-8 rounded-full">
                        <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                    </div>
                    <div class="order-1 bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-5/12 px-6 py-4 border border-slate-200 dark:border-slate-800">
                        <h3 class="font-bold dark:text-white text-xl mb-1">Global Scale</h3>
                        <p class="text-sm text-emerald-500 font-bold mb-3">Q2 2026</p>
                        <p class="text-slate-600 dark:text-slate-400 text-sm leading-snug">Expansion to 40+ countries with regional CDN bridging and a massive 2.4M active listing milestone.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

updateFile('about.html', (html) => {
    // Inject images into Core Tenets
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>',
        '<img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>'
    );
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>',
        '<img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>'
    );
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>',
        '<img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>'
    );

    // Inject timeline before footer
    const footerIndex = html.indexOf('<!-- Footer -->');
    if (footerIndex !== -1) {
        html = html.substring(0, footerIndex) + timelineHTML + '\n' + html.substring(footerIndex);
    }
    return html;
});

// Add images to services header or tenets
updateFile('services.html', (html) => {
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>',
        '<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>'
    );
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>',
        '<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>'
    );
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>',
        '<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>'
    );
    return html;
});

// Add images to contact
updateFile('contact.html', (html) => {
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>',
        '<img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Absolute Transparency</h3>'
    );
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>',
        '<img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Defensive Engineering</h3>'
    );
    html = html.replace(
        '<h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>',
        '<img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop" class="w-full h-32 object-cover rounded-xl mb-6 shadow-sm"><h3 class="text-xl font-bold dark:text-white mb-3">Aesthetic Integrity</h3>'
    );
    return html;
});

console.log('Processed Timeline, Images, and Page cleaning.');
