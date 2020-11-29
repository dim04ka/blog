import React from 'react';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom';

const links = [
  { name: 'JavaScript', to: '/blog/js' },
  { name: 'React', to: '/blog/react' },
  { name: 'CSS', to: '/blog/css' },
  { name: 'Другое', to: '/blog/other' }
];

const BlogCategory = () => {
  console.log('');
  return (
    <div>
      BlogCategory
      <List>
        {
          links.map(({ name, to }) => (
            <li key={name}>
              <Link to={to} style={{ color: 'black' }}>
                {name}
              </Link>
            </li>
          ))
        }
      </List>
    </div>
  );
};

export default BlogCategory;
