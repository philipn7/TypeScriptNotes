import { Shape } from './Shape';

export class Rectangle implements Shape {
  constructor(public height: number, public width: number) {}

  area(): number {
    return this.height * this.width;
  }
}
