import { Wall } from './Wall';
import { RectangleWindow } from './RectangleWindow';
import { CircleWindow } from './CircleWindow';

const wall = new Wall(2, 4);
console.log(wall.area());

const window = new RectangleWindow(5, 5);
console.log(window.area());

const circleWindow = new CircleWindow(3);
console.log(circleWindow.area());
