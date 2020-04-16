import { SET_PROVS, SET_PROVS_ERROR, SET_PROVS_LOADING } from './types';

import {
  createReducer,
  initialState,
  setDataReducer,
  setErrorReducer,
  setLoadingReducer,
} from './../utils';

export default createReducer(initialState, {
  [SET_PROVS]: setDataReducer,
  [SET_PROVS_ERROR]: setErrorReducer,
  [SET_PROVS_LOADING]: setLoadingReducer,
});
