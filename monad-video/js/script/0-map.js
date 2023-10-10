const arr = [1, 2, 3];
const arr2 = arr.map((x) => x * 2); // [2, 4, 6]
const arr3 = arr.flatMap((x) => [x * 2]);

console.log(arr2);

const unit = (x) => [x];
