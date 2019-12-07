class Satellite {
  constructor(name, satellite) {
    this.name = name;
    this.orbits = satellite;
  }

  calculateDepth() {
    if (!this.orbits)
      return 0;

    return this.orbits.calculateDepth() + 1;
  }

  generateOrbitMap() {
    if (!this.orbits)
      return [this.name];

    return [...this.orbits.generateOrbitMap(), this.name];
  }

  calculateStepsTo(name) {
    
    if (this.orbits.name === name)
      return 0;
    
    return 1 + this.orbits.calculateStepsTo(name);
  }
};

const generateMap = input => {
  const satellites = {};

  // Map satellites
  input.forEach(orbit => {
    const [objA, objB] = orbit.split(')');

    if (!satellites[objA])
      satellites[objA] = new Satellite(objA, null);

    if (satellites[objB]) {
      satellites[objB].orbits = satellites[objA];
    }
    else {
      satellites[objB] = new Satellite(objB, satellites[objA]);
    }

  });

  return satellites;
};

const calculateOrbits = input => {
  const satellites = generateMap(input);

  const totalOrbits = Object.values(satellites).reduce((totalOrbits, obj) => {
    return totalOrbits + obj.calculateDepth();
  }, 0);

  return totalOrbits;
};

const calculateMinTransfers = (input, objA, objB) => {
  const satellites = generateMap(input);

  const satA = satellites[objA];
  const satB = satellites[objB];
  const mapA = satA.generateOrbitMap();
  const mapB = satB.generateOrbitMap();

  const closestIntersection = mapA.filter(obj => mapB.includes(obj)).pop()

  return satA.calculateStepsTo(closestIntersection) + satB.calculateStepsTo(closestIntersection);
};

module.exports = {
  calculateOrbits,
  calculateMinTransfers
};
