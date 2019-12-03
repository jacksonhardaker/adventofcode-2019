import { getSmallestStepsSum } from '../crossed-wires';

describe('Day 3: Crossed Wires - Part 2', () => {
  test('first example', () => {
    const steps = getSmallestStepsSum(
      ['R8', 'U5', 'L5', 'D3'],
      ['U7', 'R6', 'D4', 'L4']
    );

    expect(steps).toEqual(30);
  });

  test('second example', () => {
    const steps = getSmallestStepsSum(
      ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
      ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']
    );

    expect(steps).toEqual(610);
  });

  test('third example', () => {
    const steps = getSmallestStepsSum(
      ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'],
      ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7']
    );

    expect(steps).toEqual(410);
  });
});
