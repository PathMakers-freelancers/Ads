const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

// Fix index.html (Cyberpunk Headset image + Launch button visibility)
const indexHtmlPath = path.join(dir, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Cyberpunk Headset Image
indexHtml = indexHtml.replace('https://images.unsplash.com/photo-1620052349788-b22031a5eb23?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=600&auto=format&fit=crop'); // A more reliable VR/Headset standard image from Unsplash

// 2. ENTER THE NEXUS Text Visibility
// The prompt asked for "ENTER THE NEXUS" text color not visible in h1, but the current text is "THE NEXUS OF COMMERCE".
// Let's ensure the heading text gradients are visible in both light/dark.
indexHtml = indexHtml.replace('text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-violet-600', 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-violet-700 dark:from-emerald-400 dark:to-violet-400');
indexHtml = indexHtml.replace('text-slate-200 opacity-20', 'text-slate-900/10 dark:text-slate-200/20');

// 3. Launch Dashboard btn visibility
// The button "Launch Dashboard" or similar might be buried. Let's find "Explore Directory" or "Launch".
indexHtml = indexHtml.replace('bg-slate-900 text-white', 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'); // Ensure high contrast buttons adapt

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');

// Fix index2.html (White Vase, Glass Carafe images)
const index2HtmlPath = path.join(dir, 'index2.html');
let index2Html = fs.readFileSync(index2HtmlPath, 'utf8');

// 1. Broken images in Curated / Mega Grid
// Ceramic Vase (Item #3)
index2Html = index2Html.replace('https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=600&auto=format&fit=crop');
// White Vase (Minimalist Tab)
index2Html = index2Html.replace('https://images.unsplash.com/photo-1520005785081-998ea1276a6b?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop');
// Glass Carafe (Minimalist Tab)
index2Html = index2Html.replace('https://images.unsplash.com/photo-1622979135240-caa6648190b4?q=80&w=600&auto=format&fit=crop', 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop');

// 2. Ensure general text is highly visible on mobile/desktop
// The request mentions "optimize the entire page for both mobile and desktop view".
// Tailwind is already heavily used, but we can ensure standard paragraphs are a bit darker in light mode.
index2Html = index2Html.replace(/text-slate-500 max-w-2xl/g, 'text-slate-600 dark:text-slate-400 max-w-2xl px-4 sm:px-0');
index2Html = index2Html.replace(/text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto/g, 'text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto px-4 sm:px-0');

fs.writeFileSync(index2HtmlPath, index2Html, 'utf8');

console.log('Fixed broken images and updated text contrast classes.');
