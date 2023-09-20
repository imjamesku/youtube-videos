// State Monad
class State {
    constructor(run) {
      this.run = run;
    }
  
    static of(value) {
      return new State(s => [value, s]);
    }
  
    map(f) {
      return new State((s) => {
        const [a, newState] = this.run(s);
        return [f(a), newState];
      });
    }
  
    flatMap(f) {
      return new State((s) => {
        const [a, newState] = this.run(s);
        const newStateInstance = f(a);
        return newStateInstance.run(newState);
      });
    }
  }
  

  
  // Generate N random numbers using State Monad
  function randomNumbersS(n) {
    if (n === 0) return State.of([]);
  
    // Helper function to create a State instance for nextRandom
    const nextRandomS = new State(nextRandom);
    return nextRandomS.flatMap(r =>
      randomNumbersS(n - 1).map(rs => [r, ...rs])
    );
  }
  
  // Usage
  const initialState = 42;
  const randomNumbersState = randomNumbersS(5);
  const [nums, _] = randomNumbersState.run(initialState);
  
  console.log(nums); // Output will be 5 pseudo-random numbers
  