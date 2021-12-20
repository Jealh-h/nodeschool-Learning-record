'use strict'
const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];
const server = http.createServer((request, response) => {
    const rs = fs.createReadStream(file);
    rs.pipe(response);
});
server.listen(port);