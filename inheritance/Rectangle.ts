export abstract class Rectangle {
  abstract height: number;
  abstract width: number;
  area(): number {
    return this.height * this.width;
  }
}
