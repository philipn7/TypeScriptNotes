import { Rectangle } from './Rectangle';

export class Wall extends Rectangle {
  constructor(public height: number, public width: number) {
    super();
  }
}
