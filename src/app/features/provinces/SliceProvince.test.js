import proviceReducer, { getProvincesStart, getProvincesSuccess, getProvincesFailure } from './SliceProvince'

const initialState = {
  data: [],
  loading: false,
  error: null
}

describe('provice reducer', () => {
  it('should handle initial state', () => {
    expect(proviceReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle getProvincesStart', () => {
    expect(proviceReducer(
      initialState,
      {
        type: getProvincesStart.type
      }
    )).toEqual({
      data: [],
      loading: true,
      error: null
    })
  })
  it('should handle getProvincesSuccess', () => {
    expect(proviceReducer(
      initialState,
      {
        type: getProvincesSuccess.type,
        payload: {foo: 'bar'}
      }
    )).toEqual({
      data: {foo: 'bar'},
      loading: false,
      error: null
    })
  })
  it('should handle getProvincesFailure', () => {
    expect(proviceReducer(
      initialState,
      {
        type: getProvincesFailure.type,
        payload: {error: 'error yada yada'}
      }
    )).toEqual({
      data: [],
      loading: false,
      error: {error: 'error yada yada'}
    })
  })
})
