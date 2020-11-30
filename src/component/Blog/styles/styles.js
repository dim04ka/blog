import { makeStyles } from '@material-ui/core/styles';
// import { colors } from '@styles/theme';

export const useStyles = makeStyles({
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
