# Classes
## Blueprint to create an object with some fields and methods to represent a 'thing'
Example of inheritance.

```
// Inheritence
class Car extends Vehicle {
	// Override
	drive(): void {
	console.log('vroom');
}
```

## Instance method modifiers
| Modifier | What do |
| -------- | ------- |
| public   | method can be called anywhere |
| private  | only be called by other methods **in this class** |
| protected | private + also allow child classes to call |

## Fields
```
class Vehicle {
    color: string;
	
	constructor(color: string) {
		this.color = color;
    }
}
```
or as a shortcut we can use modifiers and skip writing the initialization and assignment lines.
```
class Vehicle {
	constructor(public color: string) {
    }
}
```