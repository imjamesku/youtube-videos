export {};
interface Writer<T> {
  value: T;
  log: string[];
}

function unit<T>(x: T): Writer<T> {
  return {
    value: x,
    log: []
  };
}

function flatMap<T, U>(w: Writer<T>, f: (x: T) => Writer<U>): Writer<U> {
  const result = f(w.value);
  return {
    value: result.value,
    log: w.log.concat(result.log)
  };
}

function add2(n: number): Writer<number> {
  return {
    value: n + 2,
    log: [`add2(${n})`]
  };
}

function mult3(n: number): Writer<number> {
  return {
    value: n * 3,
    log: [`mult3(${n})`]
  };
}

function tell(log: string): Writer<undefined> {
  return {
    value: undefined,
    log: [log]
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
  console.log(res3.value);
  console.log(res3.log);
}

// example written in do notation
do function example(): Writer<number> {
    const x = await add2(1);
    const y = await mult3(x);
    await tell("hello world");
    return unit(y);
}

example();
