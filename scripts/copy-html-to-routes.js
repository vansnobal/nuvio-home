import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.join(__dirname, '../dist');
const ROUTES = ['privacy', 'terms', 'guide'];

console.log('🚀 Starting post-build static file generation...');

// Check if dist exists
if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Error: dist directory not found. Run build first.');
    process.exit(1);
}

// Read index.html
const indexHtmlPath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
    console.error('❌ Error: dist/index.html not found.');
    process.exit(1);
}

const indexContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// Create directories and copy index.html
ROUTES.forEach(route => {
    const routeDir = path.join(DIST_DIR, route);

    // Create directory if it doesn't exist
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    // Write index.html
    fs.writeFileSync(path.join(routeDir, 'index.html'), indexContent);
    console.log(`✅ Created: dist/${route}/index.html`);
});

console.log('✨ Static routes generated successfully!');
