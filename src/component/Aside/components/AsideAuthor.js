import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '@component/Aside/styles'; //eslint-disable-line
import { Box } from '@material-ui/core';
import Aos from 'aos';

const AsideAuthor = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box data-aos="fade-up">
      <Box component="h1" m="0"><Link to="/about" className={classes.link}>Дмитрий Сухоцкий</Link></Box>
    </Box>
  );
};

export default AsideAuthor;
