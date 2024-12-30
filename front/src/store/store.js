// store.js

import { configureStore } from "@reduxjs/toolkit";
// import UserInfoReducer from './user/reducer'
import cartReducer from './cart/reducerCart'

import changeState from './StateStore/reducer'
const store = configureStore({
  reducer: {
    // UserInfoReducer: UserInfoReducer,
    changeState:changeState,
    cartReducer: cartReducer,

  },
});

export default store;
