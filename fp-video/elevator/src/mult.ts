// print multiplication table 9 * 9
for (let i = 1; i <= 9; i++) {
  let line = '';
  for (let j = 1; j <= 9; j++) {
    line += `${i * j},`;
  }
  console.log(line);
}
