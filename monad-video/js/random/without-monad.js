function nextRandom(s) {
    const newVal = (s * 1103515245 + 12345) % Math.pow(2, 31);
    const newState = newVal;
    return [newVal, newState];
  }
  
  function randomNumbers(n, s) {
    let nums = [];
    let currentState = s;
  
    for (let i = 0; i < n; i++) {
      let [val, newState] = nextRandom(currentState);
      nums.push(val);
      currentState = newState;
    }
  
    return [nums, currentState];
  }
  
  const initialState = 42;
  const [nums, _] = randomNumbers(5, initialState);
  console.log(nums); // Output will be 5 pseudo-random numbers
  