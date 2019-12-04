const readFileAndSplit = require('../util/read-file-and-split');
const { getManhattanDistance, getSmallestStepsSum } = require('./crossed-wires');

const dataArray = readFileAndSplit('day-3/input.txt', '\n');
const [pathA, pathB] = dataArray.map(str => str.split(','));

const resultPart1 = getManhattanDistance(pathA, pathB);
const resultPart2 = getSmallestStepsSum(pathA, pathB);

console.log(`Part 1 result: ${resultPart1}`); // 1285
console.log(`Part 2 result: ${resultPart2}`); // 14228
