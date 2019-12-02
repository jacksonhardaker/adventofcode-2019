const readFileAndSplit = require('../util/read-file-and-split');
const { handle1202ProgramAlarm } = require('./program-alarm');

const dataArray = readFileAndSplit('day-2/input.txt', ',');
const numberCodeArray = dataArray.map(int => +int);
const finalStatePart1 = handle1202ProgramAlarm(numberCodeArray);

console.log(`Part 1 result: ${finalStatePart1[0]}`);
