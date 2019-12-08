const getImageLayers = (width, height, input) => {
  const layers = [];
  let data = Array.from(input);

  while (data[0]) {
    let layer = [];
    for (let i = 0; i < height; i++) {
      let row = data.slice(0, width);
      layer.push(row.join(''));
      data = data.splice(width);
    }
    layers.push(layer);
  };

  return layers;
};
/**
 * Colors:
 * 0 = black
 * 1 = white
 * 2 = transparent
 * @param {*} width 
 * @param {*} height 
 * @param {*} input 
 */
const getFinalImage = (width, height, input) => {
  const layers = getImageLayers(width, height, input);
  const image = [];

  for (let i = layers.length - 1; i >= 0; i--) {
    // Each row
    for (let j = 0; j < height; j++) {
      if (!image[j])
        image[j] = [];
      // Each pixel
      for (let k = 0; k < width; k++) {
        // If first pass
        if (!image[j][k]) {
          image[j][k] = layers[i][j][k];
        }
        // If black or white, == to allow type coercion
        else if (layers[i][j][k] == 0 || layers[i][j][k] == 1) {
          image[j][k] = layers[i][j][k];
        }
      }
    }
  }

  return image.map(row => row.join(''));
};

const getLayerDigitsCount = (layer, match) => {
  return layer.reduce((matches, row) => {
    return matches + Array.from(row).filter(digit => digit == match).length;
  }, 0);
};

const corruptionCheck = (width, height, input) => {
  const layers = getImageLayers(width, height, input);

  let layerWithFewestZeroDigits = null;
  let fewestZeroDigits = Infinity;

  for (layer of layers) {
    const zeros = getLayerDigitsCount(layer, 0);
    
    if (zeros < fewestZeroDigits) {
      fewestZeroDigits = zeros;
      layerWithFewestZeroDigits = layer;
    }
  }

  const ones = getLayerDigitsCount(layerWithFewestZeroDigits, 1);
  const twos = getLayerDigitsCount(layerWithFewestZeroDigits, 2);

  return ones * twos;
};

const printImage = (width, height, input) => {
  const image = getFinalImage(width, height, input);
  return image.join('\n').replace(/0/g, '⬛').replace(/1/g, '⬜')
};

module.exports = {
  getImageLayers,
  corruptionCheck,
  getFinalImage,
  printImage,
};
