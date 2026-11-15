const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../inner-site/build');
const destDir = path.resolve(__dirname, '../static/os');
const destPublicDir = path.resolve(__dirname, '../public/os');

function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(
                path.join(src, childItemName),
                path.join(dest, childItemName)
            );
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

if (!fs.existsSync(srcDir)) {
    console.error('inner-site/build not found! Run "cd inner-site && npm run build" first.');
    process.exit(1);
}

console.log('Copying inner-site/build to static/os and public/os...');
copyRecursiveSync(srcDir, destDir);
copyRecursiveSync(srcDir, destPublicDir);
console.log('Successfully synced inner-site build into static/os and public/os!');
