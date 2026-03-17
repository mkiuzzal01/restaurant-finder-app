import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { foodData } from "./FoodData";
import { styles } from "./style.food";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { addToCart } from "@/redux/Features/cart/cartSlice";

export default function FoodDetails() {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...foodData, quantity: 1 }));
    ToastAndroid.show("Added to cart", ToastAndroid.SHORT);
  };

  return (
    <View>
      <Image source={{ uri: foodData.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{foodData.name}</Text>

        <Text style={styles.rating}>⭐ {foodData.rating}</Text>

        <Text style={styles.category}>{foodData.category}</Text>

        <Text style={styles.description}>{foodData.description}</Text>

        <Text style={styles.price}>${foodData.price}</Text>

        <Text style={styles.delivery}>
          Delivery: {foodData.deliveryTime}
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
        <Text style={styles.addToCartBtnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
