type IO<T> = {
  value: T;
  map: <U>(f: (x: T) => U) => IO<U>;
  flatMap: <U>(f: (x: T) => IO<U>) => IO<U>;
};

function getInput(): IO<number> {
  return { value: 1 };
}

function ex1(): IO<number> {
  // cannot directly multiply IO
  const input = getInput(); // IO<number>
  return input * 2;
  // there are 2 issues here:
  // cannot directly multiply IO
  // cannot directly log IO
}

function ex2(): IO<number> {
  const input = getInput(); // IO<number>
  return input.map((x) => x * 2);
}

function ex3(): IO<number> {
  const input1 = getInput();
  const input2 = getInput();
  return input1.map((x) => input2.map((y) => x * y)); // issue: IO<IO<number>>
}

function ex4() {
  // we need flatMap
  const input1 = getInput();
  const input2 = getInput();
  return input1.flatMap((x) => input2.map((y) => x * y));
}

function ex5() {
  // we need flatMap
  const input1 = getInput();
  const input2 = getInput();
  const mySum = input1.flatMap((x) => input2.map((y) => x * y)); // IO<number>
  console.log(mySum);
}

function ex6(): IO<void> {
  // let's assume the console.log function has type: any -> IO()
  const input1 = getInput();
  const input2 = getInput();
  input1
    .flatMap((x) => input2.map((y) => x * y))
    .flatMap((n) => console.log(n));
}
