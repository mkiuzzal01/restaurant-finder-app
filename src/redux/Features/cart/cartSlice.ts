import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.total -= existingItem.price;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state: CartState) => {
      state.items = [];
      state.total = 0;
    },
    updateQuantity: (state: CartState, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.total -= existingItem.price * existingItem.quantity;
        state.total += existingItem.price * quantity;
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
