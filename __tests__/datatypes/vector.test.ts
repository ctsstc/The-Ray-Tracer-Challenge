import Vector from "../../src/datatypes/vector";
import Tuple from "../../src/datatypes/tuple";

const factoryVector = () => new Vector(4, -4, 3);

export {
  factoryVector
}

describe('Vector', () => {
  let vector:Vector;

  beforeAll(() => {
    vector = factoryVector();
  });

  it('is a Tuple', () => {
    expect(vector instanceof Tuple).toEqual(true);
  });

  it('has a w of 1 ', () => {
    expect(vector.w).toEqual(1);
  });
});