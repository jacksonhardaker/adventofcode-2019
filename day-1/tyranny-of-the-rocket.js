/**
 * Fuel required to launch a given module is based on its mass.
 * Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
 * @param {Number} mass 
 * @returns {Number}
 */
const calculate = mass => {
  return Math.floor(mass / 3) - 2;
};

/**
 * So, for each module mass, calculate its fuel and add it to the total.
 * Then, treat the fuel amount you just calculated as the input mass and repeat
 * the process, continuing until a fuel requirement is zero or negative.
 * @param {Number} mass 
 */
const calculateRecursive = mass => {
  const result = calculate(mass);

  if (result > 0)
    return result + calculateRecursive(result);

  return 0;
};

module.exports = {
  calculate,
  calculateRecursive
};
