function nextPos(pos) {
    return [pos + 2, pos - 1]
}
const initialPos = 0

console.log(nextPos(initialPos))
console.log(nextPos(initialPos).flatMap(nextPos))
console.log([initialPos].flatMap(nextPos).flatMap(nextPos).flatMap(nextPos))