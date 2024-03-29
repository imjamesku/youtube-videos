export {};
interface WithLogs<T> {
  value: T;
  logs: string[];
}

function unit<T>(x: T): WithLogs<T> {
  return {
    value: x,
    logs: []
  };
}

function flatMap<T, U>(w: WithLogs<T>, f: (x: T) => WithLogs<U>): WithLogs<U> {
  const result = f(w.value);
  return {
    value: result.value,
    logs: w.logs.concat(result.logs)
  };
}

function add2(n: number): WithLogs<number> {
  return {
    value: n + 2,
    logs: [`add2(${n})`]
  };
}

function mult3(n: number): WithLogs<number> {
  return {
    value: n * 3,
    logs: [`mult3(${n})`]
  };
}

function tell(log: string): WithLogs<undefined> {
  return {
    value: undefined,
    logs: [log]
  };
}

function example() {
  //   const res = flatMap(flatMap(unit(1), add2), mult3);
  // tell "inserted" and keep the value unchanged
  const initialValue = unit(1);
  const res1 = flatMap(initialValue, add2);
  const res2 = flatMap(res1, mult3);
  const res3 = flatMap(res2, (x) => {
    const someRandomLog = tell("hello world");
    return flatMap(someRandomLog, (_) => unit(x));
  });
  console.log(res3);
}
const a = (1 + 2) * 3;
// example written in do notation
// do function example(): Writer<number> {
//     const initialValue = 1;
//     const x = await add2(initialValue);
//     const y = await mult3(x);
//     await tell("hello world");
//     return unit(y);
// }

const res = {
  value: 9,
  log: ["add2(1)", "mult3(3)", "hello world"]
};

example();
