const compose = (f, g) => (x) => f(g(x));

const plusOne = (n) => n + 1;
const multipliedByTwo = (n) => n * 2;

arr.map(plusOne).map(multipliedByTwo) ===
  arr.map(compose(multipliedByTwo, plusOne)); // notice the order of the functions
