import createAction from '../utils/actionCreators';
import { SET_PROVS, SET_PROVS_ERROR, SET_PROVS_LOADING } from './types';

export function setProvs(data) {
  return createAction(SET_PROVS, data);
}

export function setProvsError(message) {
  return createAction(SET_PROVS_ERROR, message);
}

export function setProvsLoading(status) {
  return createAction(SET_PROVS_LOADING, status);
}

export const makeProvsActions = (dispatch) => ({
  doSetProvs(data) {
    dispatch(setProvs(data));
  },
  doSetProvsError(message) {
    dispatch(setProvsError(message));
  },
  doSetProvsLoading(status) {
    dispatch(setProvsLoading(status));
  },
});
