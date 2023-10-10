function getInput1() {
  return Promise.resolve(2);
}

function getInput2() {
  return Promise.resolve(5);
}

function ex1() {
  const input1 = getInput1();
  const input2 = getInput2();
  input1.then((x) => input2.then((y) => x * y)).then(console.log);
}

ex1();
