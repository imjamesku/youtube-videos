// [1,2,3,4,5,6] -> [2,4,6]

filter((n) => n % 2 === 0, [1, 2, 3, 4, 5, 6]);

// (number[], Function) -> number[]
// number[] -> Function -> number[]
// 展開之後
// number[] -> (number->boolean) -> number[]
