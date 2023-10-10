function nextPos(pos: number) {
  return [pos + 2, pos - 1];
}
const initialPos = 0;

function flatMapExample() {
  const initialPos = 0;
  return nextPos(initialPos).flatMap(nextPos);
}

console.log(nextPos(initialPos)); // [2, -1]
console.log(nextPos(initialPos).flatMap(nextPos)); // [4, 1, 1 -2]
console.log([initialPos].flatMap(nextPos).flatMap(nextPos).flatMap(nextPos));

async function ex() {
  const initialPos = 0;
  const n = await nextPos(initialPos);
  const nn = await nextPos(n);
  return nn;
}

// main :: IO ()
// main = do
//   let l3 = do
//         n <- nextPos 0
//         nn <- nextPos n
//         return nn

//   print l3
