function readLine(question: string) {}

const res = readLine("What is your name?");

function greet(): IO<number> {
  console.log("hello");
  return 1;
}

function a(): IO<number> {
  b();
  ...
  return "success";
}

function b(): IO<number> {
    c();
    ...
    return 1;
}

function c(): IO<number> {
  ...
  return greet().flatMap((_) => greet());
}
