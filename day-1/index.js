const fs = require('fs');
const path = require('path');
const calculate = require('./tyranny-of-the-rocket');

const data = fs.readFileSync(path.join(__dirname, 'data.txt'), {
  encoding: 'utf8'
});

const dataArray = data.split('\n');

const totalFuelRequired = dataArray.reduce((total, mass) => total + calculate(mass), 0);

console.log(totalFuelRequired);
