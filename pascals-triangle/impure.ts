function generatePascalTriangle(numRows: number) {
  let prevRow: number[] = [];

  for (let i = 0; i < numRows; i++) {
    let pascalRow: number[] = new Array(i + 1).fill(0);
    pascalRow[0] = 1;
    pascalRow[i] = 1;

    for (let j = 1; j < i; j++) {
      pascalRow[j] = prevRow[j - 1] + prevRow[j];
    }

    console.log(pascalRow);
    prevRow = pascalRow;
  }
}

// Test the function by generating Pascal's Triangle with 5 rows
generatePascalTriangle(5);
