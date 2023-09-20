function readAndTimes2() {
    const res = readInput() // IO Number
    return res * 2 // wrong, can't multiply IO by 2
}

function readAndTimes2() {
    const res = readinput() // IO Number
    return res.map(n => n*2) // correct!
}

function multiply() {
    const res1 = readInput()
    const res2 = readInput()
    return res1 + res2; // wrong! cannot add 2 io actions together
}

function multiply() {
    const res1 = readInput()
    const res2 = readInput()
    return res1.flatMap(n1 => res2.flatMap(n2 => unit(n1 + n2)));
}