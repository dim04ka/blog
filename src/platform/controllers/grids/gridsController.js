import COMMON_CONSTANTS from '@platform/constants/COMMON_CONSTANTS'; //eslint-disable-line
import axios from 'axios';
import clean from 'lodash-clean';

const gridsController = {
  gridsController: {
    _dispatch: () => { },
    _getState: () => { },

    getGridFromReduxById(grids, gridId) {
      return grids.find(grid => grid.gridId === gridId);
    },
    getGridFromState(gridId) {
      const { grids } = this._getState();
      return this.getGridFromReduxById(grids, gridId);
    },
    async init(gridId, options) {
      this._dispatch({
        type: `${COMMON_CONSTANTS.GRID_INIT}__${gridId}`,
        gridId,
        grid: {
          gridId,
          ...options
        }
      });
    },
    async close(gridId) {
      this._dispatch({
        type: COMMON_CONSTANTS.GRID_CLOSE,
        gridId
      });
    },
    async closeAll() {
      this._dispatch({
        type: COMMON_CONSTANTS.GRID_CLOSE_ALL
      });
    },
    async changeFields({ gridId, fields }) {
      this._dispatch({
        type: COMMON_CONSTANTS.GRID_CHANGE_FIELDS,
        gridId,
        fields
      });
    },
    async isLoadingFields(gridId, loading) {
      this._dispatch({
        type: `${COMMON_CONSTANTS.GRID_LOADER}__${gridId}`,
        loading,
        gridId
      });
    },
    async getGrid({ gridId, queryParams, method = null, api, items, urlParams, pagination, sort, filter }) {
      const grid = !!this.getGridFromState(gridId);
      if (grid) {
        await this.updateGrid({ gridId, queryParams, method, api, items, urlParams, pagination, sort, filter });
      } else {
        await this.init(gridId, {
          isError: false,
        });
        await this.isLoadingFields(gridId, true);

        const urlQuery = { ...(sort) && { sort }, ...(pagination) && { pagination }, ...(filter) && { filter } };
        const reqString = JSON.stringify(clean(urlQuery));

        let dataResp = null;

        try {
          if (api) {
            const { data } = await axios({
              method: method || 'get',
              url: api,
              params: {
                ...(queryParams) && { ...queryParams },
                query: reqString
              },
              ...(urlParams) && { urlParams }
            });
            dataResp = data;
          }
          await this.changeFields({
            gridId,
            fields: {
              method: method || 'get',
              ...(api) && { api },
              ...(queryParams) && { queryParams },
              items: dataResp?.data || dataResp || items,
              ...(urlParams) && { urlParams },
              ...(dataResp?.sort) && { sort: dataResp.sort },
              ...(dataResp?.pagination) && { pagination: dataResp.pagination },
              ...(dataResp?.filter) && { filter: dataResp.filter },
            }
          });
        } catch (error) {
          const { response = null } = error;

          await this.changeFields({
            gridId,
            fields: {
              isError: response ? {
                status: response.status,
                ...(response.data && response.data.__message) && { message: response.data.__message }
              } : true,
              method: method || 'get',
              ...(api) && { api },
              ...(queryParams) && { queryParams },
              ...(urlParams) && { urlParams },
              ...(sort) && { sort },
              ...(pagination) && { pagination },
              ...(filter) && { filter },
            }
          });
        }
        await this.isLoadingFields(gridId, false);
      }
    },
    async updateGrid({
      gridId,
      queryParams,
      method,
      api,
      urlParams,
      pagination,
      items = [],
      sort,
      filter
    }) {
      await this.isLoadingFields(gridId, true);

      const grid = this.getGridFromState(gridId);

      await this.changeFields({
        gridId,
        fields: {
          isError: false
        }
      });

      const { method: gridMethod, api: gridApi, urlParams: gridUrlParams, queryParams: gridQueryParams, pagination: gridPagination = {}, sort: gridSort, filter: gridFilter } = grid;

      const { top = '', skip = '' } = gridPagination;
      const urlQuery = { ...(sort || gridSort) && { sort: { ...gridSort, ...sort } }, ...(pagination || gridPagination) && { pagination: { top, skip, ...pagination } }, ...(filter || gridFilter) && { filter: { ...gridFilter, ...filter } } };

      const reqString = JSON.stringify(clean(urlQuery));

      let dataResp = null;
      try {
        if (api || gridApi) {
          const { data } = await axios({
            method: method || gridMethod,
            url: api || gridApi,
            params: {
              ...(queryParams || gridQueryParams) && { ...queryParams, ...gridQueryParams },
              query: reqString
            },
            ...((urlParams) && { urlParams } || gridUrlParams && { urlParams: gridUrlParams })
          });
          dataResp = data;
        }
        await this.changeFields({
          gridId,
          fields: {
            items: dataResp?.data || dataResp || items,
            ...(method) && { method },
            ...(api) && { api },
            ...(queryParams || gridQueryParams) && { queryParams: { ...gridQueryParams, ...queryParams } },
            ...((urlParams) && { urlParams } || gridUrlParams && { urlParams: gridUrlParams }),
            ...(dataResp?.sort) && { sort: dataResp.sort },
            ...(dataResp?.pagination) && { pagination: dataResp.pagination },
            ...(dataResp?.filter) && { filter: dataResp.filter },
          }
        });
      } catch (error) {
        const { response = null } = error;
        await this.changeFields({
          gridId,
          fields: {
            isError: response ? {
              status: response.status,
              ...(response.data && response.data.__message) && { message: response.data.__message }
            } : true
          }
        });
      }
      await this.isLoadingFields(gridId, false);
    }
  },
  getGridsController({ dispatch, getState }) {
    this.gridsController._dispatch = dispatch;
    this.gridsController._getState = getState;
    return Object.create(this.gridsController);
  }
};

export const closeGridByIdController = gridsId => async (_dispatch, _getState, { gridsController: controller }) => {
  if (Array.isArray(gridsId)) {
    gridsId.forEach(id => controller.close(id));
  } else {
    controller.close(gridsId);
  }

  return true;
};

export default gridsController;
