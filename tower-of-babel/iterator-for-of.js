const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            next() {
                index++;
                let done = false;
                if (index > max)
                    done = true;
                if (index % 3 === 0 && index % 5 === 0) {
                    return { value: "FizzBuzz", done };
                } else if (index % 3 === 0) {
                    return { value: 'Fizz', done };
                } else if (index % 5 === 0) {
                    return { value: 'Buzz', done };
                }
                return { value: index, done };
            }
        }
    }
}
for (let n of FizzBuzz) {
    console.log(n);
}