const generateCombinations = require('./combinations');

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
const compute = (memory, input = 0, phaseSetting, instructionPointerStart = 0) => {
  let settingUsed = false;
  let instructionPointer = instructionPointerStart;

  const incrementIndexAndGetNextInput = (increment = 4) => {
    instructionPointer = instructionPointer + increment;
    return memory.slice(instructionPointer);
  };

  const getValue = (param, mode) => {
    switch (mode) {
      case 0: // position mode
        return memory[param];
      case 1: // immedate mode
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
      case 99: // end
        return null;
      case 1: // add
        memory[param3] = getValue(param1, param1Mode, memory) + getValue(param2, param2Mode, memory);
        return next(
          incrementIndexAndGetNextInput(4)
        );
      case 2: // multiply
        memory[param3] = getValue(param1, param1Mode, memory) * getValue(param2, param2Mode, memory);
        return next(
          incrementIndexAndGetNextInput(4)
        );
      case 3: // write
        // Saves input to memory at parameter 1
        memory[param1] = settingUsed || phaseSetting === undefined ? input : phaseSetting;
        settingUsed = true;
        return next(
          incrementIndexAndGetNextInput(2)
        );
      case 4: // read
        // Outputs the contents of memory at parameter 1
        return {
          memory,
          output: getValue(param1, param1Mode),
          instructionPointer: instructionPointer + 2
        };
      case 5: // jump if true
        if (getValue(param1, param1Mode) !== 0) {
          instructionPointer = getValue(param2, param2Mode);
          return next(
            incrementIndexAndGetNextInput(0)
          );
        }
        return next(
          incrementIndexAndGetNextInput(3)
        );
      case 6: // jump if false
        if (getValue(param1, param1Mode) === 0) {
          instructionPointer = getValue(param2, param2Mode);
          return next(
            incrementIndexAndGetNextInput(0)
          );
        }
        return next(
          incrementIndexAndGetNextInput(3)
        );
      case 7: // less than
        memory[param3] = getValue(param1, param1Mode) < getValue(param2, param2Mode) ? 1 : 0;
        return next(
          incrementIndexAndGetNextInput(4)
        );
      case 8: // equal to
        memory[param3] = getValue(param1, param1Mode) === getValue(param2, param2Mode) ? 1 : 0;
        return next(
          incrementIndexAndGetNextInput(4)
        );
      default:
        throw new Error('Invalid Opcode');
    }
  };

  if (instructionPointer === 0) {
    return next(memory);
  }
  else {
    return next(memory.slice(instructionPointer));
  }

};

const runFeedbackSequences = (memory, phaseSettings) => {
  let phases = [...phaseSettings];
  let input = 0;
  let amps = [
    compute([...memory], input, phases.shift()),
  ];
  let finalAmpEOutput = null;

  for (let i = 1; i < 5; i++) {
    amps[i] = compute([...memory], amps[i - 1].output, phases.shift())
  }

  let currentAmp = 0;
  while (amps[4]) {
    const previousAmpIndex = currentAmp === 0 ? 4 : currentAmp - 1;
    const { memory, instructionPointer } = amps[currentAmp];
    if (amps[previousAmpIndex]) {
      const { output } = amps[previousAmpIndex];
  
      amps[currentAmp] = compute(memory, output, undefined, instructionPointer);
      currentAmp = currentAmp === 4 ? 0 : currentAmp + 1;
    }
    else {
      break;
    }

    finalAmpEOutput = amps[4].output;
  }

  return finalAmpEOutput;
};

const calculateHighestFeedbackThrustSignal = memory => {
  let highestResult = 0;
  const combinations = generateCombinations(5, 9);

  combinations.forEach(phaseSettings => {
    const result = runFeedbackSequences(memory, phaseSettings);
    highestResult = result > highestResult ? result : highestResult;
  });

  return highestResult;
};

module.exports = {
  compute,
  runFeedbackSequences,
  calculateHighestFeedbackThrustSignal
};
