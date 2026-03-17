import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, updateQuantity } from '@/redux/Features/cart/cartSlice';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
  const navigation = useNavigation<any>();
  const { items, total } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const increaseQty = (item: any) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decreaseQty = (item: any) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Left: Image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Middle: Info */}
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        {/* Quantity Controls */}
        <View style={styles.qtyContainer}>
          <TouchableOpacity
            disabled={item.quantity === 1}
            onPress={() => decreaseQty(item)}
            style={[styles.qtyBtn, item.quantity === 1 && { opacity: 0.5 }]}
          >
            <Text style={styles.qtyText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => increaseQty(item)} style={styles.qtyBtn}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Right: Remove */}
      <TouchableOpacity
        style={styles.removeBtn}
        onPress={() => dispatch(removeFromCart(item.id))}
      >
        <Text style={styles.remove}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  // Empty cart UI
  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty 🛒</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderItem} />

      {/* Bottom Section */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.total}>${total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>

      {/* Clear Cart */}
      <TouchableOpacity style={styles.clearContainer} onPress={() => dispatch(clearCart())}>
        <Text style={styles.clear}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f9f9f9" },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "500", color: "#111" },
  price: { fontSize: 14, fontWeight: "400", color: "#666", marginVertical: 4 },
  qtyContainer: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  qtyBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyText: { fontSize: 16, fontWeight: "600", color: "#333" },
  qty: { marginHorizontal: 12, fontSize: 16, fontWeight: "500" },
  removeBtn: {
    marginLeft: 12,
    padding: 4,
    borderRadius: 6,
    backgroundColor: "#ffe6e6",
    justifyContent: "center",
    alignItems: "center",
  },
  remove: { color: "#ff5a5f", fontWeight: "700", fontSize: 16 },
  emptyContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  emptyText: { fontSize: 18, color: "#888", fontWeight: "500" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  totalLabel: { fontSize: 16, fontWeight: "500", color: "#333" },
  total: { fontSize: 18, fontWeight: "700", color: "#111", marginTop: 2 },
  checkoutBtn: {
    backgroundColor: "#ff5a5f",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  clearContainer: { marginTop: 12, alignItems: "center" },
  clear: { color: "#ff5a5f", fontSize: 14, fontWeight: "600" },
});
