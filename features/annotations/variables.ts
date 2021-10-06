const apples: number = 5;
let speed: string = 'fast';

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Array
let colors: string[] = ['red', 'green', 'blue'];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal - kind of like defining a Type inline.
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Function - `: (i: number) => void` tells typescript the input/output of function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json);
console.log(coordinates); // x: any, y: any
// In this example, JSON.parse will create an object with any type attributes.
// this is where annotations would help:
const coordinates1: { x: number; y: number} = JSON.parse(json);
console.log(coordinates); // x: number, y: number

// 2) When we declare variable on one line and init on another

// 3) Variable whos type cannot be inferred correctly
