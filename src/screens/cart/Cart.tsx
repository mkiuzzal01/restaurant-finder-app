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
import { styles } from './style.cart';

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
      {/* Remove Button */}
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


