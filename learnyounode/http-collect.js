'use strict'
const http = require('http');
const url = process.argv[2];
let res = '', length = 0;
http.get(url, (response) => {
    response.setEncoding('utf-8');
    response.on("data", (chunk) => {
        length += chunk.length;
        res += chunk;
    })
    response.on("end", () => {
        console.log(length);
        console.log(res);
    })
})

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
