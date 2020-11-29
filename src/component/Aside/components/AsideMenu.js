import React from 'react';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Главная', to: '/' },
  { name: 'Блог', to: '/blog' },
  { name: 'Обо мне', to: '/about' },
  { name: 'Контакты', to: '/contact' }
];

const AsideMenu = () => {
  console.log('');
  return (
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
  );
};

export default AsideMenu;
