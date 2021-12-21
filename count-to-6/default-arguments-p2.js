module.exports = function makeImportant(str, s = str.length) {
    // "!".repeat(s);
    for (let i = 0; i < s; i++) {
        str += '!';
    }
    return str;
};