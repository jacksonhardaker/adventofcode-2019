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
 * @param {[Number]} program 
 */
const execute = program => {
  let currentIndex = 0;

  const incrementIndexAndGetNextInput = () => {
    currentIndex = currentIndex + 4;
    return program.slice(currentIndex);
  };

  const next = subset => {
    const [opcode, inputOneIndex, inputTwoIndex, destIndex] = subset;

    switch (opcode) {
      case opcodes.end:
        return program;
      case opcodes.add:
        program[destIndex] = program[inputOneIndex] + program[inputTwoIndex];

        return next(
          incrementIndexAndGetNextInput()
        );
      case opcodes.multiply:
        program[destIndex] = program[inputOneIndex] * program[inputTwoIndex];

        return next(
          incrementIndexAndGetNextInput()
        );
      default:
        throw new Error('Invalid Opcode');
    }
  };

  return next(program);
};

/**
 * the first step is to restore the gravity assist program (your puzzle input) to the "1202 program alarm"
 * state it had just before the last computer caught fire. To do this, before running the program, replace
 * position 1 with the value 12 and replace position 2 with the value 2.
 * @param {[Number]} program 
 */
const handle1202ProgramAlarm = program => {
  const execCodes = [...program];

  execCodes[1] = 12;
  execCodes[2] = 2;

  return execute(execCodes);
};

module.exports = {
  execute,
  handle1202ProgramAlarm
};
