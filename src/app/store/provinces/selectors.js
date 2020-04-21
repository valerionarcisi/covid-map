import { createSelector } from 'reselect';
import { STATE_KEY } from '.';
import makeSelectors, { values, filter } from '../utils/makeSelectors';

const { getData, getError, getIsLoading } = makeSelectors(STATE_KEY);

export const getAllProvinces = createSelector(getData, (res) =>
  res ? values(res) : []
);

export const getProvincesIsError = createSelector(getError, (res) => res);

export const getProvincesIsLoading = createSelector(getIsLoading, (res) => res);

export const getValidProvinces = createSelector(getAllProvinces, (provinces) =>
  filter(provinces, ({ lat, long }) => lat !== 0 && long !== 0)
);
