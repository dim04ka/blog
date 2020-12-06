import { dispatch, getState } from '@store/store'; //eslint-disable-line
import controllers from '@platform/controllers/controllers'; //eslint-disable-line

const gridsController = controllers.getGridsController({
  dispatch,
  getState
});

export const appControllers = {
  gridsController
};

const initActions = () => appControllers;

export default initActions;
