// 目标：使用http module执行一个get请求
'use strict'
const http = require('https');
const url = process.argv[2];
console.log(http.globalAgent);
// http.get(url, {
//     // request options
// }, (response) => {
//     response.setEncoding('utf-8');
//     response.on('data', (data) => {
//         console.log(data);
//     })
// })