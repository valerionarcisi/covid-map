import {
  doSetProvs,
  doSetProvsError,
  doSetProvsLoading,
} from './../../store/storeInit';

import makeUseFetchAndSaveToRedux from '../useFetchAndSaveToRedux';

const endpoint = 'dpc-covid19-ita-province-latest.json';

function setData(data) {
  doSetProvs(data);
}

const useFetchProvAndSaveToRedux = () => {
  const payload = {
    endpoint,
    setData,
    setError: doSetProvsError,
    setIsLoading: doSetProvsLoading,
  };
  return makeUseFetchAndSaveToRedux(payload);
};

export default useFetchProvAndSaveToRedux;
