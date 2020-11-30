import React from 'react';
import { List } from '@material-ui/core';
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
    <div>
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
    </div>
  );
};

export default BlogCategory;
