import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../app/slice/productsSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },
});
