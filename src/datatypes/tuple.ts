import Vector from "./vector";

const TupleType = {
  point: 0,
  vector: 1
}

export default class Tuple {
  constructor(
    public x:number,
    public y:number,
    public z:number,
    public w:number
  ) { }

  public add(vector:Vector):Tuple {
    const newX = this.x + vector.x;
    const newY = this.y + vector.y;
    const newZ = this.z + vector.z;
    return new Tuple(newX, newY, newZ, TupleType.vector);
  }
}
