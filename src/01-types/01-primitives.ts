// complete these lines

type ANumber = undefined
type AString = undefined
type ABoolean = undefined
type AnEmpty = undefined

// use unions of the above
type APrimitive = undefined

// use APrimitive to describe an object with keys as string, and values as APrimitive
type AnObject = undefined

// ===============================
// Don't change below these lines
// ===============================
let i: ANumber = 0;
let s: AString = '';
let b: ABoolean = true;
let e: AnEmpty = null;
let o: AnObject = { haha: 'blaat' };

//@ts-expect-error
i = '';
//@ts-expect-error
s = 0;
//@ts-expect-error
b = undefined;
//@ts-expect-error
e = {};
o = {
  //@ts-expect-error
  haha: {
    test: 1,
  },
};
