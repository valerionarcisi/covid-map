import { getDate } from './PopupProvinces';

describe('#getDate', () => {
  it('#date is undefined', () => {
    expect(() => {
      getDate();
    }).toThrow();
  });

  it('#date is not valid', () => {
    expect(() => {
      getDate('qwerty');
    }).toThrow();
  });

  it('#valid date', () => {
    expect(getDate('2020-04-13T17:00:00')).toEqual('13 April 2020');
  });
});
