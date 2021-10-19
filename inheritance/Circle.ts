export abstract class Circle {
  abstract radius: number;
  area(): number {
    return 2 * 3.14 * this.radius;
  }
}
