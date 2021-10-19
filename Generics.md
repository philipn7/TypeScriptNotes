# Generics

Allows us to create components that can be reused for a variety of types rather than a single one.

## Type Inference
Much like how types can be automatically inferenced when creating a variable. The generic type can be inferenced too if we leave out the <> type specifier.

The type can be inferenced when creating classes and also for generic functions. Although, best practice is to not use inference in these cases so that TypeScript can catch errors.

## Generic Constraints
What if I want to use a method from a type in a generic class? TypeScript will complain that the Generic type does not have that method. What we can do is use an interface to constrain the Generic type thus telling TypeScript we promise the generic will have the same properties as the interface.
```
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
```
Note the 'T extends Printable' section of code. This will come up all the time.