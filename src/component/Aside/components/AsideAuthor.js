import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '@component/Aside/styles'; //eslint-disable-line
import { Box } from '@material-ui/core';

const AsideAuthor = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box component="h1" m="0"><Link to="/about" className={classes.link}>Дмитрий Сухоцкий</Link></Box>
    </Box>
  );
};

export default AsideAuthor;
