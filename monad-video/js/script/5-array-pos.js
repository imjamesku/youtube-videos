function nextPos(pos) {
  return [pos + 2, pos - 1];
}
const initialPos = 0;

console.log(nextPos(initialPos));
console.log(nextPos(initialPos).flatMap(nextPos));
console.log([initialPos].flatMap(nextPos).flatMap(nextPos).flatMap(nextPos));

const res = [
  (1, "a"),
  (1, "b"),
  (1, "c"),
  (2, "a"),
  (2, "b"),
  (2, "c"),
  (3, "a"),
  (3, "b"),
  (3, "c")
];
