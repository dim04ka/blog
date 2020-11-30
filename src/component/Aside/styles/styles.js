import { makeStyles } from '@material-ui/core/styles';
// import { colors } from '@styles/theme';

export const useStyles = makeStyles({
  root: {
    border: '1px solid red',
    position: 'fixed',
    background: 'white',
    width: '25%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  li: {
    '& a': {
      textDecoration: 'none'
    },
    '& .selected': {
      borderBottom: '1px solid white',
      color: '#1eafed!important'
    }
  }
});
