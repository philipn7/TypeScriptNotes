import { Shape } from './Shape';

export class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    return 2 * 3.14 * this.radius;
  }
}
