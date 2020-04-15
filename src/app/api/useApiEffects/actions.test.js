import { FETCHING, SUCCESS, ERROR } from './types';
import { fetching, success, error } from './actions';

describe('#useApiRequest #Actions', () => {
  it('#fetching', () => {
    expect(fetching()).toEqual({ type: FETCHING });
  });

  it('#success', () => {
    const res = 'foo';
    expect(success(res)).toEqual({ type: SUCCESS, response: res });
  });

  it('#error', () => {
    const res = 'foo';
    const exception = 'bar';
    expect(error(res, exception)).toEqual({
      type: ERROR,
      response: res,
      exception,
    });
  });
});
