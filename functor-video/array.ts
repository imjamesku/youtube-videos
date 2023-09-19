import * as A from "fp-ts/lib/Array";

const arr = [1, 2, 3];
const arr2 = A.map((n: number) => n * 2)(arr);

console.log(arr2);
