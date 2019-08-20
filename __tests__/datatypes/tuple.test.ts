import { TupleType } from "typescript";

describe('Tuple', () => {
  describe('is a point', () => {
    let point:Tuple;

    beforeAll(() => {
      point = new Tuple(4.3, -4.2, 3.1, 1.0);
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
      vector = new Tuple(4.3, -4.2, 3.1, 0.0);
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
});