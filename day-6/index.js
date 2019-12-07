const readFileAndSplit = require('../util/read-file-and-split');
const { calculateOrbits, calculateMinTransfers } = require('./universal-orbit-map');

const dataArray = readFileAndSplit('day-6/input.txt', '\n');

const outputPart1 = calculateOrbits(dataArray);
const outputPart2 = calculateMinTransfers(dataArray, 'YOU', 'SAN');

console.log(`Part 1 result: ${outputPart1}`); // 344238
console.log(`Part 2 result: ${outputPart2}`); // 436
