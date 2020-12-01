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
    bottom: 0,
    padding: '50px 30px'
  },
  li: {
    fontSize: 30,
    fontWeight: 500,
    '& a': {
      color: '#4C4C4C!important',
      textDecoration: 'none',
      position: 'relative',
      '&:after': {
        content: '\'\'',
        background: '#1eafed',
        position: 'absolute',
        left: 0,
        right: 0,
        height: '2px',
        bottom: '-5px',
        transform: 'scaleX(0)',
        transition: 'all .3s ease',
      },
      '&:hover': {
        color: 'black!important',
        '&:after': {
          transition: 'all .3s ease',
          transform: 'scaleX(1)'
        }
      }
    },
    '& a.selected': {
      color: '#1eafed!important',
      transition: 'all .3s ease',
      '&:hover': {
        color: '#1eafed!important'
      },
      '&:after': {
        transition: 'all .3s ease',
        transform: 'scaleX(1)'
      }
    }
  }

});