import { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actions';

const useApiEffects = (
  req,
  endpoint,
  { verb = 'get', payload = null } = {}
) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let didCanceled = false;
    const makeRequest = async () => {
      if (typeof req[verb] !== 'function' || typeof endpoint === undefined)
        return;

      if (!didCanceled) dispatch(fetching());

      try {
        const response = await req[verb](endpoint, { ...payload });
        const res = await response.data;
        if (!didCanceled) dispatch(success(res));
      } catch ({ response = null, ...exception }) {
        if (!didCanceled) dispatch(error(response, exception));
      }
    };

    makeRequest();
    return () => {
      didCanceled = true;
      return didCanceled;
    };
  }, [req, verb, endpoint, payload]);

  return state;
};

export default useApiEffects;
