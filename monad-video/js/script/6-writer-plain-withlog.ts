export {};

function add2(n: number, logs: string[]) {
  return {
    value: n + 2,
    logs: [...logs, `add2(${n})`]
  };
}

function mult3(n: number, logs: string[]) {
  return {
    value: n * 3,
    logs: [...logs, `mult3(${n})`]
  };
}
// example written in do notation
// do function example(): Writer<number> {
//     const initialValue = 1;
//     const x = await add2(initialValue);
//     const y = await mult3(x);
//     await tell("hello world");
//     return unit(y);
// }

function example() {
  const initialValue = 1;
  const x = add2(initialValue, []);
  const y = mult3(x.value, x.logs);
  return y;
}

console.log(example());
