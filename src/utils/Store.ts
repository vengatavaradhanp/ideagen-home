import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../actions/product/ProductSlice";
import { createLogger } from 'redux-logger';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
