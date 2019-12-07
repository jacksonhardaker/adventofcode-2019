const generateCombinations = require('./combinations');

/**
 * Valid OPCODES
 */
const opcodes = {
  end: 99,
  add: 1,
  multiply: 2,
  saveInput: 3,
  output: 4,
  jumpIfTrue: 5,
  jumpIfFalse: 6,
  lessThan: 7,
  equals: 8,
};

const parameterModes = {
  position: 0,
  immediate: 1
};

const getOpcodeAndParameterModesFromInstruction = instruction => {
  const intStr = `${instruction}`;
  const opcode = Number(intStr.slice(intStr.length - 2));
  const modes = intStr.slice(0, intStr.length - 2);

  const param1Mode = Number(modes[modes.length - 1] || 0);
  const param2Mode = Number(modes[modes.length - 2] || 0);
  const param3Mode = Number(modes[modes.length - 3] || 0);

  return {
    opcode: opcode,
    param1Mode,
    param2Mode,
    param3Mode
  };
};

/**
 * @param {[Number]} memory 
 * @param {Number} phaseSetting
 * @param {Number} input
 */
const compute = (memory, input = 0, phaseSetting) => {
  let settingUsed = false;
  let instructionPointer = 0;
  const output = [];

  const incrementIndexAndGetNextInput = (increment = 4) => {
    instructionPointer = instructionPointer + increment;
    return memory.slice(instructionPointer);
  };

  const getValue = (param, mode) => {
    switch (mode) {
      case parameterModes.position:
        return memory[param];
      case parameterModes.immediate:
        return param;
      default:
        throw new Error('Invalid Parameter Mode');
    }
  };

  const next = ([instruction, param1, param2, param3]) => {
    const {
      opcode,
      param1Mode,
      param2Mode
    } = getOpcodeAndParameterModesFromInstruction(instruction);

    switch (opcode) {
      case opcodes.end:
        return memory;
      case opcodes.add:
        memory[param3] = getValue(param1, param1Mode, memory) + getValue(param2, param2Mode, memory);
        return next(
          incrementIndexAndGetNextInput()
        );
      case opcodes.multiply:
        memory[param3] = getValue(param1, param1Mode, memory) * getValue(param2, param2Mode, memory);
        return next(
          incrementIndexAndGetNextInput()
        );
      case opcodes.saveInput:
        // Saves input to memory at parameter 1
        memory[param1] = settingUsed || phaseSetting === undefined ? input : phaseSetting;
        settingUsed = true;
        return next(
          incrementIndexAndGetNextInput(2)
        );
      case opcodes.output:
        // Outputs the contents of memory at parameter 1

        output.push(getValue(param1, param1Mode));
        return next(
          incrementIndexAndGetNextInput(2)
        );
      case opcodes.jumpIfTrue:
        if (getValue(param1, param1Mode) !== 0) {
          instructionPointer = getValue(param2, param2Mode);
          return next(
            incrementIndexAndGetNextInput(0)
          );
        }
        return next(
          incrementIndexAndGetNextInput(3)
        );
      case opcodes.jumpIfFalse:
        if (getValue(param1, param1Mode) === 0) {
          instructionPointer = getValue(param2, param2Mode);
          return next(
            incrementIndexAndGetNextInput(0)
          );
        }
        return next(
          incrementIndexAndGetNextInput(3)
        );
      case opcodes.lessThan:
        memory[param3] = getValue(param1, param1Mode) < getValue(param2, param2Mode) ? 1 : 0;
        return next(
          incrementIndexAndGetNextInput()
        );
      case opcodes.equals:
        memory[param3] = getValue(param1, param1Mode) === getValue(param2, param2Mode) ? 1 : 0;
        return next(
          incrementIndexAndGetNextInput()
        );
      default:
        throw new Error('Invalid Opcode');
    }
  };

  next(memory);
  return output;
};

const runSequences = (memory, [
  phaseSettingA,
  phaseSettingB,
  phaseSettingC,
  phaseSettingD,
  phaseSettingE,
]) => {

  const ampOutputA = compute([...memory], 0, phaseSettingA).pop();
  const ampOutputB = compute([...memory], ampOutputA, phaseSettingB).pop();
  const ampOutputC = compute([...memory], ampOutputB, phaseSettingC).pop();
  const ampOutputD = compute([...memory], ampOutputC, phaseSettingD).pop();
  const ampOutputE = compute([...memory], ampOutputD, phaseSettingE).pop();

  return ampOutputE;
};

const calculateHighestThrustSignal = memory => {
  let highestResult = 0;
  const combinations = generateCombinations(0, 4);

  combinations.forEach(phaseSettings => {
    const result = runSequences(memory, phaseSettings);
    highestResult = result > highestResult ? result : highestResult;
  });


  return highestResult;
};

module.exports = {
  compute,
  runSequences,
  calculateHighestThrustSignal,
};
