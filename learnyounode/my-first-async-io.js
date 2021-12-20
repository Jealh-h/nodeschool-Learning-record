const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, 'utf-8', (err, data) => {
    const lines = data.split('\n').length - 1;
    console.log(lines);
})