const readFileAndSplit = require('../util/read-file-and-split');
const { calculateHighestThrustSignal } = require('./amplification-circuit');
const { calculateHighestFeedbackThrustSignal } = require('./amplification-circuit-part-2');

const dataArray = readFileAndSplit('day-7/input.txt', ',').map(int => +int);

const outputPart1 = calculateHighestThrustSignal(dataArray);
const outputPart2 = calculateHighestFeedbackThrustSignal(dataArray);

console.log(`Part 1 result: ${outputPart1}`); // 65464
console.log(`Part 2 result: ${outputPart2}`); // 
