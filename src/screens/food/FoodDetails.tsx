import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { foodData } from "./FoodData";
import { styles } from "./style.food";

export default function FoodDetails() {
  return (
    <View style={styles.container}>
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

      <TouchableOpacity style={styles.addToCartBtn}>
        <Text style={styles.addToCartBtnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
