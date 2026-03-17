import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/cartSlice";
import wishListReducer from "./Features/wishlist/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
