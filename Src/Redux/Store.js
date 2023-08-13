import { configureStore } from "@reduxjs/toolkit";
import ProductApi from "./Api/ProductApi";

const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(ProductApi.middleware),
});
export default store;
