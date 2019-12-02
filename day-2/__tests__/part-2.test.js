import readFileAndSplit from '../../util/read-file-and-split';
import { calculateOutput } from '../program-alarm';

describe('Day 2: 1202 Program Alarm - Part 2', () => {

  test('if given 19690720 the answer would be 6421.', () => {
    const dataArray = readFileAndSplit('day-2/input.txt', ',');
    const numberCodeArray = dataArray.map(int => +int);

    const result = calculateOutput(numberCodeArray, 19690720);

    expect(result).toEqual(6421);
  });
});
