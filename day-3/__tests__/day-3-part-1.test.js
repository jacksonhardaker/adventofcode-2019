import { getManhattanDistance } from '../crossed-wires';

describe('Day 3: Crossed Wires - Part 1', () => {
  test('first example', () => {
    const manhattanDistance = getManhattanDistance(
      ['R8', 'U5', 'L5', 'D3'],
      ['U7', 'R6', 'D4', 'L4']
    );

    expect(manhattanDistance).toEqual(6);
  });

  test('second example', () => {
    const manhattanDistance = getManhattanDistance(
      ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
      ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
    );

    expect(manhattanDistance).toEqual(159);
  });

  test('third example', () => {
    const manhattanDistance = getManhattanDistance(
      ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
      ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']
    );

    expect(manhattanDistance).toEqual(135);
  });
});
