function pop(stack) {
  return [stack[0], stack.slice(1)];
}

function push(value, stack) {
  return [undefined, [value, ...stack]];
}

const stack = [1, 2];
const [, newStack1] = push(3, stack);
const [, newStack2] = pop(newStack1);
console.log(pop(newStack2));
