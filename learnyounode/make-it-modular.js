'use strict'
const mymodule = require('./mymodule');
const dirPath = process.argv[2];
const ext = process.argv[3];
mymodule(dirPath, ext, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let file of data) {
        console.log(file);
    }
})

