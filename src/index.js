import ReactDOM from 'react-dom';
import React from 'react';
import App from '@component/App';  //eslint-disable-line
import { Provider } from 'react-redux';
import { store } from '@store/store'; //eslint-disable-line
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
