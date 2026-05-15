const fs = require('fs');
const files = ['index.html', 'work.html', 'properties.html', 'faq.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add toggle button right after nav__logo
    content = content.replace(
        /<a href="index\.html" class="nav__logo">[\s\S]*?<\/a>/, 
        `$&
      <button class="nav__toggle" id="mobile-menu-btn" aria-label="Toggle menu">
        <i class="fa-solid fa-bars"></i>
      </button>`
    );
    
    // Make sure we didn't add it twice
    if ((content.match(/nav__toggle/g) || []).length > 1) {
        content = content.replace(/<button class="nav__toggle"[\s\S]*?<\/button>\s*<button class="nav__toggle"/g, '<button class="nav__toggle"');
    }

    fs.writeFileSync(file, content);
});
console.log('Added mobile menu toggle to HTML files');
