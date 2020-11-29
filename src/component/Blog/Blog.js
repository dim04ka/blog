import React from 'react';
import { Grid } from '@material-ui/core';
import PageAllPost from '@component/Blog/components/PageAllPost'; //eslint-disable-line
import PageSelectedCategory from '@component/Blog/components/PageSelectedCategory'; //eslint-disable-line
import BlogCategory from '@component/Blog/components/BlogCategory'; //eslint-disable-line
import Post from '@component/Blog/components/Post'; //eslint-disable-line
import { Switch, Route } from 'react-router-dom';

const Blog = () => {
  console.log('');
  return (
    <Grid container>
      <Grid item xs={8}>
        <Switch>
          <Route exact path="/blog/:category" component={PageSelectedCategory} />
          <Route exact path="/blog/:category/:id" component={Post} />
          <Route component={PageAllPost} />
        </Switch>
      </Grid>
      <Grid item xs={4}><BlogCategory /></Grid>
    </Grid>
  );
};

export default Blog;
