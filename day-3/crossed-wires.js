const directions = {
  right: 'R',
  up: 'U',
  down: 'D',
  left: 'L'
};

const findSmallestNumber = data => {
  return data.reduce((num, shortest) => {
    return num < shortest ? num : shortest;
  }, Infinity);
};

const getIntersections = (pathA, pathB) => {
  const map = {};

  const addNode = (x, y, name, totalSteps) => {
    // Coords are x,y.
    map[`${x}${y}`] = Object.assign(map[`${x}${y}`] || {}, {
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

      switch (direction) {
        case directions.right:
          steps = 0;
          while (steps < distance) {
            addNode(x, y, name, totalStepsTaken);
            x++;
            steps++;
            totalStepsTaken++;
          }
          break;
        case directions.left:
          steps = 0;
          while (steps < distance) {
            addNode(x, y, name, totalStepsTaken);
            x--;
            steps++;
            totalStepsTaken++;
          }
          break;
        case directions.up:
          steps = 0;
          while (steps < distance) {
            addNode(x, y, name, totalStepsTaken);
            y++;
            steps++;
            totalStepsTaken++;
          }
          break;
        case directions.down:
          steps = 0;
          while (steps < distance) {
            addNode(x, y, name, totalStepsTaken);
            y--;
            steps++;
            totalStepsTaken++;
          }
          break;
      }
    });
  };

  traversePath(pathA, 'a');
  traversePath(pathB, 'b');

  const nodesArray = Object.values(map);
  const intersections = nodesArray.filter(node => node.a && node.b && (node.x !== 0 && node.y !== 0));

  return intersections;
};

const getManhattanDistance = (pathA, pathB) => {

  const intersections = getIntersections(pathA, pathB);

  const manhattanDistances = intersections.map(intersection => {
    return Math.abs(intersection.x) + Math.abs(intersection.y)
  });

  const shortestManhattanDistance = findSmallestNumber(manhattanDistances)

  return shortestManhattanDistance;
};

const getSmallestStepsSum = (pathA, pathB) => {
  const intersections = getIntersections(pathA, pathB);

  const totalStepsSum = intersections.map(intersection => {
    return intersection.a.totalSteps + intersection.b.totalSteps;
  });

  const shortestSteps = findSmallestNumber(totalStepsSum);

  return shortestSteps;
};

module.exports = {
  getManhattanDistance,
  getSmallestStepsSum
};
