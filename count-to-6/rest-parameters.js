module.exports = function average(...args) {
    var sum = 0;
    args.forEach((item) => {
        sum += item;
    })
    return sum / args.length;
}