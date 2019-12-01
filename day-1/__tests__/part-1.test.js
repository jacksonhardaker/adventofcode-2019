import { calculate } from '../tyranny-of-the-rocket';

describe('Day 1: The Tyranny of the Rocket Equation - Part 2', () => {

  test('for a mass of 12, the result is 2', () => {
    expect(calculate(12)).toEqual(2);
  });
  
  test('for a mass of 14, the result is 2', () => {
    expect(calculate(14)).toEqual(2);
  });

  test('for a mass of 1969, the result is 654', () => {
    expect(calculate(1969)).toEqual(654);
  });
  
  test('for a mass of 100756, the result is 33583', () => {
    expect(calculate(100756)).toEqual(33583);
  });

});
