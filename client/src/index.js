import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { LOGIN } from './actions/types';
import decodeJWT from './utils/decodeJWT';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

if (sessionStorage.jwToken) {
  setAuthToken(sessionStorage.jwToken);
  store.dispatch({
    type: LOGIN,
    payload: decodeJWT(sessionStorage.jwToken)
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
