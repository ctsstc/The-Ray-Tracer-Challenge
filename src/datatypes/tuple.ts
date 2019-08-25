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

  protected add(tuple:Tuple):Tuple {
    const newX = this.x + tuple.x;
    const newY = this.y + tuple.y;
    const newZ = this.z + tuple.z;
    const newW = this.w + tuple.w;
    return new Tuple(newX, newY, newZ, newW);
  }

  protected subtract(tuple:Tuple):Tuple {
    tuple.invert();
    return this.add(tuple);
  }

  private invert() {
    this.x = this.x *-1;
    this.y = this.y *-1;
    this.z = this.z *-1;
    this.w = this.w *-1;
  }

  public equals(tuple:any) {
    return JSON.stringify(this) == JSON.stringify(tuple);
  }
}
