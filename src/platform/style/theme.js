import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#467fcf' }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
        },
      },
    },
  },
});
export default theme;
