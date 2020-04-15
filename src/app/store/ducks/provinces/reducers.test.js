import { SET_PROVS, SET_PROVS_LOADING, SET_PROVS_ERROR } from './types'
import reducers from './reducers'

describe('#Redux #Prov #Reducers', () => {
  let state = reducers(undefined, {})
  const prov1 = {
    1: 'a',
    2: 'b'
  }

  const prov2 = {
    3: 'a',
  }

  it('#initialState', () => {
    expect(state).toEqual({ data: {}, error: null, isLoading: false })
  })

  it('#setProv', () => {
    state = reducers(state, {
      type: SET_PROVS,
      payload: prov1
    })
    expect(state).toEqual({ data: prov1, error: null, isLoading: false })

    state = reducers(state, {
      type: SET_PROVS,
      payload: prov2
    })

    expect(state).toEqual({
      data: {
        1: 'a',
        2: 'b',
        3: 'a'
      }, error: null, isLoading: false
    })
  })

  it('#setLoading', () => {
    state = reducers(state, {
      type: SET_PROVS_LOADING,
      payload: true
    })
    expect(state).toEqual({ data: {
      1: 'a',
      2: 'b',
      3: 'a'
    }, error: null, isLoading: true })

    state = reducers(state, {
      type: SET_PROVS_LOADING,
      payload: false
    })
    expect(state).toEqual({ data: {
      1: 'a',
      2: 'b',
      3: 'a'
    }, error: null, isLoading: false })
  })

  it('#setError', () => {
    state = reducers(state, {
      type: SET_PROVS_ERROR,
      payload: true
    })
    expect(state).toEqual({ data: {
      1: 'a',
      2: 'b',
      3: 'a'
    }, error: true, isLoading: false })

    state = reducers(state, {
      type: SET_PROVS_ERROR,
      payload: null
    })
    expect(state).toEqual({ data: {
      1: 'a',
      2: 'b',
      3: 'a'
    }, error: null, isLoading: false })
  })

})
