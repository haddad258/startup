// ArticlesReducers.js
const SET_FILTER_ID = 'SET_FILTER_ID';
const UPDATE_FILTER_ID = 'UPDATE_FILTER_ID';
const CLEAR_FILTER_ID = 'CLEAR_FILTER_ID';

const initialState = {
  filter: "", // Filter as a string
  item: {},     // ID as a string
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_ID:
      return setFilterId(state, action.payload);
    case UPDATE_FILTER_ID:
      return updateFilterId(state, action.payload);
    case CLEAR_FILTER_ID:
      return clearFilterId();
    default:
      return state;
  }
};

const setFilterId = (state, payload) => {
  const { filter, item } = payload;
  return { filter, item };
};

const updateFilterId = (state, payload) => {
  const { filter, item } = payload;
  return { ...state, filter: filter || state.filter, item: item || state.item };
};

const clearFilterId = () => {
  return { filter: "", item: {} };
};

export default ArticlesReducer;
