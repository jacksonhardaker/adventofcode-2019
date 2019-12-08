import { getImageLayers } from '../space-image-format';
import { getFinalImage } from '../space-image-format';

describe('Day 8: Space Image Format - Part 2', () => {

  test('given a 2 by 2 image with input 0222112222120000, the layers are...', () => {
    const layers = getImageLayers(2, 2, '0222112222120000');

    expect(layers[0][0]).toEqual('02');
    expect(layers[0][1]).toEqual('22');
    expect(layers[1][0]).toEqual('11');
    expect(layers[1][1]).toEqual('22');
    expect(layers[2][0]).toEqual('22');
    expect(layers[2][1]).toEqual('12');
    expect(layers[3][0]).toEqual('00');
    expect(layers[3][1]).toEqual('00');
  });

  test('given a 2 by 2 image with input 0222112222120000, the final image is...', () => {
    const image = getFinalImage(2, 2, '0222112222120000');

    expect(image[0]).toEqual('01');
    expect(image[1]).toEqual('10');
  });

});
