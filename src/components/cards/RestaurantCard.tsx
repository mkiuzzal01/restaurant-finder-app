import { Restaurant } from "@/screens/home/restaurantData";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


interface PopularCardProps {
  item: Restaurant;
}

export default function RestaurantCard({ item, }: PopularCardProps) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Restaurants", { id: item?.id })} activeOpacity={0.8}>
      {/* Restaurant Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.detailsRow}>
          {/* Rating */}
          <View style={styles.rating}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
          </View>

          {/* Distance */}
          <Text style={styles.detailText}>{item.distance}</Text>

          {/* Price */}
          <Text style={styles.detailText}>৳ {item.price}</Text>
        </View>

        {/* Category */}
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginRight: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: "#555",
    fontWeight: "500",
  },
  detailText: {
    fontSize: 13,
    color: "#888",
    marginRight: 12,
  },
  category: {
    fontSize: 12,
    color: "#aaa",
  },
});
