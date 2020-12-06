import React, { useEffect } from 'react';
import { List, Box } from '@material-ui/core';
import { withRouter, NavLink } from 'react-router-dom';
import { useStyles } from '@component/Aside/styles'; //eslint-disable-line
import Aos from 'aos';

const links = [
  { name: 'Блог', to: '/blog' },
  { name: 'Обо мне', to: '/about' },
  { name: 'Контакты', to: '/contact' }
];

const AsideMenu = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <List data-aos="fade-up">
      {
        links.map(({ name, to }) => (
          <Box component="li" pb={2} key={name} className={classes.li}>
            <NavLink to={to} activeClassName="selected" style={{ color: 'black' }}>
              {name}
            </NavLink>
          </Box>
        ))
      }
    </List>
  );
};

export default withRouter(AsideMenu);
