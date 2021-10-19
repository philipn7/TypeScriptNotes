import { Shape } from './Shape';

export class Window implements Shape {
  constructor(public dimensions: Shape, public open: boolean) {}

  toggleOpen(): void {
    this.open = !this.open;
  }

  area(): number {
    return this.dimensions.area();
  }
}
