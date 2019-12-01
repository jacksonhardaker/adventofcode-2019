import { calculateRecursive } from '../tyranny-of-the-rocket';

describe('Day 1: The Tyranny of the Rocket Equation - Part 2', () => {

  test('for a mass of 12, the result is 2', () => {
    expect(calculateRecursive(12)).toEqual(2);
  });

  test('for a mass of 1969, the result is 966', () => {
    //654 + 216 + 70 + 21 + 5 = 966
    expect(calculateRecursive(1969)).toEqual(966);
  });

  test('for a mass of 100756, the result is 50346', () => {
    //33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346
    expect(calculateRecursive(100756)).toEqual(50346);
  });

});
