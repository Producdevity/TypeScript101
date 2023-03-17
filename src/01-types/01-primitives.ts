// complete these lines

type ANumber = number
type AString = string
type ABoolean = boolean
type AnEmpty = null

// use unions of the above
type APrimitive = ANumber | AString | ABoolean | AnEmpty

// use APrimitive to describe an object with keys as string, and values as APrimitive
type AnObject = { [key: string]: APrimitive }

// ===============================
// Don't change below these lines
// ===============================
let i: ANumber = 0
let s: AString = ""
let b: ABoolean = true
let e: AnEmpty = null
let o: AnObject = { hello: "world" }

//@ts-expect-error
i = ""
//@ts-expect-error
s = 0
//@ts-expect-error
b = undefined
//@ts-expect-error
e = {}
o = {
  //@ts-expect-error
  haha: {
    test: 1,
  },
}
