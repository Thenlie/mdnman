import { mkdirSync, rmSync, existsSync, cpSync } from 'fs';
import { dirname, join } from 'path';

const UPSTREAM_DIR = 'upstream/mdn';
const DEST_DIR = 'lib';

// List of files to copy from upstream to lib, with target paths
const filesToCopy: { from: string; to: string }[] = [
    { from: 'files/en-us/web/html/reference', to: 'html' },
    { from: 'files/en-us/web/html/guides', to: 'html' },
    { from: 'files/en-us/web/css', to: 'css' },
    { from: 'files/en-us/web/javascript/reference', to: 'javascript' },
    { from: 'files/en-us/web/javascript/guide', to: 'javascript' },
    { from: 'files/en-us/web/api', to: 'javascript/web_api' },
    { from: 'files/en-us/web/accessibility/aria/reference', to: 'html' },
];

// Clear the destination folder (be careful doing this)
if (existsSync(DEST_DIR)) {
    rmSync(DEST_DIR, { recursive: true, force: true });
}

mkdirSync(DEST_DIR, { recursive: true });

filesToCopy.forEach(({ from, to }) => {
    const sourcePath = join(UPSTREAM_DIR, from);
    const destPath = join(DEST_DIR, to);

    // Ensure destination directory exists
    mkdirSync(dirname(destPath), { recursive: true });

    // Copy directory recursively
    try {
        cpSync(sourcePath, destPath, { recursive: true });
        console.log(`✅ Copied: ${from} → ${to}`);
    } catch (err) {
        console.log(`❌ Failed to copy: ${from} → ${to}`);
        console.log(err);
    }
});

console.log('🟢 Sync complete.');
