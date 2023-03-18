// create a discriminated union for 'vehicle' and its 'property'
// - airplane, passengerAmount (value = passengerAmount * 100_000)
// - car, cilinderSize (value = cilinderSize (l) * 10_000)
// - boat, length (value = length * stories * 2_500)

export type Airplane = {}

export type Car = {}

export type Boat = {}

type TransportVehicles = Airplane | Car | Boat

// implement this function using the discriminated unions
const calculateValue = (vehicle: TransportVehicles) => {}
