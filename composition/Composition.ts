import { Rectangle } from './Rectangle';
import { Wall } from './Wall';
import { Window } from './Window';
import { Circle } from './Circle';

const wall = new Wall(new Rectangle(2, 8), 'red');
console.log(`Rectangular wall area: ${wall.area()}`);

const window = new Window(new Rectangle(5, 8), false);
console.log(`Rectangular window area: ${window.area()}`);

const circleWindow = new Window(new Circle(13), false);
console.log(`Circular window area: ${circleWindow.area()}`);
