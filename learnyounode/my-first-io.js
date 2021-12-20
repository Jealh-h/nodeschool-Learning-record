const fs = require('fs');
const filePath = process.argv[2];
const buf = fs.readFileSync(filePath)
const str = buf.toString();
console.log(str.split('\n').length - 1);