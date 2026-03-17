import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface WishListItem {
  id: string;
  name: string;
  image?: string;
  price?: number | string;
}

interface WishListState {
  items: WishListItem[];
}

export const WISHLIST_STORAGE_KEY = "WISHLIST_DATA";


const initialState: WishListState = {
  items: [],
};


export const saveWishListToStorage = async (items: WishListItem[]) => {
  try {
    await AsyncStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("Wishlist save error", e);
  }
};

export const loadWishListFromStorage = async (): Promise<WishListItem[]> => {
  try {
    const data = await AsyncStorage.getItem(WISHLIST_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Wishlist load error", e);
    return [];
  }
};


const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishList: (state, action: PayloadAction<WishListItem[]>) => {
      state.items = action.payload;
    },

    addToWishList: (state, action: PayloadAction<WishListItem>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearWishList: (state) => {
      state.items = [];
    },
  },
});


export const { addToWishList, removeFromWishList, clearWishList, setWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
