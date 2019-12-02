/**
 * Valid OPCODES
 */
const opcodes = {
  end: 99,
  add: 1,
  multiply: 2,
};

/**
 * An Intcode program is a list of integers separated by commas (like 1,0,0,3,99).
 * To run one, start by looking at the first integer (called position 0).
 * Here, you will find an opcode - either 1, 2, or 99.
 * The opcode indicates what to do; for example, 99 means that the program is finished and should immediately halt.
 * Encountering an unknown opcode means something went wrong. 
 * Opcode 1 adds together numbers read from two positions and stores the result in a third position.
 * The three integers immediately after the opcode tell you these three positions - the first two indicate
 * the positions from which you should read the input values, and the third indicates the position at which the output should be stored.
 * @param {[Number]} memory 
 */
const compute = memory => {
  let instructionPointer = 0;

  const incrementIndexAndGetNextInput = () => {
    instructionPointer = instructionPointer + 4;
    return memory.slice(instructionPointer);
  };

  const next = ([instruction, parameter1, parameter2, parameter3]) => {

    switch (instruction) {
      case opcodes.end:
        return memory;
      case opcodes.add:
          memory[parameter3] = memory[parameter1] + memory[parameter2];

        return next(
          incrementIndexAndGetNextInput()
        );
      case opcodes.multiply:
          memory[parameter3] = memory[parameter1] * memory[parameter2];

        return next(
          incrementIndexAndGetNextInput()
        );
      default:
        throw new Error('Invalid Opcode');
    }
  };

  return next(memory);
};

/**
 * the first step is to restore the gravity assist program (your puzzle input) to the "1202 program alarm"
 * state it had just before the last computer caught fire. To do this, before running the program, replace
 * position 1 with the value 12 and replace position 2 with the value 2.
 * @param {[Number]} inputMemory 
 * @param {Number} [noun = 12]
 * @param {Number} [verb = 2]
 * @returns {[Number]}
 */
const handle1202ProgramAlarm = (inputMemory, noun = 12, verb = 2) => {
  const memory = [...inputMemory];
  memory[1] = noun;
  memory[2] = verb;

  return compute(memory);
};

/**
 * In this program, the value placed in address 1 is called the noun, and the value placed in address 2 is called the verb.
 * Each of the two input values will be between 0 and 99, inclusive.
 * Once the program has halted, its output is available at address 0, also just like before.
 * Each time you try a pair of inputs, make sure you first reset the computer's memory to the
 * values in the program (your puzzle input) - in other words, don't reuse memory from a previous attempt.
 * @param {[Number]} memory 
 * @param {Number} [desiredOutputValue = 19690720]
 * @returns {Number} 100 * noun + verb
 */
const calculateOutput = (memory, desiredOutputValue = 19690720) => {
  let clonedMemory = [];

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      clonedMemory = [...memory];

      const result = handle1202ProgramAlarm(clonedMemory, noun, verb);

      if (result[0] === desiredOutputValue) {
        return 100 * noun + verb;
      }
    }
  }
};

module.exports = {
  compute,
  handle1202ProgramAlarm,
  calculateOutput
};
