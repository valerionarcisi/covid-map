import React from 'react';
import { Provider } from 'react-redux'
import App from './app/App';

function CovidMapApp({ store }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

export default CovidMapApp;
