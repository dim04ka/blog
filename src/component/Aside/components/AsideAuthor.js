import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '@component/Aside/styles'; //eslint-disable-line

const AsideAuthor = () => {
  const classes = useStyles();
  return (
    <div>
      <h1><Link to="/about" className={classes.link}>Дмитрий Сухоцкий</Link></h1>
      <h3>Copyright ©2020 </h3>
    </div>
  );
};

export default AsideAuthor;
