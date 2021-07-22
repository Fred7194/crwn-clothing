import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppHooks from './AppHooks';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppHooks />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
