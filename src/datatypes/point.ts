import Tuple from "./tuple";
import Vector from "./vector";

export default class Point extends Tuple {
  constructor(x:number, y:number, z:number) {
    super(x, y, z, 0);
  }

  public subtractPoint(point:Point):Vector {
    const tuple = this.subtract(point);
    return new Vector(tuple.x, tuple.y, tuple.z);
  }

  public subtractVector(vector:Vector):Point {
    const tuple = this.subtract(vector);
    return new Point(tuple.x, tuple.y, tuple.z);
  }
}
