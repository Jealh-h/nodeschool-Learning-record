// // tcp connection
const net = require('net');
const port = process.argv[2];
const server = net.createServer(function (socket) {
    let now = new Date();
    socket.write(formatTime(now));
    socket.end('\n');
});
server.listen(port);

function formatTime(date) {
    let year = date.getFullYear();
    let month = date.getMonth() < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1;
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minu = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minu;
}


