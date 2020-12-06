import React from 'react';
import { List, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from '@component/Blog/styles'; //eslint-disable-line

const links = [
  { name: 'JavaScript', to: '/blog/js' },
  { name: 'React', to: '/blog/react' },
  { name: 'CSS', to: '/blog/css' },
  { name: 'Другое', to: '/blog/other' }
];

const BlogCategory = () => {
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: 'rgb(236 237 237)', height: '100%', minHeight: '100vh' }} px={4} py={6}>
      BlogCategory
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
    </Box>
  );
};

export default BlogCategory;
