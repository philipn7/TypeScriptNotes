# Interfaces
## Creates a new type, describing the property names and value types of an object

One use is to clean up long annotations:
```
// The annotation below is long, we can clean that up.
const printVehicle = (vehicle: { name: string, year: number, broken: boolean}): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
```

```
interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
};

// Interface used instead
const printVehicle = (vehicle: Vehicle): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken: ${vehicle.broken}`);
};
```

Creating this interface means that Typescript will check the description of the passed object matches the interface. An error is thrown if the value or variable name does not match.

## Syntax around interfaces
Can also have functions are part of the interface description. This is very similar to C/C++ header file declarations.
```
interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;  // summary function that returns string.
};
```
The object must contain all the properties from the interface to be considered the correct type.