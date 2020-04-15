import { FETCHING, ERROR, SUCCESS } from './types';
import reducer, { initialState } from './reducer';

describe('#useApiRequest #Reducers', () => {
  let state = reducer(undefined, {});

  it('#initialState', () => {
    expect(state).toEqual(initialState);
  });

  it('#fetching', () => {
    state = reducer(state, {
      type: FETCHING,
    });
    expect(state).toEqual({
      ...initialState,
      status: FETCHING,
    });
  });

  it('#success', () => {
    state = reducer(state, {
      type: SUCCESS,
      response: 'foo',
    });
    expect(state).toEqual({
      ...state,
      response: 'foo',
      status: SUCCESS,
    });
  });

  it('#error', () => {
    state = reducer(state, {
      type: ERROR,
      response: 'foo',
      exception: 'bar',
    });
    expect(state).toEqual({
      ...state,
      status: ERROR,
      response: 'foo',
      exception: 'bar',
    });
  });
});
