import { Rectangle } from './Rectangle';

export class RectangleWindow extends Rectangle {
  constructor(public height: number, public width: number) {
    super();
  }

  open: boolean = false;

  toggleOpen(): void {
    this.open = !this.open;
  }
}
