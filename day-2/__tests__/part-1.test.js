import { execute } from '../program-alarm';

describe('Day 2: 1202 Program Alarm - Part 1', () => {

  test('1,9,10,3,2,3,11,0,99,30,40,50', () => {
    const result = execute([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50]);

    expect(result).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
  });

  test('1,0,0,0,99', () => {
    const result = execute([1,0,0,0,99]);

    expect(result).toEqual([2,0,0,0,99]);
  });

  test('2,3,0,3,99', () => {
    const result = execute([2,3,0,3,99]);

    expect(result).toEqual([2,3,0,6,99]);
  });

  test('2,4,4,5,99,0', () => {
    const result = execute([2,4,4,5,99,0]);

    expect(result).toEqual([2,4,4,5,99,9801]);
  });

  test('1,1,1,4,99,5,6,0,99', () => {
    const result = execute([1,1,1,4,99,5,6,0,99]);

    expect(result).toEqual([30,1,1,4,2,5,6,0,99]);
  });
});
