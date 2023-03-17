// create a discriminated union for 'vehicle' and its 'property'
// - airplane, passengerAmount (value = passengerAmount * 100_000)
// - car, cilinderSize (value = cilinderSize (l) * 10_000)
// - boat, length (value = length * stories * 2_500)

export type Airplane = {
  vehicle: 'airplane',
  passengerAmount: number
};

export type Car = {
  vehicle: 'car',
  cilinderSize: number,
};

export type Boat = {
  vehicle: 'boat',
  length: number,
  stories: number,
};

type TransportVehicles = Airplane | Car | Boat;


// implement this function using the discriminated unions
const calculateValue = (vehicle: TransportVehicles) => {
  switch (vehicle.vehicle) {
    case 'airplane':
      return vehicle.passengerAmount * 100_000;
    case 'car':
      return vehicle.cilinderSize * 10_000;
    case 'boat':
      return vehicle.length * vehicle.stories * 2_500;
    default:
      let nope: never;
      nope = vehicle;
      break;
  }
};
