import { radius } from './Province';

describe('#radius', () => {

  it('are not number', () => {
    expect(radius()).toEqual(10);
    expect(radius('')).toEqual(10);
    expect(radius('qweqwwqw')).toEqual(10);
    expect(radius('3')).toEqual(10);
  });

  it('#500', () => {
    expect(radius(2)).toEqual(5);
    expect(radius(500)).toEqual(5);
  });

  it('#5000', () => {
    expect(radius(501)).toEqual(10);
    expect(radius(5000)).toEqual(10);
  });

  it('#10000', () => {
    expect(radius(5001)).toEqual(15);
    expect(radius(10000)).toEqual(15);
  });

  it('# +10000', () => {
    expect(radius(10001)).toEqual(20);
    expect(radius(1000000)).toEqual(20);
  });
});
