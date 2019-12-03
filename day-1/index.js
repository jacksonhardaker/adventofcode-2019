const readFileAndSplit = require('../util/read-file-and-split');
const { calculate, calculateRecursive } = require('./tyranny-of-the-rocket');

const dataArray = readFileAndSplit('day-1/data.txt', '\n');

// Reduce array of masses to single value, buy calculating the fuel for each and summing them.
const totalFuelRequiredPart1 = dataArray.reduce((total, mass) => total + calculate(mass), 0);

// Reduce array of masses to single value, buy calculating the fuel for each RECURSIVELY and summing them.
const totalFuelRequiredPart2 = dataArray.reduce((total, mass) => total + calculateRecursive(mass), 0);

console.log(`Part 1 result: ${totalFuelRequiredPart1}`); // 3087896
console.log(`Part 2 result: ${totalFuelRequiredPart2}`); // 4628989
