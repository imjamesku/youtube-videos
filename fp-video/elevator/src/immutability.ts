function mutateVariables(arr1: number[], arr2: number[]) {
  const arr3 = new Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i] + arr2[i];
  }

  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr3[i];
  }

  const average = sum / arr1.length;
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = arr3[i] / average;
  }

  return arr3;
}

function avoidMutation(arr1: number[], arr2: number[]) {
  const arr1PlusArr2 = arr1.map((x, i) => x + arr2[i]);
  const sum = arr1PlusArr2.reduce((a, b) => a + b, 0);
  const average = sum / arr1PlusArr2.length;
  return arr1PlusArr2.map(x => x / average);
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

console.log(mutateVariables(arr1, arr2));
console.log(avoidMutation(arr1, arr2));
