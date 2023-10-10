function flatMap(m, f) {
  return m.flatMap(f);
}
// array example
const arr = [1, 2, 3];
//flatmap
const arr2 = arr.flatMap((x) => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
console.log(arr2);

// functional style
const arr3 = flatMap(arr, (x) => [x, x * 2]);

// type of flatMap: Array<number> -> (number -> Array<number>) -> Array<number>
// generic type: Array<T> -> (T -> Array<U>) -> Array<U>
const arr4 = flatMap(arr, (x) => [x.toString(), x.toString(), x.toString()]);
