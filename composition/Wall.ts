import { Shape } from './Shape';

export class Wall {
  constructor(public dimensions: Shape, public color: string) {}

  area(): number {
    return this.dimensions.area();
  }
}
