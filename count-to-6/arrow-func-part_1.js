const input = process.argv.slice(2);
const result = input.map(item => {
    return item[0];
}).reduce((pre, cur) => pre + cur);
console.log(`[${input}] becomes "${result}"`);