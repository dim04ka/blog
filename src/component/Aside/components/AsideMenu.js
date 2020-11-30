import React from 'react';
import { List } from '@material-ui/core';
import { withRouter, NavLink } from 'react-router-dom';
import { useStyles } from '@component/Aside/styles'; //eslint-disable-line

const links = [
  { name: 'Блог', to: '/blog' },
  { name: 'Обо мне', to: '/about' },
  { name: 'Контакты', to: '/contact' }
];

const AsideMenu = () => {
  const classes = useStyles();
  console.log('');
  return (
    <List>
      {
        links.map(({ name, to }) => (
          <li key={name} className={classes.li}>
            <NavLink to={to} activeClassName="selected" style={{ color: 'black' }}>
              {name}
            </NavLink>
          </li>
        ))
      }

    </List>
  );
};

export default withRouter(AsideMenu);
