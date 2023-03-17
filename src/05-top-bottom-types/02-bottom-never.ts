import {
  Airplane,
  Boat,
} from '../03-unions-intersections/01-discriminated-unions';

class Car {
  drive() {
    console.log('vroom');
  }
}
class Truck {
  tow() {
    console.log('dragging something');
  }
}

type Vehicle = Truck | Car | Airplane | Boat;

const runVehicle = (myVehicle: Vehicle) => {
  // implement if-else or switch statements that will determine the type

  // create a final `else`-block that makes sure all possibilities are covered
  // hint: use the `never` type
};
