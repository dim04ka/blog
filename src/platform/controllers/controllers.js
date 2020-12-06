import gridsController from './grids/gridsController';

const controllers = {
  getGridsController(...args) {
    return gridsController.getGridsController(...args);
  }
};

export default controllers;
