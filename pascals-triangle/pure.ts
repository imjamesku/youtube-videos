function generatePascalTriangle(numRows: number): number[][] {
  let pascalTriangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    pascalTriangle[i] = new Array(i + 1);

    // Set the beginning and end of the row to 1
    pascalTriangle[i][0] = 1;
    pascalTriangle[i][i] = 1;

    // Calculate the interior elements of the row
    for (let j = 1; j < i; j++) {
      pascalTriangle[i][j] =
        pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
  }

  return pascalTriangle;
}

// Test the function by generating Pascal's Triangle with 5 rows
console.log(generatePascalTriangle(5));
