import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '@component/About'; //eslint-disable-line
import Contact from '@component/Contact'; //eslint-disable-line
import Blog from '@component/Blog'; //eslint-disable-line

const MainContainer = () => {
  console.log('');
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route>
          <Redirect to="/blog" />
        </Route>
      </Switch>
    </>
  );
};

export default MainContainer;
