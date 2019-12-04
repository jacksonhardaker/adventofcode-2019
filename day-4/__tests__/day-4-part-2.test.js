import { matchesStrictCriteria } from "../secure-container";

describe('Day 4: Secure Container - Part 2', () => {
  test('112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long', () => {
    const matches = matchesStrictCriteria(112233);
    expect(matches).toEqual(true);
  });

  test('123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444)', () => {
    const matches = matchesStrictCriteria(123444);
    expect(matches).toEqual(false);
  });

  test('111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22)', () => {
    const matches = matchesStrictCriteria(111122);
    expect(matches).toEqual(true);
  });
});
