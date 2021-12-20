'use-strict'
const http = require('http');
const URL = require('url');
const port = process.argv[2];
const server = http.createServer((req, res) => {
    const url = URL.parse(req.url);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    if (url.pathname === '/api/parsetime') {
        const date = new Date(url.query.split('=')[1]);
        let data = JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds(),
        })
        res.write(data);
    } else if (url.pathname === '/api/unixtime') {
        const date = new Date(url.query.split('=')[1]);
        let data = JSON.stringify({
            "unixtime": date.getTime()
        })
        res.write(data);
    }
    res.end('\n');
})
server.listen(port)