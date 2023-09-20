class Writer<T> {
    value: T;
    log: string[];

    constructor(value: T, log: string[]){
        this.value = value;
        this.log = log;
    }

    flatMap<U>(f: (x: T) => Writer<U>): Writer<U> {
        const result = f(this.value);
        return new Writer(result.value, this.log.concat(result.log));
    }

    tell(log: string): Writer<T> {
        return new Writer(this.value, this.log.concat(log));
    }

    static unit<T>(x: T): Writer<T> {
        return new Writer(x, []);
    }

    static create<T>(x: T, log: string[]): Writer<T> {
        return new Writer(x, log);
    }

}

function add2(n): Writer<number> {
    return Writer.create(n + 2, [`add2(${n})`]);
}

function mult3(n): Writer<number> {
    return Writer.create(n * 3, [`mult3(${n})`]);
}

const res = Writer.unit(1).flatMap(add2).tell("inserted").flatMap(mult3);

console.log(res.value);
console.log(res.log)


// imaginary async like do notation
async function imaginaryAsyncLikeDoNotation(): Writer<number> {
    const x = await add2(1);
    tell("inserted");
    const y = mult3(x);
    return y
}