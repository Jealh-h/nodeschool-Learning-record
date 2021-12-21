const userArray = process.argv.slice(2);
const [, username, email] = userArray;
console.log({ username, email });
