import { reducer as formReducer } from 'redux-form';

import { gridsReducer as grids } from '@platform/reducers/grids/gridsReducer'; //eslint-disable-line

const reducers = {
  form: formReducer,
  grids,
};

export default reducers;
