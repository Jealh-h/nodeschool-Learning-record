// const max = process.argv[2];
const max = 15
let FizzBuzz = function* () {
    let index = 0;
    while (index < max) {
        index++;
        let done = false, value = index;
        if (index > max)
            done = true;
        if (index % 3 === 0 && index % 5 === 0) {
            value = "FizzBuzz";
        } else if (index % 3 === 0) {
            value = 'Fizz';
        } else if (index % 5 === 0) {
            value = 'Buzz';
        }
        yield value;
    }
}();
for (let n of FizzBuzz) {
    console.log(n);
}