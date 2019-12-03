import { calculate } from '../tyranny-of-the-rocket';

describe('Day 1: The Tyranny of the Rocket Equation - Part 2', () => {

  test('for a mass of 12, the result is 2', () => {
    const fuelRequired = calculate(12);
    expect(fuelRequired).toEqual(2);
  });
  
  test('for a mass of 14, the result is 2', () => {
    const fuelRequired = calculate(14);
    expect(fuelRequired).toEqual(2);
  });
  
  test('for a mass of 1969, the result is 654', () => {
    const fuelRequired = calculate(1969);
    expect(fuelRequired).toEqual(654);
  });
  
  test('for a mass of 100756, the result is 33583', () => {
    const fuelRequired = calculate(100756);
    expect(fuelRequired).toEqual(33583);
  });

});
