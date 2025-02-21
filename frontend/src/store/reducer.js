// third party
import { combineReducers } from 'redux';

// project import
import customizationReducer from './customizationReducer';

// authentication reducer import
import authReducer
 from './auth/reducer';
// ==============================|| REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer, // Add auth to store
});

export default reducer;
