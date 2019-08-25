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

  it('subclasses a Tuple', () => {
    expect(vector instanceof Tuple).toEqual(true);
  });

  // Sub Class Sanity Checks
  // Redundant, but worth checking

  it('has an x of 4', () => {
    expect(vector.x).toEqual(4);
  });

  it('has a y of -4', () => {
    expect(vector.y).toEqual(-4);
  });

  it('has a z of 3', () => {
    expect(vector.z).toEqual(3);
  });

  it('has a w of 1', () => {
    expect(vector.w).toEqual(1);
  });

  describe('comparing', () => {
    it('is the same', () => {
      const anotherVector = new Vector(4, -4, 3);
      const theSame = vector.equals(anotherVector);
      expect(theSame).toEqual(true);
    });

    it('is different', () => {
      const anotherVector = new Vector(1, 2, 3);
      const theSame = vector.equals(anotherVector);
      expect(theSame).toEqual(false);
    });
  });

});