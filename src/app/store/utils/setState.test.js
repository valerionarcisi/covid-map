import initialState from './initialState';
import { setDataReducer, setErrorReducer, setLoadingReducer } from './setState';

describe('#Redux #Utils #setState', () => {
  const errorAction = {
    payload: 'Error message',
  };

  const loadingAction = {
    payload: true,
  };

  test.each`
    name                   | reducer              | action           | field
    ${'setErrorReducer'}   | ${setErrorReducer}   | ${errorAction}   | ${'error'}
    ${'setLoadingReducer'} | ${setLoadingReducer} | ${loadingAction} | ${'isLoading'}
  `('$name', ({ reducer, action, field }) => {
    const state = reducer(initialState, action);

    const expectedState = { ...initialState, [field]: action.payload };

    expect(state).toMatchObject(expectedState);
  });

  it('#setDataReducer should update data', () => {
    const initialState = {
      data: {
        data1: {
          name: 'data 1',
          version: 1,
        },
        data3: {
          name: 'data 3',
          version: 1,
        },
      },
    };

    const payload = {
      data2: {
        name: 'data 2',
        version: 1,
      },
      data3: {
        name: 'data 3',
        version: 2,
      },
    };

    const newState = setDataReducer(initialState, { payload });

    const expectedState = {
      data: {
        data1: {
          name: 'data 1',
          version: 1,
        },
        data2: {
          name: 'data 2',
          version: 1,
        },
        data3: {
          name: 'data 3',
          version: 2,
        },
      },
    };

    expect(newState).toEqual(expectedState);
  });
});
