
/**
 * Two (or more) adjacent digits are the same (like 22 in 122345).
 * @param {String} pwdString 
 * @param {Boolen} [strictMode=false] if true then the must be 2 adjacent and no more.
 * @returns {Boolean}
 */
const hasAdjacent = (pwdString, strictMode = false) => {
  const pwdArray = [...pwdString];

  return pwdArray.some((digit, index) => {
    const duplicateCount = pwdArray.filter(d => d === digit).length;

    if (pwdString[index + 1] !== digit)
      return false;

    if (strictMode)
      return duplicateCount == 2;
    else
      return duplicateCount >= 2;
  });
};

/**
 * Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
 * @param {String} pwdString 
 * @returns {Boolean}
 */
const neverDecreasesSequentially = pwdString => {
  const pwdArray = [...pwdString];

  // Decreases?
  const doesDecrease = pwdArray.some((digit, index) => {
    const next = pwdArray[index + 1];
    if (next && next < digit) {
      return true;
    }
    return false;
  });

  return !doesDecrease;
};

/**
 * It is a six-digit number.
 * It has a set of adjacent identical numbers. Can be exactly 2, or more, depending on stictMode.
 * It never decreases left to right.
 * @param {Number} password 
 * @param {Boolen} [strictMode=false]
 * @returns {Boolean}
 */
const matchesCriteria = (password, strictMode = false) => {
  const pwdString = `${password}`;
  let hasAdjacentDigits = false;
  let neverDecreases = false;

  if (pwdString.length !== 6)
    return false;

  if (hasAdjacent(pwdString, strictMode))
    hasAdjacentDigits = true;

  if (neverDecreasesSequentially(pwdString))
    neverDecreases = true;

  return hasAdjacentDigits && neverDecreases;
};

const matchesStrictCriteria = password => {
  return matchesCriteria(password, true);
};

/**
 * Find the passwords which match the criteria between the given range.
 * @param {*} start 
 * @param {*} end 
 * @param {Boolen} [strictMode=false]
 */
const findMatchesBetweenRange = (start, end, strictMode = false) => {
  let current = start;
  const matches = [];
  while (current <= end) {
    if (matchesCriteria(current, strictMode))
      matches.push(current);
    current++;
  }

  return matches;
};

module.exports = {
  matchesCriteria,
  findMatchesBetweenRange,
  matchesStrictCriteria
};
