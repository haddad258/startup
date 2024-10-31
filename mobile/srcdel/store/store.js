// store.js

import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from './user/reducer'
import cartReducer from './cart/reducerCart'
import cartservicesReducer from "./cartservices/reducerCart";
import ArticlesReducer from "./filterdata/reducer";
const store = configureStore({
  reducer: {
    UserInfoReducer: UserInfoReducer,
    cartReducer: cartReducer,
    cartservicesReducer:cartservicesReducer,
    ArticlesReducer:ArticlesReducer
  },
});
export default store;
