import { calculateMinTransfers } from '../universal-orbit-map';

const sample = ['COM)B',
  'B)C',
  'C)D',
  'D)E',
  'E)F',
  'B)G',
  'G)H',
  'D)I',
  'E)J',
  'J)K',
  'K)L',
  'K)YOU',
  'I)SAN',]

describe('Day 6: Universal Orbit Map - Part 2', () => {

  test('the minimum number of orbital transfers 4', () => {
    const result = calculateMinTransfers(sample, 'YOU', 'SAN');

    expect(result).toEqual(4);
  });

});
