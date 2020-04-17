import { useEffect } from 'react';
import http from './../http';
import { useApiEffects, ERROR, SUCCESS, FETCHING } from './../useApiEffects';

/**
 *
 * @description setData, setError and setIsLoading are functions wrapping
 * an optional data transformation to create the action payload
 * and a call to dispatch the action to the store.
 * @param {Object} payload - helpers object
 * @param {function} payload.endpoint - endpoint of call, if `undefined` request not run
 * @param {function} payload.setData - transforms and dispatches fetched data
 * @param {function} payload.setError - dispatches fetch error
 * @param {function} payload.setIsLoading - dispatches fetch status
 * @returns [data, error, isLoading]
 */

const verb = 'get';

export default function makeUseFetchAndSaveToRedux({
  endpoint,
  setData,
  setError,
  setIsLoading,
}) {
  return function useFetchAndSaveToRedux() {
    const { status, response, exception } = useApiEffects(http, endpoint, {
      verb,
    });
    useEffect(() => {
      switch (status) {
        case null:
          break;
        case ERROR:
          setError(exception);
          setIsLoading(false);
          break;
        case FETCHING:
          setIsLoading(true);
          break;
        case SUCCESS:
          setData(response);
          setIsLoading(false);
          break;
        default:
          throw new Error('Unrecognized fetching status');
      }
    }, [status, response, exception]);
  };
}
