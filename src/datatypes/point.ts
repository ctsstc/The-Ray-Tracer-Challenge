import Tuple from "./tuple";
import Vector from "./vector";

export default class Point extends Tuple {
  constructor(x:number, y:number, z:number) {
    super(x, y, z, 0);
  }

  public subtract(point:Point):Vector {
    const newX = this.x - point.x;
    const newY = this.y - point.y;
    const newZ = this.z - point.z;
    return new Vector(newX, newY, newZ);
  }
}
