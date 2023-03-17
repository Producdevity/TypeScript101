// if it looks like a duck, it walks like a duck, and it talks like a duck... it's probably a duck

class Fish {
  swim() {
    console.log('swim swim');
  }
}

class Dog {
  bark() {
    console.log('woof woof');
  }
}

type Animal = Dog | Fish;

// create a function that determines the type
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

// answer

const animal: Animal = new Fish();
export const isFish = undefined

function initiateSignatureMove(animal: Dog | Fish) {
  // implement this function
  // answer
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.bark();
  }
}

const animal: Animal = new Fish();
initiateSignatureMove(animal);

