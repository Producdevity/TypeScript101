// use intersection types to convert the timestamp into another object

type BirthdayFromBackend = {
  epochMs: number
}

const elonMusksBirthdayData = {
  epochMs: 652602938824,
}

// create a type for a function that "extends" the Birthday type to a Date
type BirthdayFromBackendWithDate = BirthdayFromBackend & {
  jsDate: Date
}

type ToDate = (birthday: BirthdayFromBackend) => BirthdayFromBackendWithDate

// implement the function that uses this type
const calculateDateFromEpochMs: ToDate = elonMusksBirthday => {
  return {
    ...elonMusksBirthday,
    jsDate: new Date(elonMusksBirthday.epochMs),
  }
}

// ===============================
// Don't change below these lines
// ===============================
console.log(calculateDateFromEpochMs(elonMusksBirthdayData).jsDate.getUTCDate())
