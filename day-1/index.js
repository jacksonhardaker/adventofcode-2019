const fs = require('fs');
const path = require('path');
const { calculate, calculateRecursive } = require('./tyranny-of-the-rocket');

// Load data from txt file
const data = fs.readFileSync(path.join(__dirname, 'data.txt'), {
  encoding: 'utf8'
});

// Split data file on newline, and filter out any empty entries
const dataArray = data.split('\n').filter(mass => !!mass);

// Reduce array of masses to single value, buy calculating the fuel for each and summing them.
const totalFuelRequiredPart1 = dataArray.reduce((total, mass) => total + calculate(mass), 0);

// Reduce array of masses to single value, buy calculating the fuel for each RECURSIVELY and summing them.
const totalFuelRequiredPart2 = dataArray.reduce((total, mass) => total + calculateRecursive(mass), 0);

console.log(`Part 1 result: ${totalFuelRequiredPart1}`);
console.log(`Part 2 result: ${totalFuelRequiredPart2}`);
