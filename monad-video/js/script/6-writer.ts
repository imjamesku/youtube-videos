interface Writer1<T> {
    value: T,
    log: string[]
}

function applyWriter<T>(w: Writer<T>, f: (x: T) => Writer<T>): Writer<T> {
    const result = f(w.value);
    return {
        value: result.value,
        log: w.log.concat(result.log)
    }
}

function add2(n): Writer<number> {
    return {
        value: n + 2,
        log: [`add2(${n})`]
    }
}

function mult3(n): Writer<number> {
    return {
        value: n * 3,
        log: [`mult3(${n})`]
    }
}