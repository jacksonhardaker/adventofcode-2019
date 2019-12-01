const fs = require('fs');
const path = require('path');
const calculate = require('./tyranny-of-the-rocket');

// Load data from txt file
const data = fs.readFileSync(path.join(__dirname, 'data.txt'), {
  encoding: 'utf8'
});

// Split data file on newline, and filter out any empty entries
const dataArray = data.split('\n').filter(mass => !!mass);

// Reduce array of masses to single value, buy calculating the fuel for each and summing them.
const totalFuelRequired = dataArray.reduce((total, mass) => total + calculate(mass), 0);

console.log(totalFuelRequired);
