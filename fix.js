const fs = require('fs');
let html = fs.readFileSync('admin_dashboard.html', 'utf8');

const replacementStr = `
    <!-- Mobile Menu Drawer -->
    <div id="mobile-menu"
        class="fixed inset-y-0 start-0 w-[50%] z-[200] bg-white dark:bg-slate-950 shadow-2xl transform -translate-x-full rtl:translate-x-full lg:hidden flex flex-col h-full overflow-y-auto border-r border-slate-200 dark:border-slate-800 transition-transform duration-300">

        <div class="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
            <span class="font-black text-xl tracking-tighter dark:text-white">Menu</span>
            <button id="mobile-menu-close-btn"
                class="p-2 text-slate-500 hover:text-violet-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>

        <div class="p-4 space-y-4">
            <a href="index.html"
                class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">Home
                (V1)</a>
            <a href="index2.html"
                class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">Home
                (V2)</a>
            <a href="about.html"
                class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">About
                Us</a>
            <a href="services.html"
                class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">Services</a>
            <a href="contact.html"
                class="block px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">Contact</a>

            <div class="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                <a href="user_dashboard.html"
                    class="flex items-center space-x-2 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">
                    <i data-lucide="user" class="w-4 h-4"></i><span>User Dashboard</span>
                </a>
                <a href="admin_dashboard.html"
                    class="flex items-center space-x-2 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 font-bold dark:text-white transition-colors">
                    <i data-lucide="shield-check" class="w-4 h-4"></i><span>Admin Dashboard</span>
                </a>
                <a href="login.html"
                    class="flex items-center space-x-2 px-4 py-3 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-700 mt-4 justify-center shadow-lg shadow-violet-600/20 active:scale-95 transition-all">
                    <i data-lucide="log-out" class="w-4 h-4"></i>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Dashboard Layout -->
    <div class="flex h-screen overflow-hidden">

        <!-- Sidebar -->
        <aside id="sidebar"
            class="fixed inset-y-0 start-0 z-[110] w-64 bg-white dark:bg-slate-900 border-e border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 transform -translate-x-full rtl:translate-x-full lg:translate-x-0 lg:rtl:translate-x-0 lg:static lg:z-auto lg:h-full shadow-2xl lg:shadow-none rtl:right-0 rtl:left-auto">
            <div class="p-4 flex flex-col h-full">
                <!-- Brand, Mobile Close & User Info -->
                <div class="flex flex-col gap-4 mb-6 border-b border-slate-100 dark:border-slate-800/50 pb-4">
                    <div class="flex items-center justify-between px-3">
                        <a href="index.html" class="flex items-center gap-2 group" dir="ltr">
                            <div
                                class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-500/20 group-hover:rotate-6 transition-transform">A</div>
                            <span
                                class="text-xl font-black tracking-tighter dark:text-white">Ad<span class="text-emerald-500">Nova</span></span>
                        </a>
                        <button id="closeSidebarBtn" class="lg:hidden p-2 text-slate-500 hover:text-violet-500 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                    <div class="flex items-center gap-3 px-3 mt-2">
                        <div class="relative">
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=000&color=fff"
                                class="w-10 h-10 rounded-full shadow-lg" alt="User">
                            <span
                                class="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-bold text-slate-800 dark:text-white truncate">Admin User</p>
                            <p class="text-xs text-emerald-500 font-bold truncate">Super Admin</p>
                        </div>
                    </div>
                </div>

                <!-- Navigation -->
                <nav class="flex-1 space-y-1 overflow-y-auto" id="sidebarNav">
                    <a href="#view-overview" id="sidebar-overview"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl sidebar-item-active transition-all group">
                        <i data-lucide="layout-grid" class="w-5 h-5"></i>
                        <span class="font-medium">Overview</span>
                    </a>
                    <a href="#view-users" id="sidebar-users"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group">
                        <i data-lucide="users" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                        <span>Users</span>
                    </a>
                    <a href="#view-listings" id="sidebar-listings"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group">
                        <i data-lucide="shopping-bag" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                        <span>Listings</span>
                    </a>
                    <a href="#view-analytics" id="sidebar-analytics"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group">
                        <i data-lucide="pie-chart" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                        <span>Analytics</span>
                    </a>
                    <a href="#view-settings" id="sidebar-settings"
                        class="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all group">
                        <i data-lucide="settings" class="w-5 h-5 group-hover:scale-110 transition-transform"></i>
                        <span>Settings</span>
                    </a>
                </nav>

                <!-- Logout Section (Mobile/Sidebar) -->
                <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a href="login.html"
                        class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all group">
                        <i data-lucide="log-out" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                        <span class="font-bold">Logout</span>
                    </a>
                </div>
            </div>
        </aside>

        <!-- Sidebar Overlay (Mobile) -->`.trim();

const startStr = '<!-- Mobile Menu Drawer -->';
const endStr = '<!-- Sidebar Overlay (Mobile) -->';

let startIndex = html.indexOf(startStr);
let endIndex = html.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    let finalHtml = html.substring(0, startIndex) + replacementStr + html.substring(endIndex + endStr.length);
    fs.writeFileSync('admin_dashboard.html', finalHtml);
    console.log("Replaced successfully!");
} else {
    console.log("Could not find start/end bounds.");
}
