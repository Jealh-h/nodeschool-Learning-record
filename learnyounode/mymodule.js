'use strict'
const fs = require('fs');
const path = require('path');
module.exports = function func(dir, ext, callback) {
    let filtered = [];
    fs.readdir(dir, (err, list) => {
        if (err) {
            callback(err);
            return;
        }
        list.forEach((file) => {
            if (path.extname(file) === '.' + ext) {
                filtered.push(file);
            }
        })
        callback(null, filtered);
    })
}