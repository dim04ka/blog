import { createMuiTheme } from '@material-ui/core/styles';
import './fonts/fonts.css';

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#467fcf' }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
        },
      },
    }
  },
});
export default theme;
