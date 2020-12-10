import { makeStyles } from '@material-ui/core';
import Image from '@component/About/images/about.jpg'; //eslint-disable-line

export const useStyles = makeStyles(() => ({
  BoxWrapper: {
    overflow: 'hidden'
  },
  BoxImage: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  title: {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 600,
    '& span': {
      fontWeight: 900,
      color: '#1eafed'
    }
  },
  description: {
    fontFamily: 'Poppins, Arial, sans-serif',
    color: '#666666'
  }
}));