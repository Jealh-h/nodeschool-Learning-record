var inputs = process.argv.slice(2);
var result = inputs.map((item, index) => {
    return item[0];
}).reduce((pre, cur) => {
    return pre + cur;
})
console.log(result);