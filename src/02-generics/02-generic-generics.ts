export type Add<T> = (a: T, b: T) => T;


export const add: Add<number> = (a, b) => {
  return a + b;
};

// make the generic only fit a specific string or number

// answer
// export type AddGeneric = <T>(a: T, b: T) => T;


// also make an implementation of that function, you can use the Addable type
// export type Addable = number | string;
//
// export function addAddable<T>(a: T, b: T): T {
//   if (typeof a === 'number' && typeof b === 'number') {
//     const result = a + b;
//     if (typeof result === 'number') {
//       return result as T;
//     }
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     const result = a + b;
//     if (typeof result === 'string') {
//       return result as T;
//     }
//   }
//   throw new Error('not a number or string');
// }

export type Addable = string | number;
export const addAddable: Add<Addable extends string ? string : number> = (a, b) => {
  return a + b;
};


// ===============================
// Don't change below these lines
// ===============================
export const addAddable2: Add<Addable> = (a, b) => {
	//@ts-expect-error
	return a + b
}

addAddable<number>(1, 2);
addAddable<string>('a', 'b');
addAddable2(1, 2);
