function square(n: number) {
  return n * n;
}

let someNumber = 10;
function squareWithSideEffect(n: number) {
  someNumber = 100;
  return n * n;
}

const obj = {a: 1, b: 1};

obj.b = 2;

obj.a = 2;
