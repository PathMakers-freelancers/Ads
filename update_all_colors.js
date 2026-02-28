const fs = require('fs');
const path = require('path');

const dir = 's:/JanBatch/Classifiedadspro';
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (path.extname(file) === '.html') {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if colors exist before replacing
        if (content.match(/indigo-|purple-|teal-|rose-/)) {
            content = content.replace(/indigo-/g, 'emerald-');
            content = content.replace(/purple-/g, 'violet-');
            content = content.replace(/teal-/g, 'emerald-');
            content = content.replace(/rose-/g, 'violet-');

            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated colors in ${file}`);
        }
    }
});
