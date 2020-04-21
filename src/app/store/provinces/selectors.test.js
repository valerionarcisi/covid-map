import {
  getAllProvinces,
  getProvincesIsError,
  getProvincesIsLoading,
  getValidProvinces,
} from './selectors';

describe('#Redux #Provinces #Selectors', () => {
  const state = {
    entities: {
      provinces: {
        data: [
          {
            denominazione_provincia: 'foo',
            lat: 0,
            long: 0,
          },
          {
            denominazione_provincia: 'bar',
            lat: 1,
            long: 1,
          },
          {
            denominazione_provincia: 'moo',
            lat: 2,
            long: 2,
          },
          {
            denominazione_provincia: 'baz',
            lat: 3,
            long: 3,
          },
        ],
        error: false,
        isLoading: false,
      },
    },
  };

  it('Get all data from entity', () => {
    const data = getAllProvinces(state);
    const expectedResult = [
      {
        denominazione_provincia: 'foo',
        lat: 0,
        long: 0,
      },
      {
        denominazione_provincia: 'bar',
        lat: 1,
        long: 1,
      },
      {
        denominazione_provincia: 'moo',
        lat: 2,
        long: 2,
      },
      {
        denominazione_provincia: 'baz',
        lat: 3,
        long: 3,
      },
    ];
    expect(data).toEqual(expectedResult);
  });

  it('Should return error state', () => {
    const error = getProvincesIsError(state);
    const expectedResult = false;
    expect(error).toEqual(expectedResult);
  });

  it('Should return loading state', () => {
    const loading = getProvincesIsLoading(state);
    const expectedResult = false;
    expect(loading).toEqual(expectedResult);
  });

  it('Get Valid Provinces if lat and long arent 0', () => {
    const data = getValidProvinces(state);
    const expectedResult = [
      {
        denominazione_provincia: 'bar',
        lat: 1,
        long: 1,
      },
      {
        denominazione_provincia: 'moo',
        lat: 2,
        long: 2,
      },
      {
        denominazione_provincia: 'baz',
        lat: 3,
        long: 3,
      },
    ];
    expect(data).toEqual(expectedResult);
  });
});
