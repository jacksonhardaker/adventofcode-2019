import { compute } from '../sunny-with-asteroids';

describe('Day 5: Sunny with a Chance of Asteroids - Part 1', () => {

  test('1002,4,3,4,33', () => {
    const result = compute([1002,4,3,4,33]);

    expect(result).toEqual([]);
  });

  test('3,0,4,0,99 with input 55', () => {
    const result = compute([3,0,4,0,99], 55);

    expect(result.pop()).toEqual(55);
  });
});
