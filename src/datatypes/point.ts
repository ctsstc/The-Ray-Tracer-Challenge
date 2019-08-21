import Tuple from "./tuple";

export default class Point extends Tuple {
  constructor(x:number, y:number, z:number) {
    super(x, y, z, 0);
  }
}
