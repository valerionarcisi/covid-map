import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';

export function setDataReducer(state, { payload }) {
  return merge(cloneDeep(state), { data: payload });
}

export function setErrorReducer(state, { payload }) {
  return { ...state, error: payload };
}

export function setLoadingReducer(state, { payload }) {
  return { ...state, isLoading: payload };
}
