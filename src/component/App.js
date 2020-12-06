import React from 'react';
import { Grid } from '@material-ui/core';
import AsideContainer from '@aside'; //eslint-disable-line
import MainContainer from '@main'; //eslint-disable-line 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    minHeight: '100vh',
    maxWidth: 1920,
    margin: '0 auto',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={3}><AsideContainer /></Grid>
      <Grid item xs={9}><MainContainer /></Grid>
    </Grid>
  );
};

export default App;
