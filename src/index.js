import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  cart: cartReducer
})


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__ ());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(

    app,
  document.getElementById('root')
);

