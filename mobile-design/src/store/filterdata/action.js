// store/filterdata/action.js
export const SET_FILTER_ID = 'SET_FILTER_ID';
export const UPDATE_FILTER_ID = 'UPDATE_FILTER_ID';
export const CLEAR_FILTER_ID = 'CLEAR_FILTER_ID';

export const setFilterId = (filter, item) => {
  return {
    type: SET_FILTER_ID,
    payload: { filter, item },
  };
};

export const updateFilterId = (filter, item) => {
  return {
    type: UPDATE_FILTER_ID,
    payload: { filter, item },
  };
};

export const clearFilterId = () => {
  return {
    type: CLEAR_FILTER_ID,
  };
};
