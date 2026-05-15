const fs = require('fs');
const files = ['index.html', 'work.html', 'properties.html', 'faq.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the wrapped CTA structure
    content = content.replace(/<section class="section">\s*<div class="cta-banner reveal">/g, '<section class="cta-banner reveal">');
    
    // Replace the closing tags.
    content = content.replace(/<\/div>\s*<\/section>\s*<!-- Footer -->/g, '</section>\n\n  <!-- Footer -->');
    
    fs.writeFileSync(file, content);
});
console.log('Fixed CTA HTML structure');
