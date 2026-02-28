const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

// Helper
function updateFile(filename, replacements) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');
    for (const [search, replace] of replacements) {
        html = html.split(search).join(replace);
    }
    fs.writeFileSync(filePath, html, 'utf8');
}

// 1. login.html
updateFile('login.html', [
    // Fix overflow-hidden clipping the modal (Issue 6 - highlight section missing)
    ['<body class="bg-slate-950 font-sans text-slate-100 overflow-hidden select-none">',
        '<body class="bg-slate-950 font-sans text-slate-100 overflow-x-hidden min-h-screen select-none">'],
    // Fix brand name missing / scaling at 360px (Issue 5 - brand name missing)
    ['<div class="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-white font-black text-2xl group-hover:bg-emerald-500 transition-colors shadow-xl">A</div>',
        '<div class="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-white font-black text-xl md:text-2xl group-hover:bg-emerald-500 transition-colors shadow-xl shrink-0">A</div>'],
    ['<span class="text-2xl font-black tracking-tighter text-white">Ad<span class="text-emerald-400">Nova</span></span>',
        '<span class="text-xl md:text-2xl font-black tracking-tighter text-white">Ad<span class="text-emerald-400">Nova</span></span>']
]);

// 2. index.html
updateFile('index.html', [
    // Hero section text layout (Issue 7)
    ['<h1 class="premium-h1 text-6xl md:text-[5rem] mb-6 leading-tight">',
        '<h1 class="premium-h1 text-4xl sm:text-5xl md:text-[5rem] mb-6 leading-tight">'],
    ['<p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 font-medium max-w-2xl mx-auto">',
        '<p class="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-8 md:mb-12 font-medium max-w-2xl mx-auto px-2">'],
    // Global Metrics (Above footer layout issue) - making it more mobile friendly
    ['<section class="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">',
        '<section class="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">'],
    ['<div class="text-5xl font-black text-emerald-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-emerald-500 mb-2 font-heading">'],
    ['<div class="text-5xl font-black text-violet-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-violet-500 mb-2 font-heading">'],
    ['<div class="text-5xl font-black text-blue-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-blue-500 mb-2 font-heading">'],
    ['<div class="text-5xl font-black text-amber-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-amber-500 mb-2 font-heading">']
]);

// 3. contact.html
updateFile('contact.html', [
    // Hero section text layout (Issue 8)
    ['<h1 class="premium-h1 text-5xl md:text-8xl font-heading tracking-tighter mb-6 relative inline-block">',
        '<h1 class="premium-h1 text-4xl md:text-6xl lg:text-8xl font-heading tracking-tighter mb-6 mt-4 relative inline-block">'],
    ['<p class="text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto mt-6">',
        '<p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto mt-6 px-2">'],
    // Regional Network / Headquarters section layout issue
    ['<div class="bg-white/90 dark:bg-slate-950/90 backdrop-blur-md p-6 rounded-2xl border border-white dark:border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">',
        '<div class="bg-white/90 dark:bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white dark:border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">'],
    ['<div class="flex items-center gap-4">',
        '<div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">'],
    // Also patch global metrics just in case it's in contact.html
    ['<section class="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">',
        '<section class="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">'],
    ['<div class="text-5xl font-black text-emerald-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-emerald-500 mb-2 font-heading">'],
    ['<div class="text-5xl font-black text-violet-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-violet-500 mb-2 font-heading">'],
    ['<div class="text-5xl font-black text-blue-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-blue-500 mb-2 font-heading">'],
    ['<div class="text-5xl font-black text-amber-500 mb-2 font-heading">',
        '<div class="text-4xl md:text-5xl font-black text-amber-500 mb-2 font-heading">']
]);

// 4. Ensure we unhide brand name in navbar across standard pages on mobile
const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
allFiles.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    content = content.replace('<span class="text-2xl font-black tracking-tighter dark:text-white hidden sm:block">Ad<span class="text-emerald-500">Nova</span></span>',
        '<span class="text-xl sm:text-2xl font-black tracking-tighter dark:text-white">Ad<span class="text-emerald-500">Nova</span></span>');
    fs.writeFileSync(path.join(dir, file), content);
});

console.log("Responsive layout fixes complete.");
