var rawArgs = process.argv.slice(2);
var args = [];
rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
        if (val !== '') args.push(+val);
    })
})
let avg = (...args) => {
    let sum = args.reduce((pre, cur) => {
        return pre + cur;
    })
    return sum / args.length;
}
console.log(avg(...args));