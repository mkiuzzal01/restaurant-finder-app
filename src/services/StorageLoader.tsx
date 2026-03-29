import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEY, setCart } from '@/redux/Features/cart/cartSlice'
import { WISHLIST_STORAGE_KEY, setWishList } from '@/redux/Features/wishlist/wishListSlice';

export default function StorageLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        const wishlistData = await AsyncStorage.getItem(WISHLIST_STORAGE_KEY);
        if (data) {
          dispatch(setCart(JSON.parse(data)));
        }
        if (wishlistData) {
          dispatch(setWishList(JSON.parse(wishlistData)));
        }
      } catch (e) {
        console.log("Load error", e);
      }
    };

    loadCart();
  }, [children]);

  return <>{children}</>;
}
