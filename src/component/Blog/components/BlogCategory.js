import React, { useEffect } from 'react';
import { List, Box, TextField, Typography, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from '@component/Blog/styles'; //eslint-disable-line
import SearchIcon from '@material-ui/icons/Search';
import Aos from 'aos';

const links = [
  { name: 'JavaScript', to: '/blog/js', count: 8 },
  { name: 'React', to: '/blog/react', count: 7 },
  { name: 'CSS', to: '/blog/css', count: 12 },
  { name: 'Другое', to: '/blog/other', count: 5 }
];

const popularPosts = [
  {
    id: 1,
    title: 'Новости JS',
    category: 'js',
    date: 'June 28, 2019',
    comment: [
      { name: 'John Doe', date: 'June 27, 2019', textComment: 'lorem lorem lorem' },
      { name: 'John Doe2', date: 'June 28, 2019', textComment: 'lorem lorem lorem2' },
      { name: 'John Doe3', date: 'June 29, 2019', textComment: 'lorem lorem lorem3' },
    ],
    img: 'https://preview.colorlib.com/theme/andrea/images/image_1.jpg',
  },
  {
    id: 2,
    title: 'Новости JS2222',
    category: 'js',
    date: 'June 28, 2019',
    comment: [
      { name: 'John Doe', date: 'June 27, 2019', textComment: 'lorem lorem lorem' },
      { name: 'John Doe2', date: 'June 28, 2019', textComment: 'lorem lorem lorem2' },
      { name: 'John Doe3', date: 'June 29, 2019', textComment: 'lorem lorem lorem3' },
    ],
    img: 'https://preview.colorlib.com/theme/andrea/images/image_1.jpg',
  },
  {
    id: 3,
    title: 'Новости JS333',
    category: 'js',
    date: 'June 28, 2019',
    comment: [
      { name: 'John Doe', date: 'June 27, 2019', textComment: 'lorem lorem lorem' },
      { name: 'John Doe2', date: 'June 28, 2019', textComment: 'lorem lorem lorem2' },
      { name: 'John Doe3', date: 'June 29, 2019', textComment: 'lorem lorem lorem3' },
    ],
    img: 'https://preview.colorlib.com/theme/andrea/images/image_1.jpg',
  }
];

const BlogCategory = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box style={{ backgroundColor: 'rgba(236, 237, 237,0.33)', height: '100%', minHeight: '100vh' }} px={4} py={6}>
      <Box display="flex" pb={5}>
        <TextField
          data-aos="flip-left"
          data-aos-delay="100"
          fullWidth
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
          InputProps={{
            endAdornment: <SearchIcon />
          }}
        />
      </Box>
      <Box pb={3} data-aos="fade-up">
        <Typography variant="h5" style={{ fontFamily: 'Lora', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.8)' }}>Категории</Typography>
      </Box>
      <Box pb={3} data-aos="fade-up">
        <List>
          {
            links.map(({ name, to, count }) => (
              <li key={name} className={classes.li}>
                <NavLink to={to} activeClassName="selected" style={{ color: 'black' }}>
                  <Box style={{ borderBottom: '1px solid #dee2e6' }} py={2} display="flex" justifyContent="space-between">
                    <Typography variant="subtitle2" style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</Typography>
                    <Typography variant="subtitle2" style={{ fontFamily: 'Poppins, sans-serif', color: '#ccc' }}>({count})</Typography>
                  </Box>
                </NavLink>
              </li>
            ))
          }
        </List>
      </Box>

      <Box pb={3} data-aos="fade-up">
        <Typography variant="h5" style={{ fontFamily: 'Lora', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.8)' }}>Популярные посты</Typography>
      </Box>
      <Box>
        <List data-aos="fade-up">
          {
            popularPosts.map(({ id, title, img }) => (
              <Box component={Grid} container key={id} pb={3} spacing={2}>
                <Grid item xs={3}>
                  <Box
                    width="80px"
                    height="80px"
                    style={{ background: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover' }} //eslint-disable-line
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                </Grid>
                <Grid item xs={9}>{title}</Grid>
              </Box>
            ))
          }
        </List>
      </Box>
    </Box>
  );
};

export default BlogCategory;
