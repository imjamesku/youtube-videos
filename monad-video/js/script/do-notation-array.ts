const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

function example1(): Array<number[]> {
  return arr1.flatMap((x) => arr2.map((y) => [x, y]));
}

async function example(): Array<number[]> {
  const arr1 = [1, 2, 3];
  const arr2 = [10, 20, 30];
  const a = await arr1;
  const b = await arr2;
  return [a, b];
}

console.log(example1());
const result = [
  [1, 10],
  [1, 20],
  [1, 30],
  [2, 10],
  [2, 20],
  [2, 30],
  [3, 10],
  [3, 20],
  [3, 30]
];
