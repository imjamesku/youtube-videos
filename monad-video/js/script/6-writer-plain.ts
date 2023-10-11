export {};

function add2(n: number): number {
  return n + 2;
}

function mult3(n: number): number {
  return n * 3;
}

function example(): number {
  const initialValue = 1;
  const x = add2(initialValue); // 3
  const y = mult3(x); // 9
  return y; // 9
}

console.log(example());
