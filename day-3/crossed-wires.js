/**
 * Determines if the movement is on the X axis
 * @param {*} direction 
 * @returns {Boolean}
 */
const isHorizontalMovement = direction => {
  return direction === 'R' || direction === 'L';
};

/**
 * Determines if the movement is on the Y axis
 * @param {*} direction 
 * @returns {Boolean}
 */
const isVerticalMovement = direction => {
  return direction === 'U' || direction === 'D';
};

/**
 * Gets modifier which determins whether to move along the current axis by a positive or negative step.
 * @param {String} direction 'R', 'L', 'U', or 'D'
 * @returns {Number} 1 or -1
 */
const getDirectionModifier = direction => {
  return direction === 'R' || direction === 'U' ? 1 : -1;
};

/**
 * Traverses the two paths, and determins the coords at which they intersect.
 * Keeps track of the distance travelled to reach each intersection.
 * @param {[String]} pathA e.g. ['R8', 'U5', 'L5', 'D3']
 * @param {[String]} pathB e.g. ['U7', 'R6', 'D4', 'L4']
 */
const getIntersections = (pathA, pathB) => {
  const map = {};

  const plot = (x, y, name, totalSteps) => {
    const key = `${x},${y}`;
    map[key] = Object.assign(
      map[key] || {},
      { [name]: { totalSteps }, x, y }
    );
  };

  const traversePath = (path, name) => {
    let x = 0;
    let y = 0;
    let totalStepsTaken = 0;

    path.forEach(step => {
      const direction = step[0];
      const distance = Number(step.slice(1));
      let steps = 0;

      while (steps < distance) {
        plot(x, y, name, totalStepsTaken);

        if (isHorizontalMovement(direction)) {
          x += getDirectionModifier(direction);
        }
        else if (isVerticalMovement(direction)) {
          y += getDirectionModifier(direction);
        }

        steps++;
        totalStepsTaken++;
      }
    });
  };

  traversePath(pathA, 'a');
  traversePath(pathB, 'b');

  // Node is intersected by both a and b, and is not at 0,0
  return Object.values(map).filter(node => node.a && node.b && (node.x !== 0 && node.y !== 0));
};

/**
 * Determine the intersection with the smallest number of steps from 0,0.
 * NOT reliant on following the paths.
 * @param {[String]} pathA e.g. ['R8', 'U5', 'L5', 'D3']
 * @param {[String]} pathB e.g. ['U7', 'R6', 'D4', 'L4']
 * @returns {Number}
 */
const getManhattanDistance = (pathA, pathB) => {

  const intersections = getIntersections(pathA, pathB);
  const manhattanDistances = intersections.map(({ x, y }) => Math.abs(x) + Math.abs(y));

  return Math.min(...manhattanDistances);
};

/**
 * Determine the intersection with the smallest number of steps from 0,0.
 * Steps MUST follow the paths.
 * @param {[String]} pathA e.g. ['R8', 'U5', 'L5', 'D3']
 * @param {[String]} pathB e.g. ['U7', 'R6', 'D4', 'L4']
 * @returns {Number}
 */
const getSmallestStepsSum = (pathA, pathB) => {

  const intersections = getIntersections(pathA, pathB);
  const totalStepsSum = intersections.map(({ a, b }) => a.totalSteps + b.totalSteps);

  return Math.min(...totalStepsSum);
};

module.exports = {
  getManhattanDistance,
  getSmallestStepsSum
};
