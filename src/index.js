import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@platform/style/theme'; //eslint-disable-line
import CssBaseline from '@material-ui/core/CssBaseline';
import App from '@component/App';  //eslint-disable-line
import { Provider } from 'react-redux';
import { store } from '@store/store'; //eslint-disable-line
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
