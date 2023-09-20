type IO<T> ={
    value: T,
    map: <U>(f: (x: T) => U) => IO<U>
    flatMap: <U>(f: (x: T) => IO<U>) => IO<U>
}

function getInput(): IO<number> {
    return { value: 1 };
}

function ex1() { // cannot directly multiply IO
    const input = getInput();
    console.log(input * 2);
    // there are 2 issues here:
    // cannot directly multiply IO
    // cannot directly log IO
}

function ex2() {
    const input = getInput();
    console.log(input.map(x => x*2)) // nice, but what if we want to multiply by another input?
}

function ex3() {
    const input1 = getInput();
    const input2 = getInput();
    console.log(input1.map(x => input2.map(y => x*y))) // issue: IO<IO<number>>
}

function ex4() {
    // we need flatMap
    const input1 = getInput();
    const input2 = getInput();
    console.log(input1.flatMap(x => input2.map(y => x*y))) // final issue: cannot log IO
}

function ex5() {
    // let's assume the console.log function has type: any -> IO()
    const input1 = getInput();
    const input2 = getInput();
    input1.flatMap(x => input2.map(y => x*y)).flatMap(n => console.log(n))
}