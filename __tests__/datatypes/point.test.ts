import Point from "../../src/datatypes/point";
import Tuple from "../../src/datatypes/tuple";
import Vector from "../../src/datatypes/vector";
import { factoryVector } from "./vector.test";

const factoryPoint = () => new Point(4, -4, 3);

export {
  factoryPoint as factoryVector
}

describe('Point', () => {
  let point:Point;

  beforeAll(() => {
    point = factoryPoint();
  });

  it('subclasses a Tuple', () => {
    expect(point instanceof Tuple).toEqual(true);
  });

  // Sub Class Sanity Checks
  // Redundant, but worth checking

  it('has an x of 4', () => {
    expect(point.x).toEqual(4);
  });

  it('has a y of -4', () => {
    expect(point.y).toEqual(-4);
  });

  it('has a z of 3', () => {
    expect(point.z).toEqual(3);
  });

  it('has a w of 0', () => {
    expect(point.w).toEqual(0);
  });

  describe('subtracting two points', () => {
    const point1 = new Point(3, 2, 1);
    const point2 = new Point(5, 6, 7);

    it('returns a new vector', () => {
      const vector = point1.subtractPoint(point2);
      const expectedVector = new Vector(-2, -4, -6)
      const theSame = vector.equals(expectedVector);
      expect(theSame).toEqual(true);
    });
  });

  describe('subtracting a vector', () => {
    const vector = factoryVector();

    it('returns a point', () => {
      const newPoint = point.subtractVector(vector);
      const expectedPoint = new Point(1, 2, 3);
      const theSame = newPoint.equals(expectedPoint);
      expect(theSame).toEqual(true);
    });
  });
});