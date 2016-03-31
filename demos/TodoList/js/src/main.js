import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './../containers/App';
import todoApp from './reducers';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(todoApp);

console.log('STORE',store.getState());

let unsubscribe = store.subscribe(() =>
  console.log('STORE',store.getState())
);

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
