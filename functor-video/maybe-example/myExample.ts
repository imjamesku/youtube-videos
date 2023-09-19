// function to split string into array of strings
function splitBySpace(str: string) {
  return str.split(" ");
}

// function to get the first n elements of an array
function take(n: number) {
  return function (arr: string[]) {
    return arr.slice(0, n);
  };
}

function getString() {
  return "....";
}
