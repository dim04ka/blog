import { createSelector } from 'reselect';
import COMMON_CONSTANTS from '@platform/constants/COMMON_CONSTANTS'; //eslint-disable-line

export const gridsReducer = (state = [], action) => {
  if (action.type === `${COMMON_CONSTANTS.GRID_INIT}__${action.gridId}`) {
    return [...state, action.grid];
  }
  if (action.type === COMMON_CONSTANTS.GRID_CLOSE) {
    return state.filter(grid => grid.gridId !== action.gridId);
  }
  if (action.type === COMMON_CONSTANTS.GRID_CLOSE_ALL) {
    return [];
  }
  if (action.type === `${COMMON_CONSTANTS.GRID_LOADER}__${action.gridId}`) {
    return state.map(grid => {
      if (grid.gridId === action.gridId) {
        return {
          ...grid,
          isLoading: action.loading
        };
      }
      return grid;
    });
  }
  if (action.type === COMMON_CONSTANTS.GRID_CHANGE_FIELDS) {
    return state.map(grid => {
      if (grid.gridId === action.gridId) {
        return {
          ...grid,
          ...action.fields
        };
      }
      return grid;
    });
  }
  return state;
};

export const getGrids = state => state.grids;

export const getGridById = createSelector([getGrids, (_, props) => props.gridId], (gridsArray, gridId) => gridsArray.find(grid => grid.gridId === gridId) || {});

export const getGridItemsByGridId = createSelector([getGridById], grid => grid?.items || []);
