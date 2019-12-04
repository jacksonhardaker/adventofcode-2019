const { findMatchesBetweenRange } = require('./secure-container');

const resultPart1 = findMatchesBetweenRange(387638, 919123);
const resultPart2 = findMatchesBetweenRange(387638, 919123, true);

console.log(`Part 1 result: ${resultPart1.length}`); // 466
console.log(`Part 2 result: ${resultPart2.length}`); // 466
