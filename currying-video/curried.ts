function add(a) {
  return function (b) {
    return a + b;
  };
}
// The add function is now curried. It takes one argument at a time.
