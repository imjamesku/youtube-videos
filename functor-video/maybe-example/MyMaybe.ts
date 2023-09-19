// // Maybe class definition
// class Maybe<T> {
//   private value: T | null;

//   private constructor(value: T | null) {
//     this.value = value;
//   }

//   // Static factory method to create a Maybe instance
//   static just<T>(value: T): Maybe<T> {
//     return new Maybe(value);
//   }

//   // Static factory method for an empty Maybe instance
//   static nothing<T>(): Maybe<T> {
//     return new Maybe<T>(null);
//   }

//   // Apply a function to the value inside Maybe and return a new Maybe
//   map<U>(fn: (value: T) => U): Maybe<U> {
//     if (this.value === null) {
//       return Maybe.nothing();
//     } else {
//       return Maybe.just(fn(this.value));
//     }
//   }

//   // Get the value if it exists, or return a default value if it's Nothing
//   orDefault(defaultValue: T): T {
//     return this.value === null ? defaultValue : this.value;
//   }

//   // Return true if Maybe contains a value, false otherwise
//   isJust(): boolean {
//     return this.value !== null;
//   }

//   // Return true if Maybe is Nothing, false otherwise
//   isNothing(): boolean {
//     return this.value === null;
//   }
// }

// // Usage example
// const maybeNumber: Maybe<number> = Maybe.just(42);

// const doubledNumber: Maybe<number> = maybeNumber.map((x) => x * 2);
// console.log(doubledNumber.getOrElse(-1)); // Output: 84

// const maybeString: Maybe<string> = Maybe.nothing();
// const uppercaseString: Maybe<string> = maybeString.map((str) =>
//   str.toUpperCase()
// );
// console.log(uppercaseString.getOrElse("N/A")); // Output: "N/A"
