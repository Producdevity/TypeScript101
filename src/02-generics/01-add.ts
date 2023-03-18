export type AddStrings = (a: string, b: string) => string;

// make a generic add type signature to handle any type by accepting an argument



// answer
export type Add<T> = (a: T, b: T) => T;

// tests

export const add: Add<number> = (a, b) => {
  return a + b;
};
