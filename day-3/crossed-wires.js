const directions = {
  right: 'R',
  up: 'U',
  down: 'D',
  left: 'L'
};

const isHorizontalMovement = direction => {
  return direction === directions.right || direction === directions.left;
};

const isVerticalMovement = direction => {
  return direction === directions.up || direction === directions.down;
};

const getDirectionModifier = direction => {
  return direction === directions.right || direction === directions.up ? 1 : -1;
};

const getIntersections = (pathA, pathB) => {
  const map = {};

  const intersect = (x, y, name, totalSteps) => {
    const key = `${x}${y}`;
    map[key] = Object.assign(
      map[key] || {},
      {
        [name]: { totalSteps },
        x,
        y
      });
  };

  const traversePath = (path, name) => {
    let x = 0;
    let y = 0;
    let totalStepsTaken = 0;

    path.forEach(step => {
      const direction = step[0];
      const distance = step.slice(1);
      let steps = 0;
      const modifier = getDirectionModifier(direction)

      while (steps < distance) {
        intersect(x, y, name, totalStepsTaken);

        if (isHorizontalMovement(direction)) {
          x += modifier;
        }
        else if (isVerticalMovement(direction)) {
          y += modifier;
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

const getManhattanDistance = (pathA, pathB) => {

  const intersections = getIntersections(pathA, pathB);
  const manhattanDistances = intersections.map(({ x, y }) => Math.abs(x) + Math.abs(y));

  return Math.min(...manhattanDistances);
};

const getSmallestStepsSum = (pathA, pathB) => {

  const intersections = getIntersections(pathA, pathB);
  const totalStepsSum = intersections.map(({ a, b }) => a.totalSteps + b.totalSteps);

  return Math.min(...totalStepsSum);
};

module.exports = {
  getManhattanDistance,
  getSmallestStepsSum
};
