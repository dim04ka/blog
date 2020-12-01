import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageAllPost = ({ list }) => {
  console.log('list', list);
  return (
    <div>
      Показаны посты включающие все категории ({list.length})
      {
        list && list.map(({ id, title, category }) => (
          <div key={id} style={{ border: '1px solid red', marginBottom: 20 }}>
            <div>title: {title}</div>
            <div>category: {category}</div>
            <Link to={`/blog/${category}/${id}`}>ПЕРЕЙТИ</Link>
          </div>
        ))
      }
    </div>
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