import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducersFactory from './reducers';
import { makeProvsActions } from './provinces';

const storeInit = () => {
  const logger = createLogger({
    collapsed: true,
  });

  const store = createStore(
    reducersFactory(),
    composeWithDevTools(applyMiddleware(logger))
  );

  return store;
};

export const store = storeInit();

export const {
  doSetProvs,
  doSetProvsLoading,
  doSetProvsError,
} = makeProvsActions(store.dispatch.bind(storeInit));
