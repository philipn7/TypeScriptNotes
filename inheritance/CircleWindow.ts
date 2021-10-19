import { Circle } from './Circle';

export class CircleWindow extends Circle {
  constructor(public radius: number) {
    super();
  }

  open: boolean = false;

  toggleOpen(): void {
    this.open = !this.open;
  }
}
