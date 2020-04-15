import memoize from 'lodash.memoize';

export function makeGetData(entity) {
  return function getData(state) {
    return state.entities[entity].data;
  };
}

export function makeGetError(entity) {
  return function getError(state) {
    return state.entities[entity].error;
  };
}

export function makeGetIsLoading(entity) {
  return function getIsLoading(state) {
    return state.entities[entity].isLoading;
  };
}


export default function makeSelectors(entity) {
  return {
    getData: makeGetData(entity),
    getError: makeGetError(entity),
    getIsLoading: makeGetIsLoading(entity),
  };
}

export const filter = memoize((iterable, fn) => iterable.filter(fn));
export const values = memoize(Object.values);
