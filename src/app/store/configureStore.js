import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducersFactory from './reducers'

const configureStore = () => {

  const logger = createLogger({
    collapsed: true
  });

  const store = createStore(
    reducersFactory(),
    composeWithDevTools(applyMiddleware(logger)),
  );

  return store;
};

export default configureStore
