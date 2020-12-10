import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { useStyles } from '@component/About/styles'; //eslint-disable-line
import Aos from 'aos';

const About = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box className={classes.BoxWrapper}>
      <Box component={Grid} container height="100vh">
        <Grid item xs={6} className={classes.BoxImage} />
        <Box component={Grid} item xs={6} display="flex" alignItems="center">
          <Box pl={10} data-aos="fade-left">
            <Typography variant="h3" className={classes.title}>Я <Box component="span">Сухоцкий Дмитрий</Box> белорусский блогер и путешественник</Typography>
            <Box component={Typography} pt={5} className={classes.description}>Здесь будет написаша информация обо мне, чем я увлекаюсь и что делаю. Дополнительная информация находится на вкладке &quot;Контакты&quot;</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
