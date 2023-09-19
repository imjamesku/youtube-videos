import * as O from "fp-ts/lib/Option";

const maybe = O.of(2);
O.map((n: number) => n * 2)(maybe);

O.match(
  () => console.log("Nothing"),
  (n: number) => console.log(`Just ${n}`)
)(maybe);
