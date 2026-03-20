const fs = require('fs');
let html = fs.readFileSync('user_dashboard.html', 'utf8');

const targetStr = `
                    <a href="#view-settings" id="nav-settings"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white transition-colors">
            class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[105] lg:hidden hidden opacity-0 transition-opacity duration-300">
        </div>

        <!-- Main Content -->
        <main class="flex-1 lg:ml-0 pt-8 min-h-screen">
            <!-- Mobile Sidebar Toggle -->
            <button id="contentMenuBtn"
                class="lg:hidden mx-4 mb-4 p-2 bg-white dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">
                <span class="flex items-center gap-2 font-bold text-sm">
                    <i data-lucide="menu" class="w-5 h-5"></i>
                    Dashboard Menu
                </span>
            </button>
`.trim();

const replacementStr = `
                    <a href="#view-settings" id="nav-settings"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <i data-lucide="settings" class="w-5 h-5"></i>
                        <span>Settings</span>
                    </a>
                </nav>
            </div>
        </aside>

        <!-- Sidebar Overlay -->
        <div id="sidebarOverlay"
            class="fixed inset-0 bg-black/70 backdrop-blur-sm z-[105] lg:hidden hidden opacity-0 transition-opacity duration-300">
        </div>

        <!-- Main Content -->
        <main class="flex-1 lg:ml-0 pt-6 lg:pt-8 min-h-screen relative">
            <!-- Global Top Action Bar -->
            <div class="flex items-center justify-between mx-4 lg:mx-8 mb-4 lg:mb-6">
                <!-- Mobile Sidebar Toggle -->
                <button id="contentMenuBtn"
                    class="lg:hidden p-2.5 bg-white dark:bg-[#1e293b] text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                    <span class="flex items-center gap-2 font-bold text-sm">
                        <i data-lucide="menu" class="w-5 h-5"></i>
                        <span>Menu</span>
                    </span>
                </button>
                <div class="hidden lg:block"></div> <!-- Spacer -->

                <!-- Profile Dropdown/Icon (Moved to Top Right) -->
                <div class="flex items-center gap-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-1.5 pl-4 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm cursor-pointer hover:shadow-md transition-all group ml-auto max-w-fit">
                    <div class="hidden sm:block text-right pr-2 border-r border-slate-200 dark:border-slate-700">
                        <p class="text-sm font-bold text-slate-900 dark:text-white leading-none">John Doe</p>
                        <p class="text-[10px] font-bold text-emerald-500 mt-1 uppercase tracking-wider">Premium Member</p>
                    </div>
                    <img src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff"
                        class="w-9 h-9 rounded-full ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/50 shadow-inner" alt="User Profile">
                </div>
            </div>
`.trim();

const targetStartStr = '<a href="#view-settings" id="nav-settings"';
const targetEndStr = '            </button>';

let startIndex = html.indexOf(targetStartStr);
let endIndex = html.indexOf(targetEndStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    let finalHtml = html.substring(0, startIndex) + replacementStr + html.substring(endIndex + targetEndStr.length);
    fs.writeFileSync('user_dashboard.html', finalHtml);
    console.log("Replaced successfully!");
} else {
    console.log("Could not find start/end bounds. Start:", startIndex, "End:", endIndex);
}
