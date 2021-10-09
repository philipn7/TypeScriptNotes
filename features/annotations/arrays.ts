const carMakers: string[] = ['mazda', 'toyota', 'chevy'];

const carsByMake: string[][] = [
    ['mazdaspeed3'],
    ['corolla'],
    ['chevy']
]

// In both of these examples, it's sufficient to leave out the annotations if the array is initialized with values.

// Array with multiple different types
// use the pipe operator | as or.
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
