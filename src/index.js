import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@platform/style/theme'; //eslint-disable-line
import CssBaseline from '@material-ui/core/CssBaseline';
import App from '@component/App';  //eslint-disable-line
import { Provider } from 'react-redux';
import store from '@store/store'; //eslint-disable-line
import { BrowserRouter } from 'react-router-dom';
import initActions from '@platform/scripts/initActions'; //eslint-disable-line

const ControllersContext = React.createContext();
const { appControllers } = initActions();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <ControllersContext.Provider value={appControllers}>
          <App />
        </ControllersContext.Provider>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
