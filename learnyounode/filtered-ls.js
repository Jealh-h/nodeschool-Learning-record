// 打印给出的文件目录下相应后缀文件列表
'use strict'
const fs = require('fs');
const path = require('path');
const dirPath = process.argv[2];
const ext = process.argv[3];
fs.readdir(dirPath, (err, list) => {
    list.forEach((file) => {
        if (path.extname(file) === '.' + ext) {
            console.log(file);
        }
    })
})
