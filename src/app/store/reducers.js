import { combineReducers } from 'redux';

import provinces, { STATE_KEY as PROVINCE_STATE_KEY } from './provinces';

const entities = combineReducers({
  [PROVINCE_STATE_KEY]: provinces,
});

export default function reducersFactory() {
  return combineReducers({
    entities,
  });
}
