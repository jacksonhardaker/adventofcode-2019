const readFileAndSplit = require('../util/read-file-and-split');
const { corruptionCheck, printImage } = require('./space-image-format');

const input = readFileAndSplit('day-8/input.txt', '\n').pop();

const outputPart1 = corruptionCheck(25, 6, input);
const outputPart2 = printImage(25, 6, input);

console.log(`Part 1 result: ${outputPart1}`); // 1920
console.log(`Part 2 result: \n${outputPart2}`); // PCULA
