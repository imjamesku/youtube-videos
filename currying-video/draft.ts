// 先看一個例子：

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // 6

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); // 6
console.log(multiplyByTwo(4)); // 8
