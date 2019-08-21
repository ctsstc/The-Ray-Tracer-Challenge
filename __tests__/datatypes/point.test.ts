import Point from "../../src/datatypes/point";
import Tuple from "../../src/datatypes/tuple";

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
});