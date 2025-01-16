// store.js

import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from './user/reducer'
import cartReducer from './cart/reducerCart'
import purchaseCartReducer from './cart.purchase/reducerCart'
import ArticlesReducer from "./filterdata/reducer";
import syncModeReducer from "./syncModeSlice"
const store = configureStore({
  reducer: {
    UserInfoReducer: UserInfoReducer,
    cartReducer: cartReducer,
    purchaseCartReducer: purchaseCartReducer,
    ArticlesReducer:ArticlesReducer,
    syncMode: syncModeReducer,
  },
});
export default store;
