import {
  SET_PROVS,
  SET_PROVS_ERROR,
  SET_PROVS_LOADING,
} from './types';
import { setProvs, setProvsError, setProvsLoading } from './actions';

describe('#Redux #setProvs #Actions', () => {
  const data = [
    {
      name: 'Prov 1',
    },
    {
      name: 'Prov 2',
    },
  ];

  const message = 'Error while loading data';

  const status = true;

  test.each`
    name                   | actionCreator        | type                   | payload
    ${'setProvs'}    | ${setProvs}    | ${SET_PROVS}         | ${data}
    ${'setProvsError'}   | ${setProvsError}   | ${SET_PROVS_ERROR}   | ${message}
    ${'setProvsLoading'} | ${setProvsLoading} | ${SET_PROVS_LOADING} | ${status}
  `('$name', ({ actionCreator, type, payload }) => {
    const action = actionCreator(payload);

    const expectedAction = {
      meta: {},
      payload,
      type,
    };

    expect(action).toMatchObject(expectedAction);
  });
});
