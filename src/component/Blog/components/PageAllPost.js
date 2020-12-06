import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@material-ui/core';
import { DEFAULT_IMAGE } from '@platform/constants'; //eslint-disable-line
import DateRangeIcon from '@material-ui/icons/DateRange';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import CommentIcon from '@material-ui/icons/Comment';
import Aos from 'aos';

const PostItem = ({ id, title, category, img, date, comment, shortDiscription }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log('');
  return (
    <Grid container spacing={3} data-aos="fade-up">
      <Grid item xs={3}>
        <Box
          width="150px"
          height="150px"
          borderRadius="50%"
          overflow="hidden"
          style={{ background: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover' }} //eslint-disable-line
          display="flex"
          alignItems="center"
          justifyContent="center"
        />
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <Typography component="p" variant="h4" style={{ fontFamily: 'Lora, serif' }}>{title}</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Box component={Grid} item style={{ color: '#bfbfbf' }} display="flex" alignItems="center">
                <Box pr={1}>
                  <DateRangeIcon />
                </Box>
                <Typography variant="subtitle2">{date}</Typography>
              </Box>
              <Box component={Grid} item display="flex" alignItems="center">
                <Box pr={1}>
                  <FolderOpenIcon />
                </Box>
                <Typography variant="subtitle2">{category}</Typography>
              </Box>
              <Box component={Grid} item style={{ color: '#bfbfbf' }} display="flex" alignItems="center">
                <Box pr={1}>
                  <CommentIcon />
                </Box>
                <Typography variant="subtitle2">{comment && comment.length ? `${comment.length} комментария` : 'Нет комментариев'}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Typography component="p" variant="subtitle1" style={{ fontFamily: 'Poppins, sans-serif', color: '#666666' }}>{shortDiscription}</Typography>
          </Grid>
          <Grid item><Link to={`/blog/${category}/${id}`} style={{ fontFamily: 'Poppins, sans-serif', color: '#1eafed', textDecoration: 'none', fontWeight: 'bold' }}>Читать больше &gt;</Link></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  img: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.arrayOf(PropTypes.shape({})),
  shortDiscription: PropTypes.string
};

PostItem.defaultProps = {
  img: DEFAULT_IMAGE,
  date: 'May 5, 2019',
  comment: null,
  shortDiscription: 'Коротное и четкое описание статьи'
};

const PageAllPost = ({ list }) => {
  console.log('list', list);
  return (
    <Box px={4} py={6}>
      <Box component={Typography} pb={2} data-aos="zoom-in">Показаны посты включающие все категории ({list.length})</Box>
      <Grid container spacing={10}>
        {
          list && list.map(el => (
            <Grid item key={el.id} xs={12}>
              <PostItem {...el} />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};

PageAllPost.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape)
};

PageAllPost.defaultProps = {
  list: []
};

export default compose(
  connect(state => state.blogReducer)
)(PageAllPost);