var arg1 = process.argv[2];
var arg2 = process.argv[3];
import { PI } from './module';
import { sqrt } from './module';
import { square } from './module';
console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));