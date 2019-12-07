import { compute } from '../sunny-with-asteroids';

describe('Day 5: Sunny with a Chance of Asteroids - Part 2', () => {

  describe('equal to, position mode', () => {
    test('3,9,8,9,10,9,4,9,99,-1,8 with input 8', () => {
      const result = compute([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 8);

      expect(result.pop()).toEqual(1);
    });

    test('3,9,8,9,10,9,4,9,99,-1,8 with input 9', () => {
      const result = compute([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8], 9);

      expect(result.pop()).toEqual(0);
    });
  });

  describe('less than, position mode', () => {
    test('3,9,7,9,10,9,4,9,99,-1,8 with input 3', () => {
      const result = compute([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 3);

      expect(result.pop()).toEqual(1);
    });

    test('3,9,7,9,10,9,4,9,99,-1,8 with input 9', () => {
      const result = compute([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8], 9);

      expect(result.pop()).toEqual(0);
    });
  });

  describe('equal to, immediate mode', () => {
    test('3,3,1108,-1,8,3,4,3,99 with input 8', () => {
      const result = compute([3, 3, 1108, -1, 8, 3, 4, 3, 99], 8);

      expect(result.pop()).toEqual(1);
    });

    test('3,3,1108,-1,8,3,4,3,99 with input 9', () => {
      const result = compute([3, 3, 1108, -1, 8, 3, 4, 3, 99], 9);

      expect(result.pop()).toEqual(0);
    });
  });

  describe('less than, immediate mode', () => {
    test('3,3,1107,-1,8,3,4,3,99 with input 3', () => {
      const result = compute([3, 3, 1107, -1, 8, 3, 4, 3, 99], 3);

      expect(result.pop()).toEqual(1);
    });

    test('3,3,1107,-1,8,3,4,3,99 with input 9', () => {
      const result = compute([3, 3, 1107, -1, 8, 3, 4, 3, 99], 9);

      expect(result.pop()).toEqual(0);
    });
  });

  describe('jump, position mode', () => {

    test('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 with input 9', () => {
      const result = compute([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 9);

      expect(result.pop()).toEqual(1);
    });

    test('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 with input 0', () => {
      const result = compute([3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9], 0);

      expect(result.pop()).toEqual(0);
    });

  });

  describe('jump, immediate mode', () => {

    test('3,3,1105,-1,9,1101,0,0,12,4,12,99,1 with input 9', () => {
      const result = compute([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 9);

      expect(result.pop()).toEqual(1);
    });

    test('3,3,1105,-1,9,1101,0,0,12,4,12,99,1 with input 0', () => {
      const result = compute([3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1], 0);

      expect(result.pop()).toEqual(0);
    });

  });

  describe('complicated', () => {
    const memory = [3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31, 1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104, 999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99];

    test('is 999 if input is below 8', () => {
      const result = compute(memory, 4);

      expect(result.pop()).toEqual(999);
    });

    test('is 1000 if input is equal to 8', () => {
      const result = compute(memory, 8);

      expect(result.pop()).toEqual(1000);
    });

    test('is 1001 if input is greater than 8', () => {
      const result = compute(memory, 888);

      expect(result.pop()).toEqual(1001);
    });
  });
});
