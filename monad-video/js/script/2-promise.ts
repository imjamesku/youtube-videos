function getInput(): Promise<number> {
  return Promise.resolve(1);
}

function ex2(): Promise<number> {
  const input = getInput(); // IO<number>
  return input.then((x) => x * 2);
}
