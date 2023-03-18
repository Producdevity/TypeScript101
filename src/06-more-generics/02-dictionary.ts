import assert from "assert"

///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
  apple: { color: "red", mass: 100 },
  grape: { color: "red", mass: 5 },
  banana: { color: "yellow", mass: 183 },
  lemon: { color: "yellow", mass: 80 },
  pear: { color: "green", mass: 178 },
  orange: { color: "orange", mass: 262 },
  raspberry: { color: "red", mass: 4 },
  cherry: { color: "red", mass: 5 },
}

interface Dict<T> {
  [k: string]: T
}

// Array.prototype.map, but for Dict
// function mapDict(...args: any[]): any {}

function mapDict<T, U>(
  dict: Dict<T>,
  mapper: (value: T, key: string, dict: Dict<T>) => U,
): Dict<U> {
  const result: Dict<U> = {}
  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      result[key] = mapper(dict[key], key, dict)
    }
  }
  return result
}
// Array.prototype.filter, but for Dict
// function filterDict(...args: any[]): any {}
function filterDict<T>(
  dict: Dict<T>,
  predicate: (value: T, key: string, dict: Dict<T>) => boolean,
): Dict<T> {
  const result: Dict<T> = {}
  for (const key in dict) {
    if (dict.hasOwnProperty(key) && predicate(dict[key], key, dict)) {
      result[key] = dict[key]
    }
  }
  return result
}
// Array.prototype.reduce, but for Dict
// function reduceDict(...args: any[]): any {}

function reduceDict<T, U>(
  dict: Dict<T>,
  reducer: (accumulator: U, value: T, key: string, dict: Dict<T>) => U,
  initialValue: U,
): U {
  let accumulator = initialValue
  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      accumulator = reducer(accumulator, dict[key], key, dict)
    }
  }
  return accumulator
}

// ===============================
// Don't change below these lines
// ===============================

// MAP
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}))
const lemonName: string = fruitsWithKgMass.lemon.name
// @ts-ignore-error
const failLemonName: number = fruitsWithKgMass.lemon.name
assert.ok(fruitsWithKgMass, "[MAP] mapDict returns something truthy")
assert.equal(
  fruitsWithKgMass.cherry.name,
  "cherry",
  '[MAP] .cherry has a "name" property with value "cherry"',
)
assert.equal(
  fruitsWithKgMass.cherry.kg,
  0.005,
  '[MAP] .cherry has a "kg" property with value 0.005',
)
assert.equal(
  fruitsWithKgMass.cherry.mass,
  5,
  '[MAP] .cherry has a "mass" property with value 5',
)
assert.equal(
  Object.keys(fruitsWithKgMass).length,
  8,
  "[MAP] fruitsWithKgMass should have 8 keys",
)

// FILTER
// only red fruits
const redFruits = filterDict(fruits, fruit => fruit.color === "red")
assert.ok(redFruits, "[FILTER] filterDict returns something truthy")
assert.equal(
  Object.keys(redFruits).length,
  4,
  "[FILTER] 4 fruits that satisfy the filter",
)
assert.equal(
  Object.keys(redFruits).sort().join(", "),
  "apple, cherry, grape, raspberry",
  '[FILTER] Keys are "apple, cherry, grape, raspberry"',
)

// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
  0,
)
assert.ok(redFruits, "[REDUCE] reduceDict returns something truthy")
assert.equal(
  typeof oneOfEachFruitMass,
  "number",
  "[REDUCE] reduceDict returns a number",
)
assert.equal(
  oneOfEachFruitMass,
  817,
  "[REDUCE] 817g mass if we had one of each fruit",
)
