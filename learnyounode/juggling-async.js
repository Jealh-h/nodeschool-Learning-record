'use strict'
const http = require('http');
const paths = [process.argv[2], process.argv[3], process.argv[4]];
let current = 0;
function resolve() {
    http.get(paths[current], (response) => {
        response.setEncoding('utf-8');
        let msg = '';
        response.on('data', (chunk) => {
            msg += chunk;
        })
        response.on('end', () => {
            console.log(msg);
            current++;
            if (current < 3) {
                resolve();
            } else {
                return
            }
        })
    })
}
resolve();
