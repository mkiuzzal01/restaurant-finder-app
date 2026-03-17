import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ShippedInfo() {
  const { items } = useSelector((state: RootState) => state.cart);

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No items in cart.</Text>
      </View>
    );
  }

  const renderItem = ({ item }: any) => (
    <View style={styles.itemCard}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.qty}>Qty: {item.quantity}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  emptyContainer: { padding: 16, alignItems: "center" },
  emptyText: { fontSize: 16, color: "#555" },
  itemCard: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  name: { fontSize: 16, fontWeight: "500", marginBottom: 4 },
  price: { fontSize: 14, color: "#333" },
  qty: { fontSize: 14, color: "#555" },
});
