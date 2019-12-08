import { getImageLayers } from '../space-image-format';

describe('Day 8: Space Image Format - Part 2', () => {

  test('given a 3 by 2 image with input 123456789012', () => {
    const layers = getImageLayers(3, 2, '123456789012');

    expect(layers[0][0]).toEqual('123');
    expect(layers[0][1]).toEqual('456');
    expect(layers[1][0]).toEqual('789');
    expect(layers[1][1]).toEqual('012');
  });
  
});
