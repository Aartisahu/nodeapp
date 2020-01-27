import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './registeredUsers.js';
import './Register.js';
import './Login.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from '../src/reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

  const store=  createStore(
    reducer
  )
  ReactDOM.render(
  <Provider store={store}>
    <App />   
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
