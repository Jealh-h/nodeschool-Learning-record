/**
 *   Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.     

  Your server should listen on the port provided by the first argument to       
  your program.
 */

'use strict'
const http = require('http');
const map = require('through2-map');
const port = process.argv[2];
const server = http.createServer((req, res) => {
    // console.log(req.method);
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
})
server.listen(port);