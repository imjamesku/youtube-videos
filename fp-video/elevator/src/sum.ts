function sumRecursion(arr: number[], index = 0): number {
  if (index === arr.length) return 0;
  return arr[index] + sumRecursion(arr, index + 1);
}

function sumForLoop(arr: number[]): number {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function sumReduce(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

const arr = [1, 2, 3, 4, 5];

console.log(sumRecursion(arr));
console.log(sumForLoop(arr));
console.log(sumReduce(arr));
