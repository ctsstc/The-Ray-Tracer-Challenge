import Tuple from "./tuple";

export default class Vector extends Tuple {
  constructor(x:number, y:number, z:number) {
    super(x, y, z, 1);
  }

  public subtractVector(vector:Vector):Vector {
    const tuple = this.subtract(vector);
    return new Vector(tuple.x, tuple.y, tuple.z);
  }
}
