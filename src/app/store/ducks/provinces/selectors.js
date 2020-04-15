// import { createSelector } from 'reselect';
// import { STATE_KEY } from '.';

// import makeSelectors, { values } from '../../utils/makeSelectors';

// const { getData, getError, getIsLoading } = makeSelectors(STATE_KEY);


// export const getAllSlides = createSelector(
//   getData,
//   (res) => (res ? values(res) : []),
// );

// export const getSlidesIsError = createSelector(
//   getError,
//   (res) => res,
// );

// export const getSlidesIsLoading = createSelector(
//   getIsLoading,
//   (res) => res,
// );

// export const getSlidesById = (id) => createSelector(
//   getData,
//   (slides) => (slides ? slides[id] : undefined),
// );

// export const getIsSlidesFetched = createSelector(
//   [getAllSlides],
//   (slides) => !!slides.length,
// );
