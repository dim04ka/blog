import React from 'react';
import { useStyles } from '@aside/styles'; //eslint-disable-line

const AsideContainer = () => {
  const classes = useStyles();
  const AsideContainerText = 'AsideContainer';
  return (
    <div className={classes.root}>
      { AsideContainerText }
    </div>
  );
};

export default AsideContainer;
