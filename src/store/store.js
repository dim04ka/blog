import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore
} from 'redux';
import ReduxThunk from 'redux-thunk';
import gridsController from '@platform/controllers/grids/gridsController'; //eslint-disable-line

import reducers from './reducer';

const middlewares = [ReduxThunk.withExtraArgument({ gridsController: gridsController.gridsController })];

const createReduxStore = () => {
  let composeFunction;
  /* eslint-disable */
  if (process.env.NODE_ENV !== 'production' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    /* eslint-enable */
  } else {
    composeFunction = compose;
  }
  return createStore(combineReducers(reducers), composeFunction(applyMiddleware(...middlewares)));
};

const store = createReduxStore();
const { dispatch, getState } = store;

export default store;
export { dispatch, getState };
