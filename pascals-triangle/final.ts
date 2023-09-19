function nextRow(prevRow: number[]): number[] {
  const nextRow = [1];
  for (let i = 1; i < prevRow.length; i++) {
    nextRow.push(prevRow[i - 1] + prevRow[i]);
  }
  nextRow.push(1);
  return nextRow;
}

function generatePascalTriangle(numRows: number): number[][] {
  let pascalTriangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      pascalTriangle.push([1]);
    } else {
      pascalTriangle.push(nextRow(pascalTriangle[i - 1]));
    }
  }

  return pascalTriangle;
}
describe("generatePascalTriangle", () => {
  it("should generate the correct pascal triangle", () => {
    expect(generatePascalTriangle(1)).toEqual([[1]]);
    expect(generatePascalTriangle(2)).toEqual([[1], [1, 1]]);
    expect(generatePascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    expect(generatePascalTriangle(4)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1]
    ]);
  });
});

const pascalTriangle = generatePascalTriangle(6);
pascalTriangle.forEach((row) => console.log(row));
