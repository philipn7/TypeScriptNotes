# Types
## Type -  Easy way to refer to the different properties & functions that a value has.

Every value in typescript has a type.

* Primitive types: string, number, symbol, boolean, void, null, undefined
* Object types: functions, classes, arrays, objects ( The reason it's separated is because Object types can be manipulated into think it's another type. Why? Explained later in the course...)

Plain JavaScript is dynamically typed. Using types helps with error checking before compilation and helps others better understand the code.

Objects can have multiple types. Example, object 'hondaCivic' can be created from the class 'Car' and fulfill the interface 'Drivable'. Typescript does an 'implicit check' to see that the interface definition is met.

## How do we define what type a value is?
### Type annotations
```
const apples: number = 5;

// Object literal - kind of like defining a Type inline.
let point: {x: number; y: number} = {
    x: 10,
    y: 20
}

// Function - `: (i: number) => void` part tells typescript the input/output of function
// Cleaner declaration is shown below!
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};
```

### Type inference

Happens when variable is declared and initialized on the same line.
```
const apples: number = 5;
```

## So when do we use type inference?
**As much as we can.**

We use Type annotation when:
* a function returns the 'any' type and we need to clarify the value
* we declare a variable on one line and then init on another
* we want a variable to have a type that can't be inferred

## Functions Annotations
* In this course, We will always set the return type in our functions. This catches the error of forgetting the return statement and it's type.
```
const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b:number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number{
    return a * b;
}

const throwError = (message: string): never => {
    throw new Error(message);
    // technically does not return anything, so type is 'never'
    // this is a corner case, typically we do TRY to return something.
}
```