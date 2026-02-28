const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';

// Common placeholder IDs I saw earlier or that are often used generically that don't fit specific products
const map = {
    // Generic building -> Gaming Console 
    '1486401899868-0e435ed85128': '1605901309584-822e25960b79',

    // Generic Plant -> Designer Lamp
    '1485965120184-e220f721d03e': '1540932239986-30128078f3c5',

    // Generic Girl -> Cyberpunk headset
    '1550525811-e5869dd03032': '1618366712010-f4ae9c647dcb',

    // Abstract Girl (often used as 'Calm' or generic profile) -> Make it a professional avatar 
    '1556761175-5973dc0f32d7': '1573496359142-b8d87734a5a2',

    // Keep adding known mismatches if any.
    // Dashboard saved items (1511707171634 is a generic laptop/desk, 1523275335684 is a watch)
    // Actually, watch is fine for an item. Let's make sure avatars are human and items are items.
};

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Direct fixes for Admin Dashboard "Recent Listings"
    // Let's sweep for any 'Gaming Console' text and ensure it doesn't have the building image
    if (html.includes('Gaming Console') && html.includes('1486401899868')) {
        html = html.replace(/1486401899868-0e435ed85128/g, '1605901309584-822e25960b79');
        modified = true;
    }

    // Sweep for Vintage Keyboard (if it exists)
    if (html.includes('Vintage Keyboard') && html.includes('1550525811')) {
        html = html.replace(/1550525811-e5869dd03032/g, '1595225476474-87521532f3aa'); // Real keyboard
        modified = true;
    }

    // Sweep for Designer Lamp
    if (html.includes('Designer Lamp') && html.includes('1485965120184')) {
        html = html.replace(/1485965120184-e220f721d03e/g, '1540932239986-30128078f3c5');
        modified = true;
    }

    // Sweep for Cyberpunk Headset
    if (html.includes('Cyberpunk Headset') && html.includes('1550525811')) {
        html = html.replace(/1550525811-e5869dd03032/g, '1618366712010-f4ae9c647dcb');
        modified = true;
    }

    Object.entries(map).forEach(([oldId, newId]) => {
        if (html.includes(oldId)) {
            html = html.replace(new RegExp(oldId, 'g'), newId);
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`Patched image mismatches in: ${file}`);
    }
});

console.log("Global image sweep complete.");
