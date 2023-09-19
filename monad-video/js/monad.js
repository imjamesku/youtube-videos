// define return and bind
// M<a> = State -> [a, State]
// type of m: M<A>
// type of f: A -> M<B>
function bind(m, f) {
  return (s) => {
    const [a, s1] = m(s);
    return f(a)(s1);
  };
}

function pop(stack) {
  return (s) => [stack[0], stack.slice(1)];
}

function push(value, stack) {
  return (s) => [undefined, [value, ...stack]];
}

const stack = [1, 2];
// push 3 >> push 4 >> pop
const newStack = bind(push(3, stack), (a) => bind(pop(a), pop));

console.log(newStack());
