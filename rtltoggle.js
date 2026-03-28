// RTL Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const dirBtns = document.querySelectorAll('#dir-toggle, #mobile-dir-toggle');
    const html = document.documentElement;

    // Helper to set direction
    const setDirection = (dir) => {
        html.dir = dir;
        localStorage.setItem('dir', dir);
        window.dispatchEvent(new CustomEvent('dir-change', { detail: { dir } }));
        window.dispatchEvent(new Event('dirchange'));
    };

    // Toggle button listener
    dirBtns.forEach(dirBtn => {
        // Clone to remove potential old listeners
        const newDirBtn = dirBtn.cloneNode(true);
        dirBtn.parentNode.replaceChild(newDirBtn, dirBtn);

        newDirBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentDir = html.dir || 'ltr';
            const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
            setDirection(newDir);
        });
    });

    // Sync with other tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'dir') {
            html.dir = e.newValue;
        }
    });

    // Initial check (in case it wasn't set by head script)
    if (!html.dir) {
        html.dir = localStorage.getItem('dir') || 'ltr';
    }
});
