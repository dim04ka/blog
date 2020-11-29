import React from 'react';
import { useStyles } from '@aside/styles'; //eslint-disable-line
import AsideMenu from '@component/Aside/components/AsideMenu'; //eslint-disable-line
import AsideAuthor from '@component/Aside/components/AsideAuthor'; //eslint-disable-line
import { Grid } from '@material-ui/core';

const AsideContainer = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="space-between" className={classes.root}>
      <Grid item><AsideMenu /></Grid>
      <Grid item><AsideAuthor /></Grid>
    </Grid>
  );
};

export default AsideContainer;
