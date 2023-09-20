const arr = [1, 2, 3]
const arr2 = arr.map(x => x*2)
const arr3 = arr.flatMap(x => [x, x * 2])

function unit(x) {
    return [x]
}

function flatMap(m, f) {
    return m.flatMap(f)
}

function map(m, f) {
    return flatMap(m, x => unit(f(x)))
}