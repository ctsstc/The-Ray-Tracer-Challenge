import Tuple from "../../src/datatypes/tuple";

const factoryTuplePoint = () => new Tuple(4.3, -4.2, 3.1, 1.0);
const factoryTupleVector = () => new Tuple(4.3, -4.2, 3.1, 0.0);

export {
  factoryTuplePoint,
  factoryTupleVector
};

describe('Tuple', () => {
  describe('is a point', () => {
    let point:Tuple;

    beforeAll(() => {
      point = factoryTuplePoint();
    });

    it('has a valid x', () => {
      expect(point.x).toEqual(4.3);
    });
    it('has a valid y', () => {
      expect(point.y).toEqual(-4.2);
    });
    it('has a valid z', () => {
      expect(point.z).toEqual(3.1);
    });
    it('is a point', () => {
      expect(point.w).toEqual(1.0);
    });
  });
  describe('is a vector', () => {
    let vector:Tuple;

    beforeAll(() => {
      vector = factoryTupleVector();
    });

    it('has a valid x', () => {
      expect(vector.x).toEqual(4.3);
    });
    it('has a valid y', () => {
      expect(vector.y).toEqual(-4.2);
    });
    it('has a valid z', () => {
      expect(vector.z).toEqual(3.1);
    });
    it('is a vector', () => {
      expect(vector.w).toEqual(0.0);
    });
  });
  describe('Adding two tuples - a vector and a point', () => {
    const vector = new Tuple(3, -2, 5, 1);
    const point = new Tuple(-2, 3, 1, 0);

    it('can be compared against another tuple', () => {
      const anotherTuple = new Tuple(3, -2, 5, 1);
      const theSame = vector.equals(anotherTuple);
      expect(theSame).toEqual(true);
    });

    it('is not the same when values do not match', () => {
      const theSame = vector.equals(point);
      expect(theSame).toEqual(false);
    });

    it('produces a point given the applied vector', () => {
      const newPosition = point.add(vector);
      const expectedPosition = new Tuple(1, 1, 6, 1);
      const samePosition = newPosition.equals(expectedPosition);
      expect(samePosition).toEqual(true)
    });
  });
  describe('inverting a tuple', () => {
    const tuple = new Tuple(1, -2, 3, -4);

    it('becomes the opposite', () => {
      const expectedTuple = new Tuple(-1, 2, -3, 4);
      tuple.invert();
      const theSame = tuple.equals(expectedTuple);
      expect(theSame).toEqual(true);
    });
  });
});