import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Post = ({ list }) => {
  const { id } = useParams();
  const postSearchById = () => list.filter(el => el.id === +id);

  return (
    <div>
      Single post
      {
        postSearchById() && postSearchById().length ? (
          postSearchById().map(({ title, discription }) => (
            <div key={title}>
              <div>{title}</div>
              <div>{discription}</div>
            </div>
          )
          )
        ) : (
          <>
            <div>Поста не найдено</div>
            <Link to="/">Вернуться обратно</Link>
          </>
        )
      }
    </div>
  );
};

Post.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape)
};

Post.defaultProps = {
  list: []
};

export default compose(
  connect(state => state.blogReducer)
)(Post);