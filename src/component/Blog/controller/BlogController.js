import COMMON_CONSTANTS from '@platform/constants/COMMON_CONSTANTS'; //eslint-disable-line
import { createSelector } from 'reselect';

const initBlogItemsController = () => async (dispatch, getState, { gridsController }) => {
  gridsController.getGrid({
    gridId: COMMON_CONSTANTS.GRID_POSTS,
    items: COMMON_CONSTANTS.INITIAL_POSTS
  });
};

const CloseBlogItemsController = () => async (_dispatch, _getState, { gridsController }) => {
  gridsController.close(COMMON_CONSTANTS.GRID_POSTS);
};

const getGrid = state => state.grids;
const getGridById = createSelector(getGrid, gridsArray => gridsArray.find(grid => grid.gridId === COMMON_CONSTANTS.GRID_POSTS) || {});

export {
  initBlogItemsController,
  CloseBlogItemsController,
  getGridById
};