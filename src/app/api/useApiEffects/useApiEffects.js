import { useReducer, useEffect } from 'react';
import reducer, { initialState } from './reducer';
import { fetching, success, error } from './actions';


/**
 * @description this is a little hook to handle api call statement.
 *
 * @param {*} req - instnace of request
 * @param {String} endpoint - endpoint to call
 * @param {Object} object - {verb, payload} of call
 *
 * @return {Object} state - {status: null,
 * response: null,
 * exception: null,
 * }
 *
 */


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
