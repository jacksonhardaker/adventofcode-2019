import { calculateOrbits } from '../universal-orbit-map';

const sample = [
  'COM)B',
  'B)C',
  'C)D',
  'D)E',
  'E)F',
  'B)G',
  'G)H',
  'D)I',
  'E)J',
  'J)K',
  'K)L'
];

describe('Day 6: Universal Orbit Map - Part 1', () => {

  test('the total orbits of the same is 42', () => {
    const result = calculateOrbits(sample);

    expect(result).toEqual(42);
  });

});
