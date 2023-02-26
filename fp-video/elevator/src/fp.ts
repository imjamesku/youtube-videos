interface ElevatorState {
  currentFloor: number;
}

function goUp(state: ElevatorState): ElevatorState {
  return {
    currentFloor: state.currentFloor + 1,
  };
}

function goDown(state: ElevatorState): ElevatorState {
  return {
    currentFloor: state.currentFloor - 1,
  };
}

const initialState: ElevatorState = {
  currentFloor: 1,
};

const finalState = goDown(goUp(goUp(initialState)));

console.log(finalState.currentFloor);
