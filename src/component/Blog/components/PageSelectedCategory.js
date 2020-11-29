import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PageSelectedCategory = ({ list }) => {
  const { category } = useParams();
  const categoryFilter = () => list.filter(el => el.category === category);

  return (
    <div>
      Посты в категории - { category } ({ categoryFilter() && categoryFilter().length})
      {
        categoryFilter() && categoryFilter().map(({ id, title }) => (
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

PageSelectedCategory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape)
};

PageSelectedCategory.defaultProps = {
  list: []
};

export default compose(
  connect(state => state.blogReducer)
)(PageSelectedCategory);
