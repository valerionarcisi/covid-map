import React from 'react';
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './app/store/reducers'
import App from './app/App';

const store = configureStore({
  reducer: rootReducer
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
