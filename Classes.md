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

## Export Classes
`export` keyword before an object to allow it to be used in a different file.

To import use `import { thing1, thing2 } from './Class';`
Individual objects are imported from Class.

`default` keyword sets the default export objects and is imported using `import things from './Class';`. This is more typical of how React imports.

In typescript, the convention is to use `export`


## Static Class Methods
A method that can be called from an uninstantiated class. ( Don't need to create the instance of the class before using the method.)

Great use for this within the composition hierarchy is to have it instantiate our class with predefined child classes. For example: 
```
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
);
```
can be shortened to: 
`const summary = Summary.winsConsoleOut('Man United');`
With this static method in the Summary class:
```
static winsAnalysisWithHtmlReport(team: string): Summary {
  return new Summary(new WinsAnalysis(team), new HtmlReport());
}
```
Another advantage of this is it reduces the number of imports required to use the Summary class (don't need to import 'WinsAnalysis' or 'ConsoleOutput'. Only import 'Summary')