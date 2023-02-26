class Elevator {
  currentFloor: number;

  constructor() {
    this.currentFloor = 1;
  }

  goUp() {
    this.currentFloor++;
    return this;
  }

  goDown() {
    this.currentFloor--;
    return this;
  }
}

const elevator = new Elevator();
elevator.goUp().goUp().goDown();
