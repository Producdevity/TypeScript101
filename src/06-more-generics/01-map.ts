// write the map function so the following works

const theMap = () => {};


// ===============================
// Don't change below these lines
// ===============================
const A: void[] = theMap([''], () => {});
const B: number[] = theMap([''], (_val, i) => i);
const C: string[][] = theMap([''], (_val, _i, arr) => arr);
const D: string[] = theMap(['string', { type: 'object' }], x => {
  if (typeof x === 'string') {
    return x;
  } else {
    return x.type;
  }
});
