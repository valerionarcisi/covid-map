import { useReducer, useEffect, useCallback } from 'react';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actions';

const useApiEffects = (
  req,
  endpoint,
  { verb = 'get', payload = null } = {},
  immediate = true
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(async () => {
    if (typeof req[verb] !== 'function') return;
    dispatch(fetching());

    try {
      const response = await req[verb](endpoint, { ...payload });
      const res = await response.data;
      dispatch(success(res));
    } catch ({ response = null, ...exception }) {
      dispatch(error(response, exception));
    }
  }, [req, verb, endpoint, payload]);

  useEffect(() => {
    if (immediate) {
      makeRequest();
    }
  }, [makeRequest, immediate]);

  return state;
};

export default useApiEffects;
