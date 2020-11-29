import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { mainReducer } from './main';
import { blogReducer } from './blog';

export default combineReducers({
  mainReducer,
  blogReducer,
  form: formReducer,
});
