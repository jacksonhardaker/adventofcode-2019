import { matchesCriteria } from "../secure-container";

describe('Day 4: Secure Container - Part 1', () => {

  test('12345 does not meet these critera (less that 6 digits', () => {
    const matches = matchesCriteria(12345);
    expect(matches).toEqual(false);
  });

  test('111111 meets these criteria (double 11, never decreases)', () => {
    const matches = matchesCriteria(111111);
    expect(matches).toEqual(true);
  });
  
  test('223450 does not meet these criteria (decreasing pair of digits 50))', () => {
    const matches = matchesCriteria(223450);
    expect(matches).toEqual(false);
  });
  
  test('123789 does not meet these criteria (no double)', () => {
    const matches = matchesCriteria(123789);
    expect(matches).toEqual(false);
  });
});
