// object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// array - need to assume what the order of elements means.
// can break if wrong value is assigned
const pepsi = ['brown', true, 40];

// Tuple
const pepsi1: [string, boolean, number] = ['brown', true, 40];

// Alias
type Drink = [string, boolean, number];
const pepsi2: Drink = ['brown', true, 40];

// Why tuples are not always useful
const carSpecs: [number, number] = [400,3354]
// what do these values mean?
// The object version has key, value which better communicates what the values mean
const carSpecs1 = {
    horsepower: 400,
    weight: 3354
}