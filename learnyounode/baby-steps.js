'use strict'
/**
 * 从控制台获取输入并输出它们的sum
 */
const args = process.argv.slice(2);
let sum = 0;
for (let item of args) {
    sum += Number(item);
}
console.log(sum);