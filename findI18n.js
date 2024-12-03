const fs = require('fs');
const path = require('path');

// Function to recursively scan directories
function scanDirectory(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            files.push(...scanDirectory(fullPath));
        } else {
            files.push(fullPath);
        }
    }

    return files;
}

// Function to find all occurrences of i18n.t
function findI18nOccurrences(files) {
    const regex = /i18n\.t\(['"`](.*?)['"`]\)/g;
    const occurrences = [];

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        let match;

        while ((match = regex.exec(content)) !== null) {
            occurrences.push({
                file,
                match: match[1],
            });
        }
    }

    return occurrences;
}

// Main function
function main() {
    const targetDirectory = './'; // Specify the target directory
    console.log(`Scanning directory: ${targetDirectory}`);

    const allFiles = scanDirectory(targetDirectory).filter(file => file.endsWith('.js') || file.endsWith('.jsx'));
    console.log(`Found ${allFiles.length} files to scan.`);

    const i18nOccurrences = findI18nOccurrences(allFiles);

    if (i18nOccurrences.length > 0) {
        console.log('Found the following i18n.t occurrences:');
        i18nOccurrences.forEach(({ file, match }) => {
            // console.log(`File: ${file} | Key: ${match}`);
            console.log(`"${match}":"",`)
        });
        console.log(i18nOccurrences.length )
    } else {
        console.log('No i18n.t occurrences found.');
    }
}

main();
