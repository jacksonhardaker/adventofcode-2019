const readFileAndSplit = require('../util/read-file-and-split');
const { handle1202ProgramAlarm, calculateOutput } = require('./program-alarm');

const dataArray = readFileAndSplit('day-2/input.txt', ',');
const numberCodeArray = dataArray.map(int => +int);
const finalStatePart1 = handle1202ProgramAlarm(numberCodeArray, 12, 2);

const resultPart2 = calculateOutput(numberCodeArray, 19690720);

console.log(`Part 1 result: ${finalStatePart1[0]}`); // 4090701
console.log(`Part 2 result: ${resultPart2}`); // 6421
