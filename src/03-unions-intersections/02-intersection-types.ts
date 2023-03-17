// use intersection types to convert the timestamp into another object

type BirthdayFromBackend = {
  epochMs: number;
};

const albertsBirthday = {
  epochMs: 652602938824,
};

// create a type for a function that "extends" the Birthday type to a Date
type BirthdayFromBackendWithDate = BirthdayFromBackend & {
  jsDate: Date;
}


type ToDate = (birthday: BirthdayFromBackend) => BirthdayFromBackendWithDate;

// implement the function that uses this type
const calculateDateFromEpochMs: ToDate = (albertsBirthday) => {
  return {
    ...albertsBirthday,
    jsDate: new Date(albertsBirthday.epochMs),
  };
}

// ===============================
// Don't change below these lines
// ===============================
console.log(calculateDateFromEpochMs(albertsBirthday).jsDate.getUTCDate());
