class Airplane {
  fly() {
    console.log("flying")
  }
}

class Boat {
  sail() {
    console.log("sailing")
  }
}

class Car {
  drive() {
    console.log("vroom")
  }
}
class Truck {
  tow() {
    console.log("dragging something")
  }
}

type Vehicle = Truck | Car | Airplane | Boat

const assertNever = (value: never): never => {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`)
}

const runVehicle = (myVehicle: Vehicle) => {
  // implement if-else or switch statements that will determine the type
  if (myVehicle instanceof Car) {
    myVehicle.drive();
  } else if (myVehicle instanceof Truck) {
    myVehicle.tow();
  } else if (myVehicle instanceof Airplane) {
    myVehicle.fly();
  } else if (myVehicle instanceof Boat) {
    myVehicle.sail();
  } else {
    assertNever(myVehicle);
  }

  // create a final `else`-block that makes sure all possibilities are covered
  // hint: use the `never` type
}
